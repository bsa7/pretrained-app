FROM node:16.18.0
ENV APP_PATH=/home/node/pretrained-app/frontend
ENV LANG C.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL C.UTF-8
RUN npm i -g npm@8.19.2 && \
    npm i expo-cli -g --legacy-peer-deps && \
    npm i eslint -g

USER node
RUN mkdir -p $APP_PATH
COPY ./frontend/package.json $APP_PATH/.
WORKDIR $APP_PATH
RUN npm i
