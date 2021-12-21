const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin =
   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const port = process.env.PORT || 3000

module.exports = (env) => {
   return {
      mode: env.prod === true ? 'production' : 'development',
      entry: './src/index.js',
      output: {
         filename: 'bundle.[hash].js',
         path: path.resolve(__dirname, 'dist'),
      },
      module: {
         rules: [
            {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: {
                  loader: 'babel-loader',
               },
            },
         ],
      },
      plugins: [
         new HtmlWebpackPlugin({
            template: 'public/index.html',
         }),
         new BundleAnalyzerPlugin(),
      ],
      devServer: {
         static: {
            directory: path.join(__dirname, 'public'),
         },
         host: 'localhost',
         port: port,
         open: true,
         historyApiFallback: true,
      },
      optimization: {
         splitChunks: {
            cacheGroups: {
               vendor: {
                  test: /[\\/]node_modules[\\/](react|react-dom|lodash-es|lottie-web|date-fns)[\\/]/,
                  name: 'vendor',
                  chunks: 'all',
                  filename: `[name].[chunkhash].js`,
               },
            },
         },
      },
   }
}
