module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [/node_modules\/@chakra-ui\/react/],
      },
    ],
  },
};
