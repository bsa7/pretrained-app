FROM python:3.10.7
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
RUN streamlit run app/main.py
