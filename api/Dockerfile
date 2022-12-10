FROM nikolaik/python-nodejs:latest
ENV LANG C.UTF-8
ENV LANGUAGE=en_US:en
ENV LC_ALL C.UTF-8
ENV APP_PATH=/home/pn/pretrained-app/
RUN sudo apt install portaudio19-dev

USER pn
RUN mkdir -p $APP_PATH/api/.pytest_cache
RUN mkdir -p $APP_PATH/api/log
RUN touch $APP_PATH/api/log/test.log
ENV PATH "/home/pn/.local/bin:$PATH"
WORKDIR $APP_PATH
COPY api/requirements.txt api/.
COPY script script

RUN cd $APP_PATH/api && \
    pip install setuptools==58.2.0 && \
    pip install waitress && \
    pip install -r requirements.txt
EXPOSE 5000
