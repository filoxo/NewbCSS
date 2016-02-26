/**
 * Created by cfiloteo on 12/22/15.
 */
module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist/js',
		filename: 'index.js'
	},
	devServer: {
		inline: true
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};