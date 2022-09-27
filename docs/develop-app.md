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
> install [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/), if it not yet installed on your system. [Instructions]()

> install [chrome](https://www.google.com/chrome/) and use it in the future.

### Build application containers
cd into our **project folder**:

```
cd /projects/pretrained-app
```

install required dependencies:
```
./docker/build.sh
```

> About pip, read [documentation](https://pip.pypa.io/en/stable/), if need.

## Run application
```
./docker/run_streamlit.sh
```

If all going well, you would see the output in terminal like this:
```
...
Collecting usage statistics. To deactivate, set browser.gatherUsageStats to False.


  You can now view your Streamlit app in your browser.

  Network URL: http://172.18.0.2:8501
  External URL: http://5.165.228.186:8501

```
Click on the `Network URL` link and application will be opened in your browser.

## Run tests
All tests for application stored in `./test` folder. You can run single test and, of course, all tests in suite.

### To run all tests in single file:
```bash
./docker/run_tests.sh
```

If all going fine, you would see output in console, like that:
```bash
Creating pretrained-app_app_run ... done
Run all tests
=========================================================================== test session starts ============================================================================
platform linux -- Python 3.10.7, pytest-7.1.3, pluggy-1.0.0
rootdir: /app, configfile: pytest.ini, testpaths: test
collected 2 items

test/use_cases/lib/math_utilities_test.py ..                                                                                                                         [100%]

============================================================================ 2 passed in 0.02s =============================================================================
```

