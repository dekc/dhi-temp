module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'DHIReactComponents',
      externals: {
        react: 'React',
      },
    },
  },
};
