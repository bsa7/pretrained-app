## Git flow

### Customize your individual git settings:
Add aliases for frequently used commands:
```
git config --global alias.br 'branch'
git config --global alias.cd 'checkout develop'
git config --global alias.co 'checkout'
git config --global alias.pod 'pull origin develop'
git config --global alias.st 'status'
```

Add information about yourself:
```
git config user.name 'John Doe'
git config user.email John.Doe@urfu.me
```

```
git config pull.rebase true
git config --global rerere.enabled true
git config --global rerere.autoUpdate true
```

Also, you can use the git config file, placed in you home directory, or in project directory:
```
# ~/.gitconfig
[user]
  email = John.Doe@urfu.me
  name = John Doe

[alias]
  st = status
  br = branch
  co = checkout
  rd = rebase develop
  pod = pull origin develop
[cola]
  spellcheck = false
  tabwidth = 2
  textwidth = 100
[init]
  defaultBranch = develop
[rerere]
  enabled = true
  autoUpdate = true
```

### 1. Getting the project
Open your console terminal and change directory to the projects directory:
```
cd /home/username/projects
```

Clone project source code:
```
git clone git@gitlab.com:project-practice2/pretrained-app.git
```

Change directory to project's folder:
```
cd ./pretrained-app
```

Check the list of branches:
```
git branch
```

Change current branch to `develop`:
```
git checkout develop
```

Create your own branch:
```
git checkout -b EABD-100500-create-something
```

Make changes in source code and view results of your work:
```
git status
```

See the differences of changed files:
```
git diff ./file_name.py
```

Save results of your work:
```
git add .
git commit -m 'EABD-100500 Создать кое-что'
```

When you are would to add new changes to last commit in your branch - use the `amend`:
```
git add .
git commit --amend
```

Push your current branch to gitlab repository:
```
git push origin HEAD
```

Use `force` key if you are sqashes the commits:
```
git push -f origin HEAD
```

If your branch become staled, renew it by merging incoming changes from `develop` branch:
```
git checkout develop
git pull origin develop
git checkout EABD-100500-create-something
git rebase develop
git push -f origin EABD-100500-create-something
```

### 2. Dealing with jira task.
Jira task has four-letters prefix and number. Format like that: 'EABD-10'.
When you working with new jira task EABD-10, do a following actions:

Commit changes in your current task:
```
git add .
git commit -m 'EABD-9 Implement deploy to staging server'
```

When you store your previous work, renew head of the develop branch:
```
git checkout develop
git pull origin develop
```

Checkout to your branch and rebase to develop HEAD:
```
git checkout EABD-9-implement-deploy-to-staging-server
git rebase develop
```

Push branch to gitlab:
```
git push -f origin EABD-9-implement-deploy-to-staging-server
```

Go to https://gitlab.com/project-practice2/pretrained-app/-/merge_requests and create pull-request. Assign rewiewers, check description and other.


Create new branch. Name of branch would be a short and descriptive:
```
git checkout -b EABD-10-improve-ci-pipelines
```

Work on task.

## Resolving conflicts
The best way to automete routines is [rerere](https://git-scm.com/book/ru/v2/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git-Rerere) - particulary hidden git component. Activate it following an instruction steps.
