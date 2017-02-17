/*
 * ESLint config used by Settled.co.uk. Based on AirBnB's implementation.
 */

module.exports = {

	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
	],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: false,
      jsx: true,
    },
  },

  env: {
		es6: true,
    browser: true,
		commonjs: true,
		node: true,
		serviceworker: true,
		worker: true,
		mocha: true,
		jquery: true,
  },

	plugins: [
		'json',
    'filenames',
		'node',
		'promise',
  ],

  rules: {

		/*
		 * ESLint Core Rules
		 */
		'no-await-in-loop': 2,
		'no-useless-concat': 2,
		'prefer-template': 2,
		'quotes': [2, 'backtick', {
			'avoidEscape': true,
		}],
    'arrow-body-style': [1, 'as-needed'],
    'arrow-parens': 0,
    'brace-style': [2, 'stroustrup', {
      'allowSingleLine': true
    }],
    'callback-return': [2, ['callback', 'cb', 'finish', 'done', 'next', 'nextItem']],
    'camelcase': 1,
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    'consistent-return': 0,
    'curly': [2, 'all'],
    'func-names': 0,
    'global-require': 1,
    'guard-for-in': 2,
    'handle-callback-err': [2, '^err'],
    'id-length': [1, {
      'min': 3,
      'max': 35,
    }],
    'indent': ['error', 'tab', {
      'SwitchCase': 1,
      'VariableDeclarator': {
        'var': 2,
        'let': 2,
        'const': 3,
      },
      'outerIIFEBody': 1,
      'MemberExpression': 1,
      'FunctionDeclaration': {
        'parameters': 1,
        'body': 1,
      },
      'FunctionExpression': {
        'parameters': 1,
        'body': 1,
      },
      'CallExpression': {
        'arguments': 1,
      },
    }],
    'max-depth': [2, 10],
    'max-len': [1, {
      'code': 120,
      'tabWidth': 2,
      'ignoreTrailingComments': true,
    }],
    'max-nested-callbacks': [2, 5],
    'max-params': [2, 5],
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': true,
      'capIsNewExceptions': ['Router'],
    }],
    'newline-after-var': [2, 'always'],
    'no-cond-assign': [2, 'except-parens'],
    'no-confusing-arrow': [2, {
			'allowParens': true,
		}],
    'no-console': 1,
    'no-continue': 0,
    'no-else-return': 0,
    'no-lonely-if': 2,
    'no-mixed-requires': [1, {
      'grouping': true,
      'allowCall': true,
    }],
    'no-new-require': 2,
    'no-param-reassign': [2, {
      'props': false,
    }],
    'no-path-concat': 2,
    'no-plusplus': [1, {
      'allowForLoopAfterthoughts': true,
    }],
    'no-process-exit': 2,
    'no-return-assign': 0,
    'no-shadow': [2, {
      'allow': ['err'],
    }],
    'no-sync': 2,
    'no-tabs': 0,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unused-expressions': [2, {
      'allowTernary': true,
    }],
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'after-used',
    }],
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'padded-blocks': 0,
    'prefer-arrow-callback': 1,
    'prefer-const': 2,
    'prefer-spread': 2,
    'radix': 0,
    'semi': [2, 'always'],
    'space-before-blocks': [1, {
      'functions': 'always',
      'keywords': 'always',
      'classes': 'always',
    }],
    'space-before-function-paren': [1, {
      'anonymous': 'always',
      'named': 'always',
    }],
    'spaced-comment': 1,
    'strict': [2, 'global'],
    'yoda': [2, 'never'],

		/*
		 * eslint-plugin-filenames
		 */
		 'filenames/match-regex': 2,  // Filenames must be in 'camelCase'.
		 'filenames/no-index': 2,

		 /*
		  * eslint-plugin-node
			*/
		'node/exports-style': [2, 'module.exports'],

		/*
		 * eslint-plugin-promise
		 */
		 'promise/always-return': 0,
		 'promise/no-return-wrap': 1,
		 'promise/param-names': 2,
		 'promise/catch-or-return': 2,
		 'promise/no-native': 0,
		 'promise/no-nesting': 2,
		 'promise/no-promise-in-callback': 1,
		 'promise/no-callback-in-promise': 1,
		 'promise/avoid-new': 0,
		 'promise/prefer-await-to-then': 0,  // Will be enabled once Node.js 8.0 is released.
		 'promise/prefer-await-to-callbacks': 0,  // Will be enabled once Node.js 8.0 is released.

  }

};