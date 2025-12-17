# Universal Search Bar Plugin

This project aims to build a universal, embeddable search bar plugin that can be integrated into any website or web application by attaching it to an existing text input field or injecting a new one. The plugin provides intelligent, fast, and customizable search capabilities while remaining framework-agnostic for host websites.

The solution is designed as a hosted search service, where websites include a lightweight JavaScript snippet that connects to a centralized backend for indexing, querying, and analytics.

# Key Objectives

- Provide a drop-in search experience for any website with minimal setup
- Support real-time search suggestions and autocomplete
- Allow per-site customization (styling, behavior, data scope)
- Ensure high performance and scalability
- Offer a secure, multi-tenant architecture

# Core Features

🔍 Full-text search with partial matching
⚡ Instant suggestions and autocomplete
🎯 Context-aware results (per website / per page)
🎨 Theme customization (colors, fonts, layout)
🔐 API key–based authentication
📊 Search analytics (queries, clicks, no-result searches)
🌍 Multi-language support
♿ Accessibility-compliant UI

# Example Usage

```
<script
  src="https://website.com/searchbar.js"
  data-api-key="API_KEY"
  data-target="#search-input"
></script>
```

# Commands

```
-- Create App

npx create-next-app@15 .

✔ Would you like to use TypeScript? … No
✔ Which linter would you like to use? › ESLint
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like your code inside a `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack? (recommended) … No
? Would you like to customize the import alias (`@/*` by default)? › No

-- Setup prettier and lint

npm i -D prettier eslint-config-prettier eslint-plugin-prettier

-- Copy files from nextjs-15-app-router

.env.local
.gitignore
.eslintrc.json
.prettierignore
.prettierrc
next.config.mjs
postcss.config.mjs
next.config.mjs
jsconfig.json

-- Setup package.json

"scripts": {
"dev": "next dev & sleep 2 && open http://localhost:3000/searchbar",
"build": "next build && next export",
"start": "next start",
"lint": "next lint",
"format": "prettier --write .",
"predeploy": "echo > out/.nojekyll",
"deploy": "gh-pages -d out"
},

"repository": {
"type": "git",
"url": "git+https://github.com/devrazec/searchbar.git"
},

-- Deploy

npm i -D gh-pages

npm run predeploy
npm run deploy

-- Create Files

gh-pages/.nojekyll
gh-pages/_next/.nojekyll

-- Install Flowbite

npm i -D typescript
npm i -S flowbite-react
npm i -S flowbite-react-icons
npm i -S tailwind-merge lucide-react tw-animate-css
npm i -D flowbite-typography

-- Icons

npm i -S iconsax-react @iconify/react react-icons

-- DataBase

npm i -S mongodb
npm i -S @prisma/client@^6
npm i -D prisma@^6

-- Initialize Prisma

npx prisma init

-- Generate Prisma Client

npx prisma generate

-- Run Prisma Studio (GUI)

npx prisma studio

```

# Demo

https://devrazec.github.io/searchbar

# Project

https://github.com/devrazec/searchbar

# HTTPS Project Files

https://github.com/devrazec/searchbar/tree/gh-pages

# Links
