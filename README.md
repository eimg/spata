# SPATA - SPA Starter

## Overview

SPATA helps you quickly start a new project by avoiding initial setup tasks like configuring linters, tests, and essential packages. It covers the four main parts typically needed in most projects:

1. Web App (`app`)
2. Mobile App (`mobile`)
3. API Back-end (`api`)
4. Documentation Website (`doc`)

## app

A React SPA pre-configured with:

-   React + Vite
-   TypeScript
-   Tailwind & shadcn/ui
-   Light/Dark Mode Switcher
-   React Router
-   React Query (with devtools)
-   React Hook Form
-   Vitest & React Testing Library
-   ESLint for React Query

Providers for routing, queries, and themes are set up. The test environment uses `jsdom`.

### How to start

```bash
cd app
npm install
npm run dev
```

## mobile

A React Native app with Expo, pre-configured with:

-   React Native + Expo
-   TypeScript
-   Expo Router
-   Custom Theme Setup
-   Themed `<Text>` Component
-   Light/Dark Mode Switcher
-   React Query
-   React Hook Form
-   Jest & React Native Testing Library
-   ESLint for React Query

Providers for queries and themes are set up. The test environment uses `jest-expo`.

### How to start

```bash
cd mobile
npm install
npm run start
```

## api

An Express API back-end serving both the app and mobile, pre-configured with:

-   Express + TypeScript
-   Prisma (SQLite)
-   Migrations & Seed
-   Express Router
-   Express Validator
-   ESLint
-   Jest & supertest

See `package.json` for available scripts like `dev`, `seed`, and `migrate`.

### How to start

Rename `prisma.env` to `.env`. Then:

```bash
cd api
npm install
npm run dev
```

## doc

A Docusaurus documentation site with no extra configuration, ready to customize.

### How to start

```bash
cd doc
npm install
npm run start
```

## Roadmap

-   Add out-of-the-box authentication system.
