# ui-seed

# Setup
1. `npm install`
2. `jspm install`

# Available tasks
  `babel`             Transpile test
  `babel:watch`       Run 'babel' and watch for changes.
  `build`             Build the application.
  `build-code`        Build/bundle source via jspm/babel.
  `build-code:watch`  Run 'build-code' and watch for changes.
  `build-css`         Build CSS files from Sass sources
  `build-css:watch`   Run 'build-css' and watch for changes.
  `build:server`      Serve the built application & refresh on changes.
  `build:watch`       Build the application and rebuild code when code changes & CSS when Sass changes.
  `clean`             Remove transpiled source, maps, and build
  `coverage:server`   Serve test coverage report & refresh on changes
  `help`              Display this help text.
  `jsdoc`             Generate code documentation with JSDoc
  `jsdoc:server`      Serve results of jsdoc and refresh on changes
  `jsdoc:watch`       Run 'jsdoc' and watch for changes.
  `lint`              Lint source files with ESLint
  `lint:watch`        Run 'lint' and watch for changes.
  `raw:server`        Serve unbundled app & reload on changes.
  `test`              Lint and unit test.
  `unit-test`         Run Karma unit tests and then exit.
  `unit-test:watch`   Run 'unit-test' and watch for changes.
  `watch`             Watch and auto lint, test, build, doc.