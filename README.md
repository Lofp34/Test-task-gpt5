# Rituels — MVP

Single-page habits/task tracker prepared for static deployment on Vercel with a Neon Postgres integration for serverless health checks.

## Stack
- Vite for local dev/build of the static frontend (`index.html`).
- Vercel static deployment with serverless functions in `/api`.
- Neon Postgres (via Vercel integration) using `@neondatabase/serverless`.

## Requirements
- Node 18+ / npm
- A Neon database provisioned through Vercel (automatically provides `NEON_DATABASE_URL`).

## Getting started
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
The static output is generated in `dist/`.

## Linting
```bash
npm run lint
```

## Environment variables
Copy `.env.example` to `.env.local` for local development and fill in your Neon connection string:
```
NEON_DATABASE_URL=postgres://user:password@host/db
```
On Vercel, the Neon integration will inject `NEON_DATABASE_URL` automatically.

## Deploying to Vercel
1. Connect the repository to Vercel.
2. Ensure the Neon integration is enabled for the project so `NEON_DATABASE_URL` is available.
3. Leave the default build command (`npm run build`) and output directory (`dist`).
4. Deploy. The static frontend will be served from `dist`, and serverless routes are available under `/api/*`.

### Health check endpoint
`GET /api/health` returns the Postgres version when `NEON_DATABASE_URL` is configured, useful to validate the Neon/Vercel wiring before adding persistent features.

## Current limitations
- The UI still runs 100% client-side with localStorage; the Neon database is only wired for a healthcheck placeholder. Persisting habits/history in Postgres will require new API routes and client calls.
- No authentication; use Vercel environment protections if you need to gate access during MVP testing.
