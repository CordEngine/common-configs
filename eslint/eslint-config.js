/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import eslint from '@eslint/js';
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import stylistic from '@stylistic/eslint-plugin';
import xoTypeScript from 'eslint-config-xo-typescript';
import esimport from 'eslint-plugin-import';
import n from 'eslint-plugin-n';
import nonative from 'eslint-plugin-no-use-extend-native';
import promise from 'eslint-plugin-promise';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default [
	...xoTypeScript,
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	n.configs['flat/recommended-script'],
	promise.configs['flat/recommended'],
	security.configs.recommended,
	comments.recommended,
	esimport.flatConfigs.recommended,
	esimport.flatConfigs.typescript,
	unicorn.configs['flat/recommended'],
	sonarjs.configs.recommended,
	nonative.configs.recommended,
	stylistic.configs.customize({
		arrowParens: true,
		braceStyle: '1tbs',
		indent: 'tab',
		jsx: false,
		semi: true,
	}),
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
			},
		},
	},
	{
		rules: {
			// Disabled due to open issues with the rules.
			'unicorn/consistent-function-scoping': 'off',
			'unicorn/no-useless-undefined': 'off',

			'promise/prefer-await-to-then': 'error',
			'import/first': 'error',
			'import/no-absolute-path': 'error',
			'import/no-named-default': 'error',
			'import/no-cycle': [
				'error',
				{
					ignoreExternal: true,
				},
			],
			'import/no-useless-path-segments': 'error',
			'import/newline-after-import': 'error',
			'import/no-empty-named-blocks': 'error',
			'import/no-mutable-exports': 'error',
			// Buggy and redundant with 'n/no-missing-import'
			'import/no-unresolved': 'off',
			'import/order': [
				'error',
				{
					'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
					'newlines-between': 'never',
					'warnOnUnassignedImports': true,
					'named': true,
					'alphabetize': {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'import/no-unassigned-import': 'error',
			'n/prefer-global/console': ['error', 'always'],
			'n/prefer-global/process': ['error', 'always'],
			'n/prefer-global/text-decoder': ['error', 'always'],
			'n/prefer-global/text-encoder': ['error', 'always'],
			'n/prefer-global/url-search-params': ['error', 'always'],
			'n/prefer-global/url': ['error', 'always'],
			'n/prefer-promises/dns': 'error',
			'n/prefer-promises/fs': 'error',
			// Buggy
			'n/no-missing-import': 'off',
			'@eslint-community/eslint-comments/no-unused-disable': 'error',
			'@eslint-community/eslint-comments/disable-enable-pair': [
				'error',
				{ allowWholeFile: true },
			],
			'capitalized-comments': 'off',
			'no-await-in-loop': 'warn',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/method-signature-style': 'error',
			'@typescript-eslint/no-redeclare': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase'],
				},
				{
					selector: 'variable',
					format: ['camelCase'],
					leadingUnderscore: 'allowSingleOrDouble',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'parameter',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['PascalCase'],
					prefix: ['is', 'has', 'can', 'should', 'will', 'did', 'does'],
				},
				{
					selector: ['classProperty', 'objectLiteralProperty'],
					format: [],
					modifiers: ['requiresQuotes'],
				},
				{
					selector: 'variable',
					filter: '.*Schema$',
					format: ['PascalCase'],
				},
			],
			'unicorn/catch-error-name': [
				'error',
				{
					name: 'exception',
				},
			],
		},
	},
];
