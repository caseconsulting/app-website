# app-website

## Netlify Status and Deployments

### App-Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ed3cdf3-e0fd-493e-8320-159d510167b6/deploy-status)](https://app.netlify.com/sites/app-website/deploys)

**app-website** is written in **Vue.js** and relies on **Node.js** v18.x+ and the **npm** package management system. UI is enhanced with **bootstrap-vue** and **Vuetify.js**.

- Download and install Node.js v18.x from: https://nodejs.org/en/ or https://nodejs.org/dist/latest-v18.x/
- Install required Node.js modules:

```bash
npm ci
```

## Environment variables

The following environment variables are required to support multiple environments:

- **VUE_APP_API**
- **NODE_ENV**

**vue-cli** automatically picks up environment variables in `.env` files. Any variables that begin with **VUE*APP***
will be included in the client bundle created by webpack. They will be accessible from your code using **process.env**.
At build time, webpack will replace these references with their corresponding values. For more information, go to:
https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code.
The `.env` file in the **case-consulting-website-code-dev** S3 bucket in the company AWS account has up-to-date values to run locally.
Download this file to the project root directory:

```bash
npm run download:local:env
```

## Application tasks

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Run your unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Pre-deployment Preview

Netlify automatically builds deploy previews for all pull requests. After pushing the branch to origin by rebasing, pull requests can be created for a branch at https://github.com/caseconsulting/app-website/pulls where you will also find the link to the preview by clicking Details in the deploy/netlify section of the pull request once prompted that the deploy preview is ready.

## Deployment

Changes merged to the app-website github master branch will automatically deploy to Netlify at https://app-website.netlify.app/. The list of deployments and status can be viewed by clicking the Netlify icons above. Note it may take a short time for Netlify to build and deployments cannot be deleted.
To deploy changes to production at https://consultwithcase.com/ merge app-website to GitHub release branch.

## BPTW button

Steps to recreate the BPTW button for a new year:

1. Open a photoshop or image editor tool (ex: photopea)
2. Import the BPTW-Template.png located at ./public/assets/custom/img/awards
3. Add the year using Inter font in white (0xffffff), with size of 114 px, and Black style
4. Save the image as a png titled BPTW-YEAR.png in the awards folder

## Documentation

**Axios:**

https://github.com/axios/axios

**Bootstrap-vue:**

https://bootstrap-vue.org/docs

**jQuery**

https://api.jquery.com/

**Vue:**

https://vuejs.org/v2/guide/

Please note we are currently using Vue2. When we migrate to Vue3 replace the above link.

**Vue-Multiselect**

https://vue-multiselect.js.org/

**Vue-Router**

https://router.vuejs.org/api/

**Vue2-Dropzone**

https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation

**Vuelidate**

https://vuelidate.js.org/

**Vuetify:**

https://vuetifyjs.com/en/

**Vuex**

https://vuex.vuejs.org/
