const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  devServer: {
    port: 4200,
    hot: isDev,
    open: true,
    contentBase: path.join(__dirname, 'dist'),
  },
  resolve: { extensions: ['.js', '.ts', '.json', '.mjs'] },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../../src/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
    ],
  },
};
