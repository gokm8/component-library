# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `npm run dev` (runs with Turbopack for faster builds)
- **Build**: `npm run build` (production build with Turbopack)
- **Start**: `npm run start` (serve production build)
- **Lint**: `npm run lint` (ESLint with Next.js TypeScript config)

## Architecture Overview

This is a Next.js 15 project using the App Router architecture with TypeScript and Tailwind CSS. The project is structured as a component library with shadcn/ui components.

### Key Technologies
- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** component system with Radix UI primitives
- **Lucide React** for icons

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - Reusable UI components following shadcn/ui patterns
- `components/` - Custom components (navbar, footer, etc.)
- `lib/` - Utility functions and shared logic

### Component System
The project uses shadcn/ui configuration with:
- **Style**: "new-york" variant
- **Base color**: neutral
- **CSS variables**: enabled for theming
- **Path aliases**: `@/components`, `@/lib/utils`, `@/components/ui`

### Styling Approach
- Tailwind CSS with CSS variables for consistent theming
- `cn()` utility function in `lib/utils.ts` for conditional class merging using `clsx` and `tailwind-merge`
- Components follow shadcn/ui patterns with `class-variance-authority` for variant styling

### Development Notes
- Uses Turbopack for faster development and build times
- ESLint configured with Next.js core-web-vitals and TypeScript rules
- All components are built with TypeScript and follow React Server Component patterns where applicable