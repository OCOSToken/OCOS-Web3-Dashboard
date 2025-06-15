
# Docker Setup Guide

This document explains how to build, run, and maintain the OCOS Web3 Dashboard using Docker for both local development and production deployments.

---

## 1. Prerequisites

- **Docker** installed on your machine  
  [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- (Optional) **Docker Compose** for multi-container setups

---

## 2. Dockerfile Overview

A typical `Dockerfile` for OCOS Web3 Dashboard (React-based) may look like this:

```Dockerfile
# Use an official Node image as build environment
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use Nginx for serving static files
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

- **Node.js** is used to build the project.
- **Nginx** is used to serve the built dashboard as a static web app.

---

## 3. Building the Docker Image

Open your terminal in the project root and run:

```bash
docker build -t ocos-dashboard .
```

- `-t ocos-dashboard` names the Docker image.

---

## 4. Running the Container

To run the built image locally on port 8080:

```bash
docker run -d -p 8080:80 --name ocos-dashboard ocos-dashboard
```

- Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 5. Using Docker Compose (Optional)

For advanced deployments (e.g., with backend services), use a `docker-compose.yml`:

```yaml
version: '3'
services:
  dashboard:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

- Start all services:
  ```bash
  docker compose up -d
  ```

---

## 6. Customizing Environment Variables

You can pass environment variables to the build or runtime using Docker's `--env` or Compose's `environment:` section.

For sensitive keys, use Docker secrets or mount `.env` files at runtime.

---

## 7. Updating the Image

To deploy a new version:
1. Pull latest code and build image again:
   ```bash
   git pull
   docker build -t ocos-dashboard .
   ```
2. Stop and remove the old container:
   ```bash
   docker stop ocos-dashboard
   docker rm ocos-dashboard
   ```
3. Start the new one as shown above.

---

## 8. Production Tips

- Always use a production build (`npm run build`)
- Configure Nginx for HTTPS and security headers
- Use Docker volumes for logs (if needed)
- Set up health checks for container monitoring

---

## 9. Troubleshooting

- Check logs: `docker logs ocos-dashboard`
- Make sure ports are not in use
- Rebuild the image if you change source files

---

## References

- [Docker Official Docs](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Nginx Docker Hub](https://hub.docker.com/_/nginx)

---

**For advanced deployments, see `/docs/deployment/production-best-practices.md`.**
