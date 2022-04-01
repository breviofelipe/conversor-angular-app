FROM nginx:alpine

COPY /dist/conversor-angular-app /usr/share/nginx/html

EXPOSE 80