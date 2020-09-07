FROM node:12-slim as compile-image
ENV PORT 8080
EXPOSE 8080

WORKDIR /usr/src/app
COPY . .

RUN npm run build-prod

FROM nginx:1.19.0-alpine

COPY --from=compile-image /usr/src/app/dist/mood-feed-frontend /usr/share/nginx/html
COPY --from=compile-image /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
