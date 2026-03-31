import { getPackageJSON, resolvePkgPath, getBaseRollupPlugins } from './utils';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import path from 'path';
const { name, module } = getPackageJSON('react');
const pkgPath = resolvePkgPath(name);
const distPath = resolvePkgPath(name, true);

const basePlugins = getBaseRollupPlugins({
	typescript: {
		tsconfig: path.resolve(__dirname, '../../tsconfig.json'),
		clear: true,
		check: true,
		include: ['packages/**/*'],
		exclude: [/node_modules/]
	}
});
console.log('Current Plugins:', basePlugins);

export default [
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${distPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...basePlugins,
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: distPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			{
				file: `${distPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd'
			},
			{
				file: `${distPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			}
		],
		plugins: basePlugins
	}
];
