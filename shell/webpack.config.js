const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shell',

  exposes: {
    './Component': './src/app/app.component.ts',
  },

  remotes: {
    ui_library: "ui_library@http://localhost:4201/remoteEntry.js",
    web_components: "web_components@http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});