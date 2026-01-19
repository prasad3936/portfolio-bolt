FROM node:25-alpine AS build
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM httpd:2.4-alpine
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]