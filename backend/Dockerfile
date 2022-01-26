FROM php:7.4-cli

COPY . /var/www/backend

WORKDIR /var/www/backend

RUN apt update && apt install -y zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && php composer-setup.php && rm composer-setup.php && mv composer.phar /usr/local/bin/composer && chmod a+x /usr/local/bin/composer && composer install && ls -lsa

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN php artisan migrate

CMD [ "php", "-S", "0.0.0.0:80", "public/index.php"]

EXPOSE 80
