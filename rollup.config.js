import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'tailormade',
			file: pkg.browser,
			compact: true,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs(),
			terser()
		]
	},
	{
		input: 'src/main.js',
		output: {
			name: 'tailormade',
			file: pkg.dev,
			compact: true,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs()
		]
	},
	{
		input: 'src/main.js',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
		],
		plugins: [
			resolve(),
			commonjs()
		]
	}
];
