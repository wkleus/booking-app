# --- Stage 1: build ---

# Install ALL deps (incl. devDependencies) and compile TypeScript -> dist/
FROM node:20-alpine AS build

WORKDIR /app

# Copy manifests first for better layer caching (only reinstall if these change)
COPY package*.json ./
RUN npm ci

# Copy source and compile
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# --- Stage 2: production runtime ---

# Small, dependency-light image: only prod deps + compiled JS, no TS/tsx toolchain
FROM node:20-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

# Only production dependencies -> smaller image, smaller attack surface
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Bring in only compiled output from build stage
COPY --from=build /app/dist ./dist

# Run as non-root user
# node:alpine images already ship a "node" user/group (uid/gid 1000)
USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]