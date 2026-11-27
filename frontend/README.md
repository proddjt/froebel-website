# Froebel website (frontend)

Everything you need to go from a fresh clone to a running site on `http://localhost:3000`.

The frontend is a **Next.js 16** app (App Router, React 19, TypeScript) styled with **Mantine 9**, with **Payload 3** as the CMS (PostgreSQL database and file storage on Supabase). It lives in the `frontend/` folder of the repo; all commands below run from there.

---

## 1. Prerequisites

| Tool     | Version                                                                                   | Check with      |
| -------- | ----------------------------------------------------------------------------------------- | --------------- |
| Node.js  | **26.13.1 or newer** (required by Payload 3.94; it also accepts `^22.23.5` or `^24.22.3`) | `node -v`       |
| npm      | comes with Node                                                                           | `npm -v`        |
| Supabase | access to the `froebel-payload-dev` project (ask a maintainer)                            | —               |
| Git      | any recent version                                                                        | `git --version` |

The required Node version is also set in `package.json` (`engines`), so npm warns if yours is too old.

On Windows we use [nvm-windows](https://github.com/coreybutler/nvm-windows) to install and switch Node versions:

```powershell
nvm install 26.13.1
nvm use 26.13.1
```

If `node` isn't recognized after `nvm use`, check that `C:\nvm4w\nodejs` is in your PATH and that it is a link to the installed version (`Get-Item C:\nvm4w\nodejs | Select-Object LinkType, Target`).

> Use **npm**, not yarn/pnpm/bun — the repo is locked with `package-lock.json` and CI runs `npm ci`.

## 2. Clone the repository

```bash
git clone <repo-url> froebel-website
cd froebel-website/frontend
```

## 3. Install dependencies

```bash
npm ci
```

`npm ci` installs exactly what's in `package-lock.json` (what CI does). Use `npm install` only when you are intentionally adding or upgrading a package, and commit the updated lock file.

Packages that run install scripts (such as `esbuild`) must be approved in `allowScripts` in `package.json`. If npm warns about a new one, review it with `npm install-scripts ls` and approve it with `npm install-scripts approve <pkg>`.

## 4. Editor setup (VS Code)

Formatting is handled by **Prettier** and checked by **ESLint**: unformatted code is an ESLint error (`prettier/prettier`), and CI fails on it. To format automatically on save, install these extensions:

| Extension                                                                                               | ID                          | Why                                                                                                   |
| ------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------- |
| [Prettier – Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | `esbenp.prettier-vscode`    | **Required.** Formats files on save using `.prettierrc.json`.                                         |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                    | `dbaeumer.vscode-eslint`    | **Required.** Shows lint and formatting errors while you type and fixes them on save.                 |
| [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)           | `editorconfig.editorconfig` | Recommended. Applies `.editorconfig` (indentation, LF line endings) to files Prettier doesn't format. |

Quick install: open the **Extensions** view (`Ctrl+Shift+X`), type `@recommended` and install everything under **Workspace Recommendations** (they come from `.vscode/extensions.json`). From a terminal:

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension editorconfig.editorconfig
```

The project settings in `.vscode/settings.json` then take care of the rest: format on save with Prettier, ESLint auto-fix on save, LF line endings, and the workspace TypeScript version. After installing, reload the window (`Ctrl+Shift+P` → **Developer: Reload Window**).

**Check that it works:** add a few blank lines at the start of a function **without saving**: ESLint should underline them in red (`prettier/prettier`). Saving the file removes them. If nothing is underlined, open **View → Output → ESLint** to see why.

> Format-on-save doesn't run when **Auto Save** is set to `afterDelay`. Use `Ctrl+S`, or set Auto Save to `onFocusChange` / `onWindowChange`.

### Formatting from the terminal

```bash
npm run format         # format every file with Prettier
npm run format:check   # check only (what CI runs)
npm run lint:fix       # apply ESLint auto-fixes (formatting included)
```

Other editors work too, as long as they use the project's Prettier and ESLint configs (`.prettierrc.json`, `eslint.config.mjs`).

## 5. Environment variables

Copy `frontend/.env.example` to `frontend/.env` and fill it in. The example file explains every variable and where to find it in Supabase.

There are two Supabase projects:

| Project               | Used by                                                          |
| --------------------- | ---------------------------------------------------------------- |
| `froebel-payload-dev` | your local `.env` and Vercel **Preview** (PRs, `vercel/staging`) |
| `froebel-payload`     | Vercel **Production** only: never put its values in a local file |

All `.env*` files except `.env.example` are git-ignored. Put local-only overrides in `frontend/.env.local`.

### Changing collections (database schema)

While developing, `npm run dev` applies collection changes directly to `froebel-payload-dev`, and regenerates `src/payload-types.ts`. Production changes only through migrations. Before committing a schema change:

```bash
npm run generate:types       # make sure src/payload-types.ts is current
npm run generate:importmap   # only if you added custom admin components or plugins
npm run migrate:create       # writes a migration to src/migrations/
```

Commit the collection files, `src/payload-types.ts`, the new migration and `importMap.js` if it changed. Production deploys run `payload migrate` before building (see `vercel.json` and the `build:vercel` script), so the migration is applied when the change reaches `main`. Preview deploys don't run migrations.

Content (pages, news, images) lives in the database, not in git: nothing to commit for it.

## 6. Start the dev server

```bash
npm run dev
```

Open <http://localhost:3000>. Edits hot-reload automatically.

> The first `npm run dev` may (re)write `AGENTS.md` — that's generated by Next.js. Commit it as-is.

## 7. Checks to run before pushing

These mirror the CI pipeline, so if they pass locally CI should pass too:

```bash
npx next typegen      # generate route types (LayoutProps<"/">, etc.)
npm run types:check   # TypeScript, no emit
npm run lint          # ESLint (includes Prettier formatting for JS/TS)
npm run format:check  # Prettier check for every file (CSS, JSON, Markdown too)
npm run build         # production build
```

To try the production build locally:

```bash
npm run build
npm run start         # serves on http://localhost:3000
```

## 8. Git workflow

- Work on a feature branch — **`main` only changes through pull requests**.
- CI (`.github/workflows/ci.yml`) runs on every push to non-`main` branches and on every PR into `main` or `staging`; the **"Typecheck & build"** job must pass before merging.
- Code owners are set in `.github/CODEOWNERS`.

```bash
git checkout -b feature/my-change
# ...work, run the checks above...
git push -u origin feature/my-change
# then open a PR into staging or main
```

## 9. Project layout

```
frontend/
├── src/
│   ├── app/                 # App Router routes & layouts
│   │   ├── layout.tsx       # Root layout (Nunito font, metadata)
│   │   ├── page.tsx         # "/" → redirects to /mantine
│   │   └── mantine/         # Mantine site + kitchensink
│   ├── components/mantine/  # Header, footer, carousel, news cards, providers…
│   └── demo/                # Placeholder content & accent-colour helpers
├── public/                  # Static assets (images, icons)
├── next.config.ts           # React Compiler, cacheComponents, partialPrefetching
├── postcss.config.mjs       # Mantine PostCSS preset + breakpoint variables
└── package.json
```

## 10. Troubleshooting

- **`EBADENGINE` warnings or odd Payload errors** → your Node is too old; see [Prerequisites](#1-prerequisites).
- **`ERESOLVE` peer-dependency errors when adding Payload packages** → update the package it names (often `react` / `react-dom`) instead of using `--force` or `--legacy-peer-deps`.
- **`LayoutProps` / route-type errors** → run `npx next typegen` (or just start `npm run dev`, which generates them).
- **Port 3000 already in use** → `npm run dev -- -p 3001`.
- **Weird stale build behaviour** → stop the server, delete the `.next/` folder, run `npm run dev` again.
- **Dependency errors after pulling** → someone changed the lock file; run `npm ci` again.
- **`TypeError: Illegal constructor` from `undici` when running a `payload` command** → `package.json` must keep `"type": "module"`. Without it the Payload CLI loads `undici` twice through its bundled `tsx` and crashes ([payload#19475](https://github.com/payloadcms/payload/issues/19475)).
- **`payload migrate:status` lists migrations as not run on `froebel-payload-dev`** → expected: the dev database is kept in sync by `npm run dev`, not by migrations. Don't run `payload migrate` against it.
- **Next.js API looks different from what you know** → this is Next 16; check the bundled docs in `node_modules/next/dist/docs/`.

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Payload documentation](https://payloadcms.com/docs)
- [Mantine documentation](https://mantine.dev)
