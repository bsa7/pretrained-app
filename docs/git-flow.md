## Git flow

### 1. Dealing with jira task.
Jira task has four-letters prefix and number. Format like that: 'EABD-10'.
When you working with new jira task EABD-10, do a following actions:

- Commit changes in your current task:
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
