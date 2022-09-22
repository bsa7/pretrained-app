# Install and run application for development

## Get the repo

### Prepare folder
Create folder on your computer, for simplification we will knew it as `/projects`. Probably you already have a folder with your existing projects. It will be a place, where we create folder on next step;

### Clone project
cd in your `/projects` folder and run:
```
git clone git@github.com:bsa7/pretrained-app.git
```
> Install git, follow [instructions](https://www.atlassian.com/git/tutorials/install-git), if you don't install it yet.

It will create children folder `/projects/pretrained-app`.

## Prepare environment

### Install dependencies
cd into our **project folder**:

```
cd /projects/pretrained-app
```

install required dependencies:
```
pip install -r requirements.txt
```

> install pip, follow [instructions](https://pip.pypa.io/en/stable/installation/), if need.

## Run application
```
streamlit run app/main.py
```
