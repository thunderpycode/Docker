FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install apache2 -y
        # Create web page
#RUN echo "docker training" > /var/www/html/index.html
COPY . /var/www/html
# Create script to start Apache in fore ground
RUN echo ". /var/www/html" >> /run.sh
RUN echo ". /etc/apache2/envvars" > /run.sh
RUN echo "mkdir -p /var/run/apache2" >> /run.sh
RUN echo "/usr/sbin/apache2 -D FOREGROUND" >> /run.sh
RUN chmod 755 /run.sh

EXPOSE 80

CMD /run.sh

                



