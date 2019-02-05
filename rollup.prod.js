import less from 'rollup-plugin-less';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import html from 'rollup-plugin-html';

export default [
	{
		input: 'src/js/helper.module.js',
		external: [
			'angular'
		],
		output: {
			name: 'angular-fontselect',
			file: 'dist/angular-fontselect.js',
			format: 'cjs',
		},
		plugins: [
			resolve(),
    	commonjs(),
			less({
			  output: 'dist/angular-fontselect.css',
				exclude: ''
			}),
			html({
				htmlMinifierOptions: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          conservativeCollapse: true,
          minifyJS: true
        }
			})
		]
	}
];
