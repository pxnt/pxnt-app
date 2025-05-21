# pxnt-app [![Netlify Status](https://api.netlify.com/api/v1/badges/6f6b46f1-aab7-4e21-bf62-dd0043687bc4/deploy-status)](https://app.netlify.com/sites/pxnt/deploys)

A modern Vue 3 application built with Vite, TypeScript, Tailwind CSS, Pinia for state management, and Supabase for backend services.

## Features

- ⚡️ **Vue 3** - Progressive JavaScript framework
- 🔥 **Vite** - Next generation frontend tooling
- 🧩 **TypeScript** - Enhanced type safety
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🗃️ **Pinia** - Intuitive, type safe store for Vue
- 🔐 **Supabase** - Open source Firebase alternative
- 📊 **Session Tracking** - Anonymous user session analytics
- 📊 **FingerprintJs** - To generate unique device fingerprint per user

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

3. Set up environment variables
   ```bash
   # Create a .env file with the following variables
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
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
│   │   ├── useSupabase.ts      # Supabase client and operations
│   │   └── useSessionTracking.ts # Session tracking functionality
│   ├── config/       # Application configuration
│   ├── stores/       # Pinia stores
│   ├── types/        # TypeScript type definitions
│   │   └── session_tracking.ts # Session tracking interfaces
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
- [Supabase](https://supabase.io/) - Backend as a Service for authentication and database

## Session Tracking

The application includes anonymous session tracking capabilities:

- Uses fingerprinting to identify unique sessions
- Captures basic device information (screen resolution, platform, timezone)
- Data is stored in Supabase
- Users can opt out via local storage setting

## License

[MIT](LICENSE)
