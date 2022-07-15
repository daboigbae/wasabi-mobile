module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true
	},
	extends: ["plugin:react/recommended", "prettier", "prettier/react"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "react-native"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"]
	}
};
