# Compilar
* ng build --prod

# Run in docker
* docker build -t brevio/angular-app .
* docker run --net=bridge -it --rm -p 4200:80 brevio/angular-app
