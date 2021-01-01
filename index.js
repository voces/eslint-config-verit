const sharedRules = {
	"arrow-body-style": ["error", "as-needed"],
	"comma-dangle": ["error", "always-multiline"],
	"eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
	"eslint-comments/no-unused-disable": "error",
	"no-console": ["warn", { allow: ["warn", "error"] }],
	"no-constant-condition": "warn",
	"no-dupe-class-members": "off",
	"no-duplicate-imports": "error",
	"no-multiple-empty-lines": ["error", { max: 1 }],
	"no-self-assign": ["error", { props: false }],
	"no-var": "error",
	"object-shorthand": "error",
	"padding-line-between-statements": "off",
	"prefer-arrow-callback": "error",
	"prefer-const": "error",
	"quote-props": ["error", "as-needed"],
	"react/no-deprecated": "off",
	"react/self-closing-comp": "error",
	"simple-import-sort/imports": "error",
	"simple-import-sort/exports": "error",
	"spaced-comment": ["error", "always", { exceptions: ["/"] }],
	curly: ["error", "multi"],
	eqeqeq: "error",
	quotes: [
		"error",
		"double",
		{ avoidEscape: true, allowTemplateLiterals: false },
	],
	strict: "error",
};

const typeScript = {
	files: ["**/*.ts", "**/*.tsx"],
	parser: "@typescript-eslint/parser",
	parserOptions: { ecmaVersion: 2020 },
	plugins: [
		"react",
		"react-hooks",
		"@typescript-eslint",
		"simple-import-sort",
	],
	extends: [
		"plugin:react/recommended",
		"mdcs",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
	],
	rules: {
		...sharedRules,
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"no-undef": "off",
		"no-unused-vars": "off",
	},
};

module.exports = {
	root: true,
	env: { es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"mdcs",
		"plugin:eslint-comments/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["react", "react-hooks"],
	rules: {
		...sharedRules,
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
	},
	parserOptions: { ecmaFeatures: { jsx: true } },
	overrides: [typeScript],
};
