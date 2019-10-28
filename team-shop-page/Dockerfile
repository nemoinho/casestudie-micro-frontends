FROM node:alpine as builder
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm i
COPY tsconfig.json tsconfig.app.json angular.json /app/
COPY src /app/src
RUN npm run -- ng build --prod --output-hashing none --vendor-chunk false

FROM nginx:alpine
COPY --from=builder /app/dist/team-shop-page /usr/share/nginx/html
