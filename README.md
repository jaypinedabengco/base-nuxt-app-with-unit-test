# base-nuxt-app-with-unit-test

> Base Nuxt Application with Unit Test

## Build and Run Local JWT API (for testing)
``` bash
# Setup is based on this tutorial
# https://scotch.io/tutorials/implementing-authentication-in-nuxtjs-app

# go to api location
$ cd ./local-jwt-auth-api

# install adonisJS globally 
$ npm i -g @adonisjs/cli #add 'sudo' if not allowed (sudo npm i -g @adonisjs/cli)

# Generate key
$ adonis key:generate

# Run Migration
$ adonis migration:run

# Start API
$ npm start
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
