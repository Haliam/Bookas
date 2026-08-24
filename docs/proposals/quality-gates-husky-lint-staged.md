---
title: Bookas - Quality Gates with Husky and lint-staged
description: Plan phased to establish local and CI quality checks for the frontend.
version: 1.1.0
date: 2026-08-23
status: phase-7-pending-verification
---

# Quality Gates with Husky and lint-staged

## Objective

Establish a predictable quality gate for the Bookas frontend without slowing down daily development:

- `pnpm` is the official package manager.
- `husky` owns Git hooks.
- `lint-staged` runs fast checks only on staged files.
- ESLint checks TypeScript and React code.
- Prettier standardizes source and configuration files.
- Type-checking and complete repository checks run outside `pre-commit`, primarily in CI.
- `dist/` is generated output and should not remain versioned.

The goal is to prevent avoidable formatting and lint errors from entering commits while keeping the hook fast and understandable.

## Current baseline

The quality tooling is implemented on branch `add_husky`:

- `pnpm@10.34.5` is pinned through Corepack.
- `.npmrc` uses `node-linker=hoisted` because the repository is stored on an exFAT volume.
- `pnpm-lock.yaml` is the only package lockfile; `package-lock.json` is no longer tracked.
- `dist/` is ignored and no longer tracked.
- ESLint, Prettier, TypeScript, Husky, and lint-staged are declared and configured.
- `.husky/pre-commit` runs `corepack pnpm exec lint-staged`.
- `.github/workflows/quality.yml` runs the quality checks on pull requests and pushes to `main`.
- Local `install`, `lint`, `type-check`, `format:check`, `build`, and staged lint-staged validation have passed.
- The latest CI workflow commit is `3e23ee1` (`ci: add quality checks workflow`) and has been pushed to `origin/add_husky`.

## Decisions already made

| Decision         | Choice                      | Consequence                                                                                                      |
| ---------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Package manager  | `pnpm@10.34.5` via Corepack | Add `pnpm-lock.yaml`, standardize local and CI commands, and retire `package-lock.json` after migration.         |
| Generated output | Do not version `dist/`      | Add `dist/` to `.gitignore`, remove existing generated files from Git tracking, and build them in CI/deployment. |
| Pre-commit scope | Fast, staged-only           | Run ESLint and Prettier through `lint-staged`; keep full type-check and repository-wide checks outside the hook. |

Phase 0 is complete: `package.json` pins `pnpm@10.34.5` through Corepack and `.gitignore` excludes new `dist/` output.

Phase 1 is complete: `pnpm-lock.yaml` is the repository lockfile, `package-lock.json` is no longer tracked, and existing `dist/` output is no longer tracked while remaining available locally. The dependency installation reported a pre-existing deprecation warning for `recharts@2.15.2`; it did not block installation or the build.

Phase 2 is complete: tooling has been added to `package.json` and resolved in `pnpm-lock.yaml`. Because the repository is on an exFAT volume, `.npmrc` uses `node-linker=hoisted` to avoid unsupported symlinks. Frozen installation and the tool version checks pass.

Phase 3 is complete: `tsconfig.json`, `eslint.config.js`, `.prettierrc`, and `.prettierignore` are configured; TypeScript is pinned to the `5.9.x` line for compatibility with `typescript-eslint@8.67.0`; and the quality scripts are present in `package.json`. `type-check`, `lint`, `format:check`, and `build` all pass. The build recreates local `dist/` output, which remains ignored and untracked.

Phase 4 and Phase 5 are complete: `prepare` runs Husky initialization, `.husky/pre-commit` invokes `corepack pnpm exec lint-staged` for Git Bash compatibility on Windows, and staged-file mappings for TypeScript, CSS, SCSS, Markdown, JSON, YAML, and related files are present in `package.json`. A real commit containing staged changes passed the hook in commit `168de98`.

Phase 6 is complete: Prettier formatted the repository, the remaining formatting issue in `Notifications.tsx` was corrected, and `format:check`, `type-check`, `lint`, `build`, and `git diff --check` pass. ESLint reports 28 non-blocking `react-refresh/only-export-components` warnings in route/provider and shared UI modules; these are deferred because resolving them requires separating component exports from route/configuration exports.

Phase 7 is implemented: `.github/workflows/quality.yml` runs on pull requests and pushes to `main`, installs Node.js `24.19.0` and pnpm `10.34.5`, then runs frozen installation, formatting, lint, type-check, and build. The workflow was committed and pushed; final completion requires one successful GitHub Actions run.

## Phased implementation

### Phase 0 - Confirm repository policy

**Purpose:** remove ambiguity before adding automation.

Tasks:

1. Confirm the supported Node.js version and encode it in `package.json` using `engines` if the team has a target version.
2. Add the `packageManager` field with the selected `pnpm` version.
3. Confirm that `dist/` is not required as a source artifact for the current deployment process.
4. Check the working tree and preserve unrelated user changes before modifying lockfiles or generated output.

Exit criteria:

- The team agrees that `pnpm` is the only supported package manager.
- The team agrees that `dist/` is generated and excluded from version control.

### Phase 1 - Migrate package management

**Purpose:** make dependency installation deterministic across machines and CI.

Tasks:

1. Run the selected `pnpm` version against the existing `package.json`.
2. Review the generated `pnpm-lock.yaml`.
3. Remove `package-lock.json` only after confirming the `pnpm` installation resolves and builds successfully.
4. Use `pnpm install --frozen-lockfile` as the CI installation command.
5. Do not mix npm and pnpm lockfiles in the repository.

Exit criteria:

- A clean install with `pnpm install --frozen-lockfile` succeeds.
- `pnpm run build` succeeds after installation.
- Only the intended lockfile is tracked.

### Phase 2 - Add quality tooling

**Purpose:** create the tools that `lint-staged` will orchestrate.

Add as development dependencies:

- `husky`
- `lint-staged`
- `eslint`
- `@eslint/js`
- `typescript`
- `typescript-eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `prettier`
- `eslint-config-prettier`

Add scripts to `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit"
  }
}
```

The exact package versions should be pinned by the selected `pnpm` installation and committed in `pnpm-lock.yaml`.

Exit criteria:

- Each script runs independently from a clean install.
- Tooling failures return a non-zero exit code.

### Phase 3 - Establish TypeScript and lint configuration

**Purpose:** give the source tree an explicit, reproducible analysis baseline.

Create `tsconfig.json` appropriate for the Vite React application:

- Include `src` and relevant Vite configuration files.
- Use `noEmit` for application checks.
- Enable strict type checking unless existing code makes that impossible immediately.
- Configure the `@/*` path alias consistently with Vite.
- Use the project module and JSX settings required by the current React/Vite setup.

Create `eslint.config.js` using ESLint flat config:

- Apply rules to `*.ts` and `*.tsx`.
- Ignore `node_modules`, `dist`, and other generated files.
- Use the TypeScript parser and recommended TypeScript rules.
- Enable React Hooks rules.
- Enable React Refresh rules with a pragmatic initial severity.
- Keep formatting rules in Prettier rather than duplicating them in ESLint.

Create `.prettierrc` and `.prettierignore`:

- Define the repository formatting style explicitly.
- Ignore `node_modules`, `dist`, build caches, and generated assets.
- Avoid formatting lockfiles unless that is deliberately part of the team convention.

Exit criteria:

- `pnpm lint` completes with a known, reviewable baseline.
- `pnpm run format:check` identifies only intentional formatting work.
- `pnpm run type-check` reports actionable TypeScript errors rather than missing configuration.

### Phase 4 - Configure Husky safely

**Purpose:** activate Git hooks only after the underlying commands are valid.

Tasks:

1. Ensure `husky` is installed as a project devDependency.
2. Add the appropriate `prepare` script so installs initialize Husky in a Git checkout.
3. Regenerate or update the `.husky` structure using the installed Husky major version rather than copying an outdated template.
4. Keep `.husky/pre-commit` limited to the single orchestration command:

```sh
corepack pnpm exec lint-staged
```

5. Remove the temporary commented-out hook once lint-staged has a valid configuration.
6. Do not put a full build, full lint, or full type-check in `pre-commit`.

Exit criteria:

- A fresh clone followed by `pnpm install` installs the hook automatically.
- The hook behaves correctly on Windows and Unix-like environments.
- The hook does not depend on a globally installed command.

### Phase 5 - Configure lint-staged

**Purpose:** check only what is about to be committed and keep feedback fast.

Add the configuration to `package.json` or a dedicated `lint-staged.config.js`. The chosen location must be explicit and versioned.

Recommended initial mapping:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{css,scss,md,json,jsonc,yaml,yml}": ["prettier --write"]
  }
}
```

Rules:

- Run commands through local project binaries via lint-staged.
- Preserve task ordering where an ESLint fix can change the file before formatting.
- Do not include `dist/` because it will be ignored and generated.
- Do not run tests or builds in this hook unless a later performance review proves they are cheap enough.
- If there are no staged files matching a pattern, lint-staged should complete successfully.

Exit criteria:

- A staged TypeScript file is linted and formatted automatically.
- A staged CSS, Markdown, or JSON file is formatted automatically.
- An unfixable lint error blocks the commit.
- Unstaged files are not modified by the hook.

### Phase 6 - Baseline cleanup

**Purpose:** separate existing violations from future regressions.

Tasks:

1. Run formatting and lint fixes in a deliberate, reviewable change.
2. Inspect all automatic changes, especially generated or vendor-like UI files.
3. Resolve remaining non-fixable lint and type errors according to severity.
4. Keep unrelated functional changes out of the baseline cleanup commit.
5. Record any temporarily relaxed rule and its reason in the implementation issue or pull request.

Exit criteria:

- Full lint, format-check, type-check, and build pass locally.
- The initial cleanup is independently reviewable.
- Subsequent commits only process their staged files in pre-commit.

### Phase 7 - Add CI parity

**Purpose:** ensure quality is enforced even when a developer bypasses local hooks or uses another client.

Create a pull-request workflow under `.github/workflows/` that:

1. Checks out the repository.
2. Installs the pinned Node.js and `pnpm` versions.
3. Runs `pnpm install --frozen-lockfile`.
4. Runs `pnpm run format:check`.
5. Runs `pnpm lint`.
6. Runs `pnpm type-check`.
7. Runs `pnpm build`.

CI should run on pull requests and on pushes to the protected integration branch. The workflow should use dependency caching only after the uncached path is reliable.

Exit criteria:

- The same quality commands pass locally and in CI.
- A deliberately introduced formatting, lint, type, or build error fails CI.
- CI does not require Husky to be installed in order to perform checks.

## Operational rules

- Use `pnpm` for install, scripts, and CI commands.
- Use `git commit --no-verify` only for an exceptional, documented case; it must not replace CI checks.
- Keep pre-commit staged-only and fast.
- Keep full validation in CI and optionally expose it through `pnpm run verify` later.
- Never edit generated `dist/` files manually or include them in quality checks.
- Tighten lint rules gradually after the initial baseline instead of introducing a large blocking migration.

## Verification checklist

### Installation

- [ ] Clean clone installs with `pnpm install --frozen-lockfile`.
- [ ] Husky initializes automatically after installation.
- [ ] No npm and pnpm lockfiles coexist.

### Local scripts

- [ ] `pnpm lint` passes.
- [ ] `pnpm run format:check` passes.
- [ ] `pnpm type-check` passes.
- [ ] `pnpm build` passes.

### Hook behavior

- [ ] Staged TS/TSX files are linted and formatted.
- [ ] Staged CSS/Markdown/JSON files are formatted.
- [ ] Unstaged files remain unchanged.
- [ ] An unfixable error blocks the commit.
- [ ] A clean staged change can be committed normally.

### CI behavior

- [ ] Pull requests run the same quality commands.
- [ ] CI catches failures when local hooks are bypassed.
- [ ] Generated `dist/` output is not checked or committed.

## Out of scope

- Commit message conventions and `commitlint`.
- Pre-push hooks and test orchestration.
- Automatic dependency updates.
- Broad refactoring of existing application code.
- Introducing additional ESLint rules solely for stylistic preference.

## Risks and mitigations

| Risk                                           | Mitigation                                                                                                    |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Existing source produces many lint errors      | Start with recommended pragmatic rules, baseline violations deliberately, and tighten incrementally.          |
| Pre-commit becomes slow                        | Restrict it to staged files; keep type-check, build, and full lint in CI.                                     |
| Husky version changes hook behavior            | Pin the dependency through the lockfile and validate the generated hook structure after upgrades.             |
| `dist/` removal affects deployment             | Confirm deployment builds from source before removing tracked artifacts.                                      |
| Team uses mixed package managers               | Add `packageManager`, standardize scripts, and maintain only `pnpm-lock.yaml`.                                |
| Windows file locks interrupt branch operations | Close active dev servers during branch changes and avoid generating build output inside tracked source paths. |

## Definition of done

This proposal is implemented when:

1. A clean `pnpm install --frozen-lockfile` initializes Husky.
2. `corepack pnpm exec lint-staged` has a valid, versioned configuration.
3. `pre-commit` processes only staged files and blocks unfixable issues.
4. `pnpm lint`, `pnpm run format:check`, `pnpm type-check`, and `pnpm build` pass locally.
5. CI runs the same full checks for pull requests.
6. `dist/` is ignored and no longer tracked.
7. The temporary disabled hook is removed and normal commits work without `--no-verify`.
