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
docker-compose -f docker-compose.yml up
```

If all going well, you would see the output in terminal like this:
```
 ---> Running in 838ffff60b88

Collecting usage statistics. To deactivate, set browser.gatherUsageStats to False.


  You can now view your Streamlit app in your browser.

  Network URL: http://172.18.0.2:8501
  External URL: http://5.165.228.186:8501

```
Click on the `Network URL` link and application will be opened in your browser.

> install [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/), if it not yet installed on your system. [Instructions]()

> install [chrome](https://www.google.com/chrome/) and use it in the future.
