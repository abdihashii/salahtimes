# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TanStack Start application for displaying Islamic prayer times and Hijri dates. It's a modern full-stack React application using file-based routing and server-side rendering capabilities.

## Key Technologies

- **TanStack Start**: Full-stack React framework with SSR/SSG
- **TanStack Router**: Type-safe file-based routing
- **TanStack Query**: Server state management
- **React 19** with TypeScript
- **Tailwind CSS v4**: Using the new PostCSS-based version
- **Vite**: Build tool
- **shadcn/ui + Radix UI**: Component library
- **React Hook Form + Zod**: Form handling and validation

## Essential Commands

```bash
# Development
pnpm dev              # Start dev server on http://localhost:3000
pnpm build            # Build for production (uses 4GB memory)
pnpm start            # Run production server
pnpm serve            # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Run Prettier
pnpm check            # Format and lint

# Testing
pnpm test             # Run tests with Vitest

# Maintenance
pnpm clean            # Remove build artifacts (.output, .tanstack, node_modules)
```

## Architecture Overview

### File-Based Routing

Routes are automatically generated from files in `/src/routes/`. The framework uses TanStack Router's file-based routing system where:

- `index.tsx` → `/`
- `about.tsx` → `/about`
- `__root.tsx` → Root layout wrapper

### Directory Structure

```
src/
├── components/       # UI components organized by feature
├── hooks/           # Custom React hooks (e.g., useHijriDate)
├── integrations/    # Third-party integrations (TanStack Query setup)
├── lib/             # Utilities, constants, and TypeScript types
├── routes/          # Page components (file-based routing)
├── services/        # API services and external integrations
└── styles/          # Global CSS (Tailwind configuration)
```

### Key Architectural Patterns

1. **Server-Side Rendering**: TanStack Start provides SSR capabilities out of the box
2. **Type-Safe Routing**: Routes are type-checked through generated route tree
3. **Component Architecture**: Uses shadcn/ui components built on Radix UI primitives
4. **State Management**:
   - Server state: TanStack Query
   - Form state: React Hook Form with Zod validation
   - UI state: React hooks

### API Integration

The app integrates with the Aladhan API for Islamic dates:

- Hijri date conversion endpoint: `api.aladhan.com/v1/gToH`
- Service location: `src/services/hijri.service.ts`

## Development Guidelines

### Path Aliases

- Use `@/` as an alias for `./src/` in imports

### Package Manager

- **Always use pnpm** (version 10.13.1 specified)
- Install dependencies with `pnpm install`

### Component Development

- UI components use shadcn/ui configuration:
  - Style: New York
  - Base color: Zinc
  - CSS variables for theming
- Follow existing component patterns in `src/components/ui/`

### Routing

- Add new pages in `src/routes/`
- Use `createFileRoute` from `@tanstack/react-router`
- Layout components go in `__root.tsx`

### Build Considerations

- Production builds may require increased memory (4GB allocated)
- Build output goes to `.output/` directory
- Static assets in `public/` directory

## Current Features

Based on the routes and components, the application includes:

- Prayer times display (home page)
- Hijri date converter
- About page
- Blog functionality
- FAQs section
- Contact form with validation

## Project Context

This is part of a larger prayer times project that includes:

- A Gatsby-based client (in `../gatsby-client/`)
- A Chrome extension (in `../chrome-extension/`)
- This TanStack Start client appears to be a modern rewrite/alternative to the Gatsby version
