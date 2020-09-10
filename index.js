module.exports = function(config, options) {
  return {
    name: 'snowpack-plugin-codegen',
    resolve: {
      input: ['.codegen'],
      output: ['.js']
    },
    async load({filePath}) {
      return require(filePath)();
    }
  };
};
