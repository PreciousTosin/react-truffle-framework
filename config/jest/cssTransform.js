// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/tutorial-webpack.html

module.exports = {
  process() {
    return 'module.exports = {};';
  },
  getCacheKey(fileData, filename) { /* eslint no-unused-vars: 'off' */
    // The output is always the same.
    return 'cssTransform';
  },
};
