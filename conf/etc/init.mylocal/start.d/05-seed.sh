#!/bin/bash

[ -f ~/.seed.done ] && exit

cd /var/www/app &&
./artisan db:seed --class=DatabaseSeeder &&
touch ~/.seed.done
