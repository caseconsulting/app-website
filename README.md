# app-website      

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ed3cdf3-e0fd-493e-8320-159d510167b6/deploy-status)](https://app.netlify.com/sites/app-website/deploys)

**app-website** is written in **Vue.js** and relies on **Node.js** v8.x+ and the **npm** package management system.

* Download and install Node.js v8.x from: https://nodejs.org/dist/latest-v8.x/
* Install required Node.js modules:

## Project setup
```
npm install
```

## Environment variables

The following environment variables are required to support multiple environments:

* **VUE_APP_API**
* **NODE_ENV**

**vue-cli** automatically picks up environment variables in `.env` files. Any variables that begin with **VUE_APP_**
will be included in the client bundle created by webpack. They will be accessible from your code using **process.env**.
At build time, webpack will replace these references with their corresponding values. For more information, go to:
https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code.
The `.env` file in the **case-consulting-website-code** S3 bucket in the company AWS account has up-to-date values to run locally.
Download this file to the project root directory:

```
aws s3 cp s3://case-consulting-website-code/.env .env
```

## Application tasks

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
