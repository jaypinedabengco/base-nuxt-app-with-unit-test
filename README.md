# base-nuxt-app-with-unit-test

> Base Nuxt Application with Unit Test

<!-- 

BACKUP

## Build and Run Local JWT API (for testing)
``` bash
# Setup is based on this tutorial
# https://scotch.io/tutorials/implementing-authentication-in-nuxtjs-app

# go to api location
#$ cd ./local-jwt-auth-api

#install dependencies
#$ npm install

# install adonisJS globally 
#$ npm i -g @adonisjs/cli #add 'sudo' if not allowed (sudo npm i -g @adonisjs/cli)

# Generate key
#$ adonis key:generate

# Run Migration
#$ adonis migration:run

# Start API
#$ npm start
$ npm run start-local-jwt-auth-api
```

-->

## Build and Run Local JWT API (for testing)
``` bash
# Setup is based on this tutorial
# https://scotch.io/tutorials/implementing-authentication-in-nuxtjs-app

# check node version, preferred v8.x.x 
$ node --v

# check npm version, preferred v5.x.x
$ npm --v

# initialize local jwt auth api
$ npm run initialize-local-jwt-auth-api

# start api
$ npm run start-local-jwt-auth-api

```

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```


For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
