FROM node:16.7.0 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx:1.21.1

COPY --from=build /usr/local/app/dist/Minion /usr/share/nginx/html
COPY --from=build /usr/local/app/nginx.config /etc/nginx/conf.d/default.conf

EXPOSE 80