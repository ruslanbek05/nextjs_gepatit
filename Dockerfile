# Multi-stage Dockerfile for Next.js (standalone production)
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package manifests and install dependencies
COPY package*.json ./
# Use legacy peer deps to avoid build-time ERESOLVE failures for packages
# that have peer dependency constraints incompatible with current deps.
# This is safer than `--force` and keeps the install deterministic.
RUN npm ci --legacy-peer-deps

# Copy rest of the sources and build
COPY . .
RUN npm run build

# Production image (standalone — much smaller)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

# Copy standalone server + static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 80

CMD ["node", "server.js"]
