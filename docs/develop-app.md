# Install and run application for development

## Get the repo

### Prepare folder
Create folder on your computer, for simplification we will knew it as `/projects`. Probably you already have a folder with your existing projects. It will be a place, where we create folder on next step;

### Clone project
cd to your `~/projects` folder:
```bash
cd ~/projects
```

and run:
```
git clone git@github.com:bsa7/pretrained-app.git
```

> Install git, follow [instructions](https://www.atlassian.com/git/tutorials/install-git), if you don't install it yet.

It will create children folder `~/projects/pretrained-app`.

## Prepare environment
> install [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/), if it not yet installed on your system. [Instructions]()

> install [chrome](https://www.google.com/chrome/) and use it in the future.

> install [asdf](https://asdf-vm.com/) - command-line tool to manage versions of python, nodejs and many more:
```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
cd ~/.asdf
git checkout "$(git describe --abbrev=0 --tags)"
echo -e '\n. $HOME/.asdf/asdf.sh' >> ~/.bashrc
echo -e '\n. $HOME/.asdf/completions/asdf.bash' >> ~/.bashrc
asdf plugin-add python
asdf plugin-add nodejs
asdf install
```
This commands sequence prepared your environment to run parts of your application outside of docker containers. It can be useful for some developers.

### Build application containers
cd into our **project folder**:

```
cd ~/projects/pretrained-app
```

install required dependencies:
```
docker-compose build
```

## <a name="run-application"></a>Run application
Application runs as main endpoint, based on Flask and second part - frontend. Flask and Frontend parts are linked, shares data and working together.

To run api and frontend part open a new terminal and execute command:
```bash
docker-compose up
```
If all going well, you would see the output in frontend terminal like that:
```bash
...
api_1    |  * Serving Flask app 'main'
api_1    |  * Running on all addresses (0.0.0.0)
api_1    | Press CTRL+C to quit
...
front_1  | Starting Metro Bundler
front_1  | Starting Webpack on port 19006 in development mode.
front_1  | ⚠ ｢wds｣: transportMode is an experimental option, meaning its usage could potentially change without warning
front_1  | Waiting on http://localhost:19000
front_1  | Logs for your project will appear below.
...
```
Now, you can open your frontend application in browser. Open new tab and insert address: `http://0.0.0.0:19006` - you could see the application page.
Also, you wolud to open frontend application on your Android on Ios device.
* Follow these [instructions](./mobile-development.md#android) to open android app in development mode.
* Follow these [instructions](./mobile-development.md#ios) to open ios app in development mode.

### If you need only exactly services
For many developers are not usefull to run all applications in docker. Instead this you would run services explicitly
For example, if you need to run api in other terminal as local application, then:
```bash
# Run in first terminal only nginx backend and expo frontend:
docker-compose up nginx frontend
# Run in second terminal api application:
./script/run_api_dev.sh
```

## Open application in browser
### Setting up your local /etc/hosts
Add a folowing lines into end of file `/etc/hosts`:
```
0.0.0.0 dev.pretrained-app.ru
0.0.0.0 dev-frontend.pretrained-app.ru
```

To open backend part folow that url: `https://dev.pretrained-app.ru/welcome`. You would see that picture:
![Backend Welcome page](./assets/backend-welcome-page.png)

To open frontend part follow that url: `https://dev-frontend.pretrained-app.ru/`. You would to see that:
![Frontend Index page](./assets/frontend-welcome-page.png)

## Run linters
### Python linter
Code quality of each pull-request controlled with python linter `pylint`.
To check your code locally, before pushing changes to repo, you wold use this command:
```bash
./docker/run_lint.sh
```
If all going fine, you would see next output in console:
```
Creating pretrained-app_api_run ... done
Run Python linter

------------------------------------
Your code has been rated at 10.00/10
```

## Run tests
All tests for application stored in `./test` folder. You can run single test and, of course, all tests in suite.

### To run all tests:
```bash
./script/run_tests.sh
```

If all going fine, you would see output in console, like that:

![Ward success results example](./assets/ward-results-demo.png)

### To run exactly one test file:
```bash
./script/run_tests.sh ./test/controllers/welcome_controller_test.py
```
> Note: you could omit first level folder in path, relative to project's root. In above example, the file, which placed in `./api/test/controllers/welcome_controller_test.py` would become as `./test/controllers/welcome_controller_test.py`

### Using tags for run test explicitly
When you describe your ward test, you can use tags:
```python
@test('response with status 200 for GET query', tags=['request', 'text_summarization', 'current'])
def _(client = client, resource = each('summarization')):
  response = client.get(url_for(f'{resource}.index'))
  assert response.status_code == 200
```

So, if you want to run one particular test, you can specify its tag when running:
```bash
./script/run_tests.sh --tags=current
```

## Useful links
### API libraries
* [Flask](https://flask.palletsprojects.com/en/2.2.x/);
* [MVC Flask](https://github.com/marcuxyz/mvc-flask);
* [Ward](https://ward.readthedocs.io/en/latest/);


### Frontend libraries
* [expo](https://docs.expo.dev/);
* [react-native](https://reactnative.dev/);
* [@react-native-material](https://www.react-native-material.com/docs/components/button);
* [react-native material examples](https://example.react-native-material.com/);
* [react-native material playground](https://snack.expo.dev/);
