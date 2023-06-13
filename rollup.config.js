
import terser from '@rollup/plugin-terser';

export default {
	input: './scripts/scripts.js',
	output: {
		file: './scripts/s.js',
		format: 'iife'
	},
  plugins: [terser()]
};