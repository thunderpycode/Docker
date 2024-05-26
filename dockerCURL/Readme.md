1. Run Image by: docker run -d -p 9090:90 curlimg  
   9090:90 --> Binding localhost's 9090 port to container's 90.

2. echo -e "HTTP/1.1 200 OK\r\n\r\nHello Message" | nc -l -p 80
   HTTP/1.1 --> Hypertext version
   200 OK --> Success Response
   nc --> netcat ( utility which listens on networking ports)
   -l --> listening utility
   -p --> listening port

3.curl https://localhost:9090