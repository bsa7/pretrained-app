## Build development frontend docker container
```bash
docker build -f stages/development/Dockerfile.frontend -t pretrained-app-frontend-development .
```

## Build development API docker container
```bash
docker build -f stages/development/Dockerfile.api -t pretrained-app-api-development .
```

## Run API in development
```bash
docker run -p 5000:5000 -d pretrained-app-api-development
```

## Run all containers in development mode

```bash
docker-compose -f stages/development/docker-compose.yml up
```

## attach container shell:

```bash
docker run -it pretrained-app_frontend sh
```
