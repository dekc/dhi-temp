module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'DhiComponents',
      externals: {
        react: 'React'
      }
    }
  }
}
