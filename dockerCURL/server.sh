#!/bin/sh
while true; do
    echo -e "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n$(cat /index.html)" | nc -l -p 90
done
