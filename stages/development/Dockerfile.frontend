FROM node:16.18.0
ENV APP_PATH=/home/node/pretrained-app/frontend

RUN apt update && apt -y install locales && locale-gen ru_RU.UTF-8
ENV LANG ru_RU.UTF-8
ENV LANGUAGE ru_RU:en
ENV LC_ALL ru_RU.UTF-8

RUN npm i -g npm@8.19.2 && \
    npm i expo-cli -g --legacy-peer-deps && \
    npm i eslint -g

USER node
RUN mkdir -p $APP_PATH/node_modules
RUN mkdir -p $APP_PATH/.expo
RUN mkdir -p $APP_PATH/.expo-shared
RUN mkdir -p $APP_PATH/web-build
COPY ./frontend/package.json $APP_PATH/.
WORKDIR $APP_PATH
RUN npm i
