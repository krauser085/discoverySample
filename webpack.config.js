const path = require('path');

module.exports = {
  entry: './webpack-buffer.js',
  output: {
    filename: 'app-ie.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            include: path.join(__dirname, 'public/js'),
            exclude: /(node_modules)|(dist)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }
    ]
}
};