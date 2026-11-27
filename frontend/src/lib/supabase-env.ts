/**
 * Reads the Supabase-related environment variables used by Payload.
 * See .env.example for what each one is and where to find it.
 */

/**
 * Postgres connection string for Payload.
 *
 * Paste the pooler URI from Supabase (Connect → Connection string) as DATABASE_URL.
 * If it still contains the `[YOUR-PASSWORD]` (or `[YOUR-DATABASE-PASSWORD]`) placeholder, the password is taken
 * from DATABASE_PASSWORD, so the secret can live in its own variable.
 */
export function databaseURL(): string {
  const url = process.env.DATABASE_URL ?? "";
  if (!url) return "";

  if (!/^postgres(ql)?:\/\//.test(url)) {
    throw new Error(
      "DATABASE_URL must be a Postgres connection string (postgresql://...), " +
        "not the Supabase project URL. Copy it from Supabase → Connect → Connection string.",
    );
  }

  // Supabase shows either [YOUR-PASSWORD] or [YOUR-DATABASE-PASSWORD] depending on the screen.
  const placeholder = /\[YOUR-(?:DATABASE-)?PASSWORD\]/;
  const password = process.env.DATABASE_PASSWORD;
  if (placeholder.test(url)) {
    if (!password)
      throw new Error("DATABASE_URL has [YOUR-PASSWORD] but DATABASE_PASSWORD is not set.");
    return url.replace(placeholder, encodeURIComponent(password));
  }
  return url;
}

const supabaseURL = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "");
const bucket = process.env.SUPABASE_STORAGE_BUCKET || "media";
const accessKeyId = process.env.SUPABASE_S3_ACCESS_KEY_ID ?? "";
const secretAccessKey = process.env.SUPABASE_S3_SECRET_ACCESS_KEY ?? "";
const region = process.env.SUPABASE_S3_REGION ?? "";

if ((accessKeyId || secretAccessKey) && !supabaseURL) {
  console.warn(
    "[payload] Supabase S3 keys are set but NEXT_PUBLIC_SUPABASE_URL is missing: " +
      "uploads will be stored on the local disk instead of Supabase Storage.",
  );
}

/** Settings for storing uploads in Supabase Storage through its S3-compatible API. */
export const supabaseStorage = {
  enabled: Boolean(supabaseURL && accessKeyId && secretAccessKey && region),
  bucket,
  region,
  accessKeyId,
  secretAccessKey,
  endpoint: supabaseURL ? `${supabaseURL}/storage/v1/s3` : undefined,
  /** Public URL of a file in the (public) bucket. */
  publicURL: (key: string) =>
    `${supabaseURL}/storage/v1/object/public/${bucket}/${key.split("/").map(encodeURIComponent).join("/")}`,
};
