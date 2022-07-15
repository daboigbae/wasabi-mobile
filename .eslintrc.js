module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	plugins: ['react', 'react-hooks'],
	extends: ['eslint:recommended', '@react-native-community'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'react-native/no-color-literals': 'error',
		'no-unused-vars': ['error', { args: 'all' }],
		'no-console': 'error',
		'prefer-arrow-callback': 'error',
	},
};
