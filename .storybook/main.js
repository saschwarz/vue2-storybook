const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // https://github.com/storybookjs/storybook/issues/11989
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '../src')
    }
    return config
  }
}
