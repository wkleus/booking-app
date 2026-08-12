#  Base image: lightweight Node.js on Alpine Linux 
FROM node:20-alpine

# Working directory inside container
WORKDIR /app

# Copy dependency manifests first (better Docker layer caching)
COPY package*.json ./

# Install ALL dependencies 
# For pure production image using --omit=dev after build step
RUN npm install

# Copy rest of server source code
COPY . .

# API listens on port 3000 inside container
EXPOSE 3000

# Start TypeScript server with tsx 
CMD ["npx", "tsx", "src/server.ts"]