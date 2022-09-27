FROM python:3.10.7
RUN mkdir /app
RUN mkdir /app/.pytest_cache
WORKDIR /app
COPY . /app
RUN ./script/build.sh
