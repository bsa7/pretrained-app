''' Streamlit main file '''
import pathlib
import streamlit as st

st.title("Hello World!")
st.write(pathlib.Path.home())
