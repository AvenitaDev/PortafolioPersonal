# Stage 1: Build static site
FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock* ./

RUN bun install

COPY . .

RUN bun --bun run build

# Stage 2: Serve prerendered files
FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
