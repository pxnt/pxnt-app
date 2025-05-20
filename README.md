# pxnt-app

A modern Vue 3 application built with Vite, TypeScript, Tailwind CSS, and Pinia for state management.

## Features

- ⚡️ **Vue 3** - Progressive JavaScript framework
- 🔥 **Vite** - Next generation frontend tooling
- 🧩 **TypeScript** - Enhanced type safety
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🗃️ **Pinia** - Intuitive, type safe store for Vue
- 🪝 **VueUse** - Collection of Vue Composition Utilities

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for version)
- pnpm (recommended) or npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/pxnt/pxnt-app.git
   cd pxnt-app
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

This will start the application at `http://localhost:5173`.

### Building for Production

```bash
pnpm build
```

The compiled assets will be in the `dist` directory.

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
pxnt-app/
├── public/           # Static assets
├── src/
│   ├── assets/       # Assets that will be processed
│   ├── components/   # Vue components
│   ├── composables/  # Vue composables (reusable composition functions)
│   ├── config/       # Application configuration
│   ├── stores/       # Pinia stores
│   ├── views/        # Page components
│   ├── App.vue       # Root component
│   ├── main.ts       # Application entry point
│   └── style.css     # Global styles
├── .nvmrc            # Node version
├── index.html        # HTML entry point
├── package.json      # Project manifest
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [VueUse](https://vueuse.org/)

## License

[MIT](LICENSE)
