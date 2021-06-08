module.exports = {
  features: {
    postcss: false,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', "@storybook/addon-links"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
