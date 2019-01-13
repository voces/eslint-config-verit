
module.exports = {
	extends: [ "eslint:recommended", "mdcs" ],
	parserOptions: { ecmaVersion: 2018 },
	rules: {
		"comma-dangle": [ "error", "never" ],
		quotes: [ "error", "double" ],
		"no-multiple-empty-lines": [ "error", { max: 1 } ],
		strict: [ "error" ],
		"prefer-arrow-callback": [ "error" ],
		"arrow-parens": [ "error", "as-needed" ],
		"arrow-body-style": [ "error", "as-needed" ],
		"no-var": [ "error" ],
		"no-unused-vars": [ "error", { ignoreRestSiblings: true } ],
		curly: [ "error", "multi" ],
		"object-shorthand": [ "error" ],
		eqeqeq: [ "error" ],
		"prefer-const": [ "error" ],
		"no-console": 0,
		"no-constant-condition": 0,
		"no-self-assign": [ "error", { props: false } ],
		"spaced-comment": [ "error", "always", { exceptions: [ "/" ] } ],
		"no-duplicate-imports": [ "error" ],
		"quote-props": [ "error", "as-needed" ]
	}
};
