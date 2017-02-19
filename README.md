# eslint-config-recombix
An awesome ESLint configuration for writing solid, quality code in Node.js and the browser.

## Why This Module Exists
This module exists to help developers to write code that is easily understandable. The linting rules are deliberately opinionated to encourage developers to write code that is easy to read, easy to reason about, and easy to understand for newcomers.

## Latest Standards
The module will be kept up-to-date with the latest ECMAScript standards in line with the functionality that Node.js supports. If you wish to use this config whilst developing for legacy browsers it's recommended you use a transpiler such as Babel to convert your code from ES2015 to ES5.

## Basic Usage
Add the following development dependencies into your project's package.json:
```javascript
"devDependencies": {
	"eslint": "latest",
	"eslint-config-recombix": "latest",
	"eslint-plugin-filenames": "latest",
	"eslint-plugin-json": "latest",
	"eslint-plugin-node": "latest",
	"eslint-plugin-promise": "latest"
},
```

You should also set the Node version you plan to use for your project, for example:
```javascript
"engines": {
	"node" : ">=7.5 < 8.0"
}
```
