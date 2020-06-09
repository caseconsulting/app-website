# app-website

## Netlify Status and Deployments
### App-Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/0ed3cdf3-e0fd-493e-8320-159d510167b6/deploy-status)](https://app.netlify.com/sites/app-website/deploys)

### Blog
[![Netlify Status](https://api.netlify.com/api/v1/badges/34a6a4ef-5728-4ee4-bc54-e265c7eef8a3/deploy-status)](https://app.netlify.com/sites/case-blog/deploys/5ecd50adc5929b0006f125e2)

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


# Blog

## Application tasks

To run locally (i.e., start a development server):

```bash
npm run docs:dev
```

To build for production deployment (i.e., create the _\dist_ directory):

```bash
npm run docs:build
```

To add a blog post, create a markdown file (post-#.md) and add it to `app-website/docs/case-cares` or `app-website/docs/case-news` depending on the topic for your blog post

Images should be added to the `app-website/docs/.vuepress/public` directory and the path can be referenced in the markdown with the '/' character.

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
    'TagExample5'
  ]
layout: BlogPost
---

Blog Content...
```

See example [markdown syntax](https://markdown-it.github.io/)

## Pre-deployment Preview

Netlify automatically builds deploy previews for all pull requests. After pushing the branch to origin by rebasing, pull requests can be created for a branch at https://github.com/caseconsulting/app-website/pulls where you will also find the link to the preview by clicking Details in the deploy/netlify section of the pull request once prompted that the deploy preview is ready.

## Deployment

Changes merged to the app-website github master branch will automatically deploy to Netlify at https://app-website.netlify.app/ and https://blog.consultwithcase.com/. The list of deployments and status can be viewed by clicking the Netlify icons above. Note it may take a short time for Netlify to build and deployments cannot be deleted.

## BPTW button

Steps to recreate the BPTW button for a new year:
1. Open a photoshop or image editor tool (ex: photopea)
2. Import the BPTW-Template.png located at ./public/assets/custom/img/awards
3. Add the year using Inter font in white (0xffffff), with size of 114 px, and Black style
4. Save the image as a png titled BPTW-YEAR.png in the awards folder