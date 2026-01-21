# Univaciti

## Overview

Univaciti is a next-generation learning platform landing page application. The project is a full-stack TypeScript application featuring a React frontend with a modern UI component library and an Express backend. Currently, it serves as a pre-launch landing page with waitlist functionality, allowing users to sign up for early access to the platform.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Pages located in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

Path aliases are configured:
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets/*` → `./attached_assets/*`

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful JSON API with `/api` prefix
- **Development**: Vite dev server integration for HMR

Server files are organized in `server/`:
- `index.ts` - Application entry point and middleware setup
- `routes.ts` - API route definitions
- `storage.ts` - Data access layer (currently in-memory)
- `vite.ts` - Vite development server integration
- `static.ts` - Static file serving for production

### Data Storage
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect
- **Current Storage**: In-memory storage implementation (`MemStorage` class)
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)

The application is configured for PostgreSQL via Drizzle but currently uses in-memory storage. The database schema includes:
- `users` table - Basic user authentication
- `waitlistEntries` - Email waitlist for pre-launch signups (in-memory only currently)

### Build System
- **Development**: `npm run dev` - Runs tsx with Vite HMR
- **Production Build**: `npm run build` - Builds frontend with Vite, bundles server with esbuild
- **Database Migrations**: `npm run db:push` - Drizzle Kit push to database

The build script bundles specific dependencies to reduce cold start times in production.

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM for type-safe database operations
- **Session Store**: connect-pg-simple for session persistence (available but not currently used)

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: For component variant management
- **Lucide React**: Icon library

### API & Data Fetching
- **TanStack React Query**: Server state management and caching
- **Zod**: Schema validation (shared between frontend/backend via drizzle-zod)

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Server bundling for production
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment