# Hapi.js + Angular

The following is a template for creating projects with Hapi.js as the REST api and Angular.js as the frontend.

## Getting Started

The following software must be installed for this template

- [Download & Install](http://www.nodejs.org/download) Node.js and the npm package manager. If you encounter any problems, you can also use this Github Gist to install Node.js.

- [Download & Install](http://www.mongodb.org/downloads) MongoDB and make sure it's running.

- Install the [Bower Package Manager](http://bower.io/) using npm to manage frontend packages.

		$ npm install -g bower

- Install the [Gulp](http://gulpjs.com/) build system for automating the development process.

		$ npm install -g gulp

- Install the [Karma](http://karma-runner.github.io/0.13/index.html) test runner for automated javascript testing

		$ npm install -g karma-cli

##  Running the Application

Once you've installed the prerequisites and cloned the repository using `git`, you're ready to get started.

To install the node modules and bower packages, run the following command line from the directory of your local copy of the repository.

		$ npm install

After the install process is complete, you will be able to run the application using Gulp.

		$ gulp

Your application will run on port 3000 & 3001. Open a browser window to [http://localhost:3000](http://localhost:3000) to see the results.

### File Changes

Gulp will monitor all files for changes and recompile whenever a change is detected.

## Javascript Testing

To start the Karma test runner, execute the following in a **separate** bash window.

		$ gulp test-watch

Karma will launch a browser window and begin tracking all test files for changes. Whenever a spec changes, Karma will rerun the tests. To see the test results, click on the *debug* button in the test browser window. Leave this window open during javascript development. To exit Karma, use `ctrl-c` in the bash window you are running Karma from.

To invoke a single test run without file monitoring, execute the following command.

		$ gulp test

## API Testing

The REST Api documentation can be found at [http://localhost:3001/docs](http://localhost:3001/docs) and uses Swagger for testing and documentation.