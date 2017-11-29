module.exports = {
    entry: './code.ts',
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    },
    output: {
      filename: 'distribution/bundle.js'
    }
  };