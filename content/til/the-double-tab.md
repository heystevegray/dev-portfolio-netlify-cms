---
title: Holy tabs batman
publish_date: 2021-05-27T04:13:04.207Z
updated: 2021-05-27T04:13:03.307Z
description: Programmatically open new tabs in your terminal, and open your
  browser to `http://localhost:3000`
image: assets/daniel-sessler-i_-owwnuw6w-unsplash.jpg
tldr: >-
  Automatically open new tabs in your terminal, and open your browser to
  http://localhost:3000. First install the following developer dependencies:


  ```bash

  npm install -D concurrently ttab

  ```


  `concurrently` allows us to run commands at the same time, and `ttab` will open the terminal tabs for us. Add the following to your `package.json` scripts section:


  ```json

  "dev": "next",

  "docker": "docker compose up",

  "tab:dev": "ttab -t \"Next App\" npm run dev",

  "tab:docker": "ttab -t \"Docker\" npm run docker",

  "localhost": "open 'http://localhost:3000'",

  "lazy": "concurrently \"npm run tab:dev\" \"npm run tab:docker\" \"npm run localhost\"",


  ```


  Then you can run the following command:


  ```bash

  npm run lazy

  ```


  More info on [ttab](https://www.npmjs.com/package/ttab), [concurrently](https://www.npmjs.com/package/concurrently), and [open](https://apple.stackexchange.com/a/212585).
tags:
  - nextjs docker ttab concurrently npm scripts
---
# Overview

```toc
exclude: Overview
```

## Summary
Automatically open new tabs in your terminal, and open your browser to `http://localhost:3000`.

## Description

In this example we have a new [next js](https://nextjs.org/) application. We will add an npm script called `lazy` to do the following:

* Open a new tab in your terminal for your development server (`npm run tab:dev`)
* Open a new tab in your terminal for your docker container (`npm run tab:docker`)
* Open `http://localhost:3000` in your default browser (`npm run localhost`)

## Usage

First install the following developer dependencies:

```json
npm install -D concurrently ttab
```

`concurrently` allows us to run commands at the same time, and `ttab` will open the terminal tabs for us. More info on [ttab](https://www.npmjs.com/package/ttab) and [concurrently](https://www.npmjs.com/package/concurrently). Next we will add the folloiwing scripts to our `package.json` scripts section:

```json
"scripts": {
    "dev": "next",
    "docker": "docker compose up",
    "tab:dev": "ttab -t \"Next App\" npm run dev",
    "tab:docker": "ttab -t \"Docker\" npm run docker",
    "localhost": "open \"http://localhost:3000\"",
    "lazy": "concurrently \"npm run next\" \"npm run watch-queries\"",
}
```

Now that we have our npm scripts setup, we can run the following:

```bash
npm run lazy
```

## Resources

* [Open Multiple Terminal Tabs on npm Start with ttab and npm-run-all](https://egghead.io/lessons/npm-open-multiple-terminal-tabs-on-npm-start-with-ttab-and-npm-run-all)

### Commands

* [ttab](https://www.npmjs.com/package/ttab)
* [concurrently](https://www.npmjs.com/package/concurrently)
* [How to open files via Terminal](https://apple.stackexchange.com/a/212585)

### Photo

* [Photo by Daniel Seßler on Unsplash](https://unsplash.com/photos/I_-OwWnUw6w)