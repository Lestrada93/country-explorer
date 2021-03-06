# Country explorer application created using React

This project was made by using [Webpack](https://webpack.js.org/)

In this project you can find:

* Linter
* Unit tests
* Modularization architecture
* i18n for internationalization texts
* Docker

I went for a custom design, not using any styling library to you can see I can move in this area.

I really enjoyed working in this app, in case any doubt or concern about the application please let me know for clarifications

## Available Scripts

In the project directory, you can run npm scripts or just go for Docker and see the development mode

### `npm start`

Runs the app in the development mode.\
The host for this application is http://0.0.0.0 this as workaround to work with Docker but still you can use
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test:ci`

Launches the test runner as a resume with all the tests available

### `npm run test`

Launches the test runner as a watcher if you are in development mode

### `npm run test:coverage`

Launches the test coverage report getting the coverage in the whole project

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Run the linter as it was set including airbnb and react recommender patterns

## Docker

For docker just use `docker-compose up`