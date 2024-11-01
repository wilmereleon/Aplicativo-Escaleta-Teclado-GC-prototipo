const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "path": require.resolve("path-browserify")
    }
  }
};