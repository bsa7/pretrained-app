FROM nginx:stable-alpine
ENV NGINX_CONFIG_PATH=/etc/nginx
RUN apk add openssl && \
    openssl req -x509 -nodes -days 3365 -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt -subj "/C=US/ST=Some/L=Some/O=Individual/OU=IT Department/CN=some.com" && \
    openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
COPY ./config/nginx/nginx.conf $NGINX_CONFIG_PATH/.
COPY ./config/nginx/app.conf $NGINX_CONFIG_PATH/sites-enabled/app.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
