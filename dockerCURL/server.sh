#!/bin/sh
while true; do
    echo -e "HTTP/1.1 200 OK\r\n\r\nHello Message" | nc -l -p 80
done
