
module.exports = {
	extends: [ "eslint:recommended", "mdcs" ],
	parserOptions: { ecmaVersion: 2018 },
	rules: {
		"arrow-body-style": [ "error", "as-needed" ],
		"arrow-parens": [ "error", "as-needed" ],
		"comma-dangle": [ "error", "never" ],
		curly: [ "error", "multi" ],
		eqeqeq: [ "error" ],
		"no-console": 0,
		"no-constant-condition": 0,
		"no-duplicate-imports": [ "error" ],
		"no-extra-parens": [ "error" ],
		"no-multiple-empty-lines": [ "error", { max: 1 } ],
		"no-self-assign": [ "error", { props: false } ],
		"no-unused-vars": [ "error", { ignoreRestSiblings: true } ],
		"no-var": [ "error" ],
		"object-shorthand": [ "error" ],
		"prefer-arrow-callback": [ "error" ],
		"prefer-const": [ "error" ],
		"quote-props": [ "error", "as-needed" ],
		quotes: [ "error", "double" ],
		"spaced-comment": [ "error", "always", { exceptions: [ "/" ] } ],
		strict: [ "error" ]
	}
};
