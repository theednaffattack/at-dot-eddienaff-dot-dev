# Process

## Build and push to Docker Registry

build: `docker build -t theednaffattack/at-client_production:first_try .`

push: `docker push theednaffattack/at-client_production

combined: `docker build -t theednaffattack/at-client_production:first_try . && docker push theednaffattack/at-client_production:first_try`

### Pull down built images from Docker Registry

docker-compose pull && docker-compose up
