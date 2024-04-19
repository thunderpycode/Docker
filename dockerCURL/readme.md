1. Run Image by: docker run -dp 8080:80 <image_name>
   8080:80 --> Binding localhost's 8080 port to container's 80.

2. echo -e "HTTP/1.1 200 OK\r\n\r\nHello Message" | nc -l -p 80
   HTTP/1.1 --> Hypertext version
   200 OK --> Success Response
   nc --> netcat ( utility which listens on networking ports)
   -l --> listening utility
   -p --> listening port