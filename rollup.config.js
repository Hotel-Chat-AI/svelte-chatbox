import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, format: 'es' },
		{
			file: pkg.main,
			format: 'umd',
			name,
			globals: {
				'svelte': 'svelte',
				'svelte/internal/client': 'svelteInternalClient',
				'svelte/internal/disclose-version': 'svelteInternalDiscloseVersion'
			}
		}
	],
	plugins: [
		svelte(),
		resolve({
			browser: true,
			dedupe: ['svelte'],
			exportConditions: ['svelte', 'module', 'main']
		})
	],
	// Treat Svelte and its internal modules as external
	external: id => /^svelte(\/|$)/.test(id)
};
