const path = require('path');
const webpack = require('webpack');
const custom = require('../webpack.config.js');

module.exports = {
  stories: [ '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: (config) => {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });
    
    return {
      ...config,
      resolve: {
        extensions: custom.resolve.extensions
      },
      module: {
        ...config.module,
        rules: [...config.module.rules, ...custom.module.rules],
      },
    };
  }
}