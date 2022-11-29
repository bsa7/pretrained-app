## Deployment

Application has a two public accessed instances. The first is `production`. Production server is a released version of application, passed all checks and perfectly working.

The second instance is `staging`. Staging instanse used in many purposes except public access. In next chapters, read about each instances carefully.

### Production
Deploy to production server is automatic. When new changes merged to `main` branch, it runned by github actions after all checks become green. Git has a secret key to have rights for deploy to host.

Production have two domain names:
1. Flask application accessible by link [https://pretrained-app.jsdev.cyou/welcome](https://pretrained-app.jsdev.cyou/welcome);
2. Nodejs application accessible by [https://pretrained-app-frontend.jsdev.cyou/](https://pretrained-app-frontend.jsdev.cyou/);

### Staging
Deploy to staging server is manual. You would to commit changes or switch to selected branch and deploy that current branch to staging host:

```bash
./script/deploy_to_staging.sh
```

To have rights for that action, you would to have public deploy key placed in `/home/deploys/.ssh/authorized_keys`.
