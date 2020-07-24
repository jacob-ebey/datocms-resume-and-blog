require('dotenv').config()
// const { container: { ModuleFederationPlugin } } = require('webpack')

module.exports = {
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  // webpack: (config) => {
  //   config.plugins.push(new ModuleFederationPlugin({
  //     name: 'resume_and_blog',
  //     filename: 'remote-entry.js',
  //     library: { type: 'var', name: 'resume_and_blog' },
  //     shared: {
  //       'react': {
  //         singleton: true,
  //       }
  //     }
  //   }))

  //   return config
  // },
}
