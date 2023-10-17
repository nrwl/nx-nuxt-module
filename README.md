<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Nx Nuxt Module
- Package name: nx-module
- Description: The Nx Nuxt module
-->

# Nx Nuxt Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

This Nuxt module for Nx makes sure that Nuxt resolves the TS paths correctly in a Nx monorepo.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nx-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Makes sure that Nuxt resolves the TS paths correctly in a Nx monorepo

## Quick Setup

1. Add `nx-module` dependency to your project

```bash
# Using pnpm
pnpm add -D nx-module

# Using yarn
yarn add --dev nx-module

# Using npm
npm install --save-dev nx-module
```

2. Add `nx-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nx-module'
  ],
  nx: {
    /* module options */
    /* For example: */
    workspaceRoot: join(__dirname, '..', '..'),
  }
})
```

That's it! You can now use Nx Nuxt Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nx-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nx-module

[npm-downloads-src]: https://img.shields.io/npm/dm/nx-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nx-module

[license-src]: https://img.shields.io/npm/l/nx-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nx-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
