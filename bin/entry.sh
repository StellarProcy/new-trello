#!/bin/sh
set -e

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

exec rake db:migrate
exec rails s -b 0.0.0.0
exec "$@"