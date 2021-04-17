module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
  ],
	rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
		quotes: ["error", "double"],
    indent: ["error", 2],
    camelcase: ["error", { properties: "never", allow: ["^UNSAFE_"] }],
    "linebreak-style": ["error", "unix"],
    "max-len": ["error", { code: 120 }],
    "no-plusplus": "off",
    "no-nested-ternary": "off",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
    "no-param-reassign": "off",
    "no-unused-vars": ["error", { args: "none", ignoreRestSiblings: true }],
    "object-curly-newline": ["error", { consistent: true }],
	}
};
