FROM nginx:1.25-alpine

RUN mkdir /app
WORKDIR /app

ADD ./dist ./build
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
