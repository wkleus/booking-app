# --- First Stage: build ---
# Install deps and produce static production build (dist/) via Vite
FROM node:20-alpine AS build

WORKDIR /app

# Copy manifests first for better layer caching
COPY package*.json ./
RUN npm ci

# Optional build-time API URL (defaults to same-origin "/api" via nginx proxy)
ARG VITE_API_URL=/api
ENV VITE_API_URL=$VITE_API_URL

COPY . .
RUN npm run build

# --- Second Stage: serve with nginx ---
# Build output is just static HTML/JS/CSS – no Node runtime needed to serve it
FROM nginx:1.27-alpine AS production

# SPA-aware nginx config (client-side routing fallback + gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Only compiled static files from build stage end up in final image
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]