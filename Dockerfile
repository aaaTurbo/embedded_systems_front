# build the frontend application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build

# deploy to nginx
FROM nginx:latest AS PROD
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80/tcp
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]