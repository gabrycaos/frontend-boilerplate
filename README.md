# FRONTEND BOILERPLATE

Just another webpack/babel boilerplate for frontend development

## Features

  - [Webpack](https://webpack.js.org/concepts) (v4.29.6)
    - [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) (v3.2.1)
  - [ES6](https://www.ecma-international.org/ecma-262/6.0/)
  - [Babel](https://babeljs.io/docs/en/) (v7.4.0)
  - [ESLint](https://eslint.org/docs/user-guide/getting-started) (v5.16.0) (with [AirBnB](https://github.com/airbnb/javascript) config)
  - [SASS](https://sass-lang.com/guide)
  - [Jest](https://jestjs.io/docs/en/getting-started) (24.7.1) with code coverage reports
  - [Prettier](https://prettier.io/docs/en/install.html) (1.17.0)

## Usage

Open a command line session and type

`git clone https://github.com/gabrycaos/frontend-boilerplate.git /your/favourite/project/directory/`

`cd /your/favourite/project/directory/`

`npm install`

Now you're ready to go!

For start your work type

`npm start`

When your work is finished just type

`npm run build`

and your project is ready to deploy!

## Testing

You can test your code with the [Jest](https://jestjs.io/docs/en/getting-started) suite, for start the test you have to type following:

`npm run test`

For testing in watch mode, you have to type

`npm run test-watch`

After run `npm run test` you have a table in your terminal with a brief coverage report of your tests, and in the root of the project will be created a `coverage` directory with some coverage reports and file useful for your static code quality tools (e.g [SonarQube](https://www.sonarqube.org/))

