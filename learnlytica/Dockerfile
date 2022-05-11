#stage 1
FROM node as build-step
WORKDIR /ngapp
COPY . .
RUN npm install
RUN npm run build 
#stage 2
FROM nginx:alpine
COPY --from=build-step /ngapp/dist/* /usr/share/nginx/html