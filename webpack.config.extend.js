const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    // root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resoluve(__dirname)
    }
  }
};
