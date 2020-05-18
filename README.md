# app-website

[![Netlify Status](https://api.netlify.com/api/v1/badges/0ed3cdf3-e0fd-493e-8320-159d510167b6/deploy-status)](https://app.netlify.com/sites/app-website/deploys)

**app-website** is written in **Vue.js** and relies on **Node.js** v12.x+ and the **npm** package management system.

- Download and install Node.js v12.x from: https://nodejs.org/en/ or https://nodejs.org/dist/latest-v12.x/
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
The `.env` file in the **case-consulting-website-code** S3 bucket in the company AWS account has up-to-date values to run locally.
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

### Run your end-to-end tests

```bash
npm run test:e2e
```

### Run your unit tests

```bash
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


# blog

## Application tasks

To run locally (i.e., start a development server):

```
npm run docs:dev
```

To build for production deployment (i.e., create the _\dist_ directory):

```
npm run docs:build
```

To add a blog post, create a markdown file (post-#.md) and add it to app-website/docs/case-cares or app-website/docs/case-news depending on the topic for your blog post

Images should be added to app-website/docs/.vuepress/public directory and the path can be referenced in the markdown with the '/' character.

The markdown should be formatted as:

```
---
meta:
  - property: og:image
    content: https://blog.consultwithcase.com/Preview-Image.jpg

image: /Preview-Image.jpg
postImage: /Post-Image.jpg
title: Blog Title
author: Blog Author
description: Blog description
date: 12-31-20 (mm-dd-yy)
tags:
  [
    'TagExample1',
    'TagExample2',
    'TagExample3',
    'TagExample4',
    'TagExample5',
  ]
layout: BlogPost
---

Blog Content...
```

See example [markdown syntax](https://markdown-it.github.io/)

## Deployment

Changes merged to GitHub will be automatically deployed to Netlify at https://app-website.netlify.app/ and https://blog.consultwithcase.com/. It may take some time for Netlify to build, view status above.
