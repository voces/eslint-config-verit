const sharedRules = {
	"arrow-body-style": ["error", "as-needed"],
	"comma-dangle": ["error", "always-multiline"],
	"no-console": ["warn", { allow: ["warn", "error"] }],
	"no-constant-condition": "warn",
	"no-dupe-class-members": "off",
	"no-duplicate-imports": ["error"],
	"no-multiple-empty-lines": ["error", { max: 1 }],
	"no-self-assign": ["error", { props: false }],
	"no-var": ["error"],
	"object-shorthand": ["error"],
	"padding-line-between-statements": "off",
	"prefer-arrow-callback": ["error"],
	"prefer-const": ["error"],
	"quote-props": ["error", "as-needed"],
	"spaced-comment": ["error", "always", { exceptions: ["/"] }],
	curly: ["error", "multi"],
	eqeqeq: ["error"],
	quotes: [
		"error",
		"double",
		{ avoidEscape: true, allowTemplateLiterals: false },
	],
	strict: ["error"],
};

const typeScript = {
	files: ["**/*.ts"],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: 2020 },
	plugins: ["@typescript-eslint"],
	extends: [
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	rules: {
		...sharedRules,
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unused-vars": "error",
		"no-undef": "off",
		"no-unused-vars": "off",
	},
};

module.exports = {
	root: true,
	env: { es2020: true },
	extends: ["eslint:recommended", "mdcs", "plugin:prettier/recommended"],
	rules: {
		...sharedRules,
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
	},
	overrides: [typeScript],
};
