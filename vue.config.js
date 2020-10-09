const production = process.env.NODE_ENV === 'production';

module.exports = {
  configureWebpack: (config) => {
    if (!production) {
      const temp = { ...config };
      temp.output.devtoolModuleFilenameTemplate = (info) => {
        const resPath = info.resourcePath;
        if ((/\.vue$/.test(resPath) && !/type=script/.test(info.identifier)) || /node_modules/.test(resPath)) {
          return `webpack:///${resPath}?${info.hash}`;
        }
        return `webpack:///${resPath.replace('./src', 'my-code/src')}`;
      };
      return temp;
    }
    return config;
  },
};
