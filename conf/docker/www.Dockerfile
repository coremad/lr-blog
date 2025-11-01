FROM php:8.4-fpm

RUN apt-get update && apt-get install -y nginx curl wget
RUN usermod -u 1000 www-data &&  groupmod -g 1000 www-data

RUN  rm /etc/apt/preferences.d/*; mv /usr/local/bin/php /usr/local/bin/.php; echo wtf
RUN apt-get install -y php-fpm php-mysql
RUN apt-get install -y composer phpunit

RUN chown -R www-data:www-data /var/www

RUN cd /var/www && wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-english.tar.gz && \
    tar xf phpMyAdmin-latest-english.tar.gz && rm phpMyAdmin-*.tar.gz && ln -s phpMyAdmin-* phpMyAdmin && \
    mkdir /var/www/phpMyAdmin/tmp && chown -R www-data:www-data /var/www/phpMyAdmin/tmp ; \
    ln -s /etc/init.mylocal/config.inc.php /var/www/phpMyAdmin/ ;

RUN apt-get install -y nodejs
RUN apt-get install -y npm

EXPOSE 9000
EXPOSE 80

CMD for f in /etc/init.mylocal/start.d/* ; do echo "start:$f"; runuser -u www-data "$f"; done; \
    service php8.4-fpm restart && service nginx restart && tail -F /var/log/*.log
