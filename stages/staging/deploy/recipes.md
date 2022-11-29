## Build production frontend docker container
```bash
docker build -f stages/production/Dockerfile.frontend -t pretrained-app-frontend-production .
```

## Run frontend in production
```bash
docker run -p 3000:3000 -d pretrained-app-frontend-production
```

## Build production API docker container
```bash
docker build -f stages/production/Dockerfile.api -t pretrained-app-api-production .
```

## Run API in production
```bash
docker run -p 5000:5000 -d pretrained-app-api-production
```

## Run all containers in production mode

```bash
docker-compose -f stages/production/docker-compose.yml up
```

## attach container shell:

```bash
docker run -it pretrained-app-frontend-production sh
```
