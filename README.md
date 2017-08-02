# ui-seed

# Setup
1. `npm install`
2. `jspm install`

# Available tasks
|Command|Function|
|:-|:-|
|`gulp babel`|Transpile test|
|`gulp babel:watch`|Run 'babel' and watch for changes|
|`gulp build`|Build the application|
|`gulp build-code`|Build/bundle source via jspm/babel|
|`gulp build-code:watch`|Run 'build-code' and watch for changes|
|`gulp build-css`|Build CSS files from Sass sources|
|`gulp build-css:watch`|Run 'build-css' and watch for changes|
|`gulp build:server`|Serve the built application & refresh on changes|
|`gulp build:watch`|Build the application and rebuild code when code changes & CSS when Sass changes|
|`gulp clean`|Remove transpiled source, maps, and build|
|`gulp coverage:server`|Serve test coverage report & refresh on changes|
|`gulp help`|Display this help text|
|`gulp jsdoc`|Generate code documentation with JSDoc|
|`gulp jsdoc:server`|Serve results of jsdoc and refresh on changes|
|`gulp jsdoc:watch`|Run 'jsdoc' and watch for changes|
|`gulp lint`|Lint source files with ESLint|
|`gulp lint:watch`|Run 'lint' and watch for changes|
|`gulp raw:server`|Serve unbundled app & reload on changes|
|`gulp test`|Lint and unit test|
|`gulp unit-test`|Run Karma unit tests and then exit|
|`gulp unit-test:watch`|Run 'unit-test' and watch for changes|
|`gulp watch`|Watch and auto lint, test, build, doc|
