// @ts-check

const { defineConfig } = require('@rspack/cli');
const path = require('path');

const config = defineConfig({
  entry: {
    index: './Scripts/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
        type: 'css',
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        resolve: {
          extensions: ['.ts', '.js'],
        },
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot/dist'),
    filename: '[name].js', // Use the entry name as the output filename
    chunkFilename: '[name].chunk.js', // Set the filename for non-entry chunks
  },
});

module.exports = config;
