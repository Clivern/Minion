FROM node:15.14.0 as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx:1.21.1

COPY --from=build /usr/local/app/dist/Minion /usr/share/nginx/html

EXPOSE 80