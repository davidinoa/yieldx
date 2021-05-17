YieldX
------

[![CircleCI](https://circleci.com/gh/bondhouse/yieldx.svg?style=shield&circle-token=7ed2644fc8c86ddb1e8bec0fdabe4939d0848c39)](https://circleci.com/gh/bondhouse/yieldx)
[![codecov](https://codecov.io/gh/bondhouse/yieldx/branch/master/graph/badge.svg?token=AvE1LEgKs2)](https://codecov.io/gh/bondhouse/yieldx)

## Authentication

Please install the `bh` utility program found [Here](https://github.com/bondhouse/bh). Before each day's work begin,

>you need to run `bh login` on your command line to save an access token

When writing a back-end that both communicates with upstream microservices as well as handle client requests, it is important
to distinguish between two types of identities implemented by two different types of access tokens

## Configure your NPM (.npmrc)
**Note**
If you run into `401` issues with the commands below try removing `client/yarn.lock` and running `yarn` again. If that fixes the issue, create a PR with the updated `client/yarn.lock` file. [Yarn Issue Ref](https://github.com/uber-common/vis-academy/issues/32)

_____
##### Option 1: cli
```sh
npm config set always-auth true
npm login --registry=https://bondhouse.jfrog.io/artifactory/api/npm/npm-local/ --scope=@bondhouse
```

That should update your npm config to the following
```sh
# ~/.npmrc
always-auth=true
@bondhouse:registry=https://bondhouse.jfrog.io/artifactory/api/npm/npm-local/
//bondhouse.jfrog.io/artifactory/api/npm/npm-local/:_authToken=<YOUR_AUTH_TOKEN>
```

___
##### Option 2: GUI
Before you can install and run the project locally, you must set up NPM to use resolve all `@bondhouse` scoped packages
from Artifactory (our private npm repository among other things)

To do so, click `Set Me Up` at [Artifactory](https://bondhouse.jfrog.io/ui/repos/tree/General/npm) and follow the
instructions. The resulting `~/.npmrc` should look something like this:

```sh
@bondhouse:registry=https://bondhouse.jfrog.io/artifactory/api/npm/npm-local/
//bondhouse.jfrog.io/artifactory/api/npm/npm-local/:_password=...
//bondhouse.jfrog.io/artifactory/api/npm/npm-local/:username=...
//bondhouse.jfrog.io/artifactory/api/npm/npm-local/:email=...
//bondhouse.jfrog.io/artifactory/api/npm/npm-local/:always-auth=true
```

## Install Modules
```sh
# On one terminal
cd client
yarn
```


## Launch React App

```
yarn start
```

## Launch Server

Note that the server is not needed when running locally, as the React app will handle proxying as long as you have
valid credentials in `~/.bh/credentials.json`.

```
cd server
npm install
npm start
```

## Front End

The front-end is managed by `create-react-app`. In development (locally) a webpack server managed by `create-react-app`
 will reload front-end code on the fly

Learn more about create-react-app [Here](https://create-react-app.dev/)

API requests, all requests sent to `http://localhost:3000/inpaas/apis/*` will be routed to the back-end
(make sure you followed the instructions above to run the back-end as well)

## Back End

The back-end is a NodeJS express server listening on port 5000. This is where you would call the microservice
layer to orchestrate interaction with the rest of our service stack

The back-end is a liaison between the microservices layer and the front-end

### Access Token representing the user

Any request handler should be able to look at the `Authorization` header of the request
and see the access token representing the the "end-user" (locally this is you)

### Access token representing the back-end

The back-end itself, when run n production, runs with an identity assigned via the `BH_CLIENT_ID` and `BH_CLIENT_SECRET`
environment variables. The level of access between an end-user and the back-end is different in production. Though
in local development this is the same as all access tokens are obtained through your local credentials file
 (unless you override those environment variables)

### Why should you care?

Your back-end app might have privileged access to a microservice (i.e. place trades for anybody on the platform),
your back-end gains that access by using its own access token obtained by calling `@bondhouse/bh-authenticator-node`

However, some back-enmd operations may also just request some resources on behalf of the caller, i.e. get all portfolios that
a caller is entitled to

In the later case, it is important to pass along the access token you receive on the `req: Request` object from the handler
and not use the back-end's own credentials

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
