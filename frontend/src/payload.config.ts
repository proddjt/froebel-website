import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { en } from "@payloadcms/translations/languages/en";
import { it } from "@payloadcms/translations/languages/it";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { databaseURL, supabaseStorage } from "./lib/supabase-env";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "– Froebel",
    },
  },

  // Admin panel in Italian by default, English available from the account menu.
  i18n: {
    fallbackLanguage: "it",
    supportedLanguages: { it, en },
  },

  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,

  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  // Supabase Postgres. In development Payload pushes schema changes directly;
  // in production the schema only changes through migrations in src/migrations.
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL(),
      // Serverless functions on Vercel each open their own pool, so keep it small
      // and let the Supabase pooler do the real pooling.
      max: process.env.VERCEL ? 2 : 10,
      idleTimeoutMillis: 10_000,
    },
    migrationDir: path.resolve(dirname, "migrations"),
  }),

  plugins: [
    // Uploads go to Supabase Storage (S3 API). Without the S3 env vars,
    // files are stored on the local disk instead, which is fine for development.
    s3Storage({
      enabled: supabaseStorage.enabled,
      collections: {
        media: {
          // Files are served straight from the public Supabase bucket,
          // not proxied through Payload. Media is publicly readable anyway.
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) =>
            supabaseStorage.publicURL([prefix, filename].filter(Boolean).join("/")),
        },
      },
      bucket: supabaseStorage.bucket,
      config: {
        endpoint: supabaseStorage.endpoint,
        region: supabaseStorage.region,
        forcePathStyle: true,
        credentials: {
          accessKeyId: supabaseStorage.accessKeyId,
          secretAccessKey: supabaseStorage.secretAccessKey,
        },
      },
    }),
  ],
});
