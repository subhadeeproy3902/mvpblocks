# ---- Base Stage ----
FROM node:20-bullseye-slim AS builder

WORKDIR /app

# Install build tools + Rust (needed for lightningcss sometimes)
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    python3 \
    libssl-dev \
    curl \
    git \
    ca-certificates \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y \
    && export PATH="$HOME/.cargo/bin:$PATH"

RUN npm install -g pnpm

COPY . .

# Copy dummy env for build
COPY .env.production .env

RUN pnpm install --frozen-lockfile
RUN pnpm run build

# ---- Runtime ----
FROM node:20-bullseye-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Runtime envs will override the dummy ones
CMD ["node", "server.js"]
