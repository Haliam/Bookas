---
title: Quality Gates
description: How Husky, lint-staged, and GitHub Actions protect the Bookas codebase.
version: 1.0.0
date: 2026-08-24
---

# Quality Gates

Bookas uses Husky, lint-staged, ESLint, Prettier, TypeScript, and GitHub Actions to catch quality issues before they reach the shared branch.

## Local workflow

When a commit is created, Husky runs the [`pre-commit`](../../.husky/pre-commit) hook:

```text
corepack pnpm exec lint-staged
```

`lint-staged` processes only files already staged for the commit:

- TypeScript and TSX files: ESLint auto-fix, then Prettier.
- CSS, SCSS, Markdown, JSON, and YAML files: Prettier.
- Unstaged files are not changed.

If a non-fixable ESLint error remains, the commit is blocked. Fix the issue, stage the changes again, and retry the commit.

## Local commands

Run the full checks manually when needed:

```powershell
corepack pnpm@10 run format:check
corepack pnpm@10 run lint
corepack pnpm@10 run type-check
corepack pnpm@10 run build
```

Use `corepack pnpm@10 install --frozen-lockfile` for a clean, reproducible installation. The repository pins pnpm in [`package.json`](../../package.json). The local [`.npmrc`](../../.npmrc) uses `node-linker=hoisted` because the repository is stored on an exFAT drive, where pnpm symlinks are not supported.

## CI workflow

[`quality.yml`](../../.github/workflows/quality.yml) runs on:

- Every pull request.
- Pushes to `main`.

CI uses Node.js `24.19.0` and pnpm `10.34.5`, then runs:

1. `pnpm install --frozen-lockfile`
2. `pnpm run format:check`
3. `pnpm run lint`
4. `pnpm run type-check`
5. `pnpm run build`

CI runs the checks independently of Husky. This ensures that quality is still enforced when a hook is bypassed or code is pushed by an automated process.

## Team rules

- Use pnpm through Corepack; do not add another package-manager lockfile.
- Commit source and configuration changes, not generated `dist/` output.
- Do not bypass hooks routinely. Use `git commit --no-verify` only for an exceptional, documented case.
- Treat a failed CI check as a merge blocker until it is resolved or explicitly reviewed.
