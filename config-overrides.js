const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),

  addWebpackAlias({
    '@': require('path').resolve(__dirname, 'src')
  }),

  config => {
    config.output.publicPath = './';
    return config;
  }
);
