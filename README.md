# Steps

```sh
pnpm i
```

```sh
pnpm lint-md

# Does
# pnpm eslint . --ext mdx
```

Will tap into `.remarkrc.mjs`

---

```sh
mv .remarkrc.mjs .remarkrc.js
```

Or `.cjs`, changing to `"type": "module"`…

Same problem: cosmic config will not accept ESM remark config it seems.

---

```sh
pnpm lint-mdx

# Does
# pnpm remark .
```

Will tap into `.remarkrc.yaml`

ESLint won't scan for `mjs` at all we use YAML (or JSON) here.
