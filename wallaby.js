var wallabyWebpack = require('wallaby-webpack');
var babel = require('babel-core');
var webpack = require('webpack');
var path = require('path');

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    // webpack options

    externals: {
      // Use external version of React instead of rebuilding it
      "react": "React"
    },
    resolve: {
      modulesDirectories: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'bower_components')],
      extensions: ["", ".js", ".jsx"]
    }
  });

  return {
    files: [
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      {pattern: 'node_modules/mocha/mocha.js', instrument: false},
      {pattern: 'test/test_helper.js', instrument: false},
      {pattern: 'src/**/*.js*', load: false}
    ],

    tests: [
      {pattern: 'test/**/*_test.js*', load: false}
    ],

    compilers: {
      'src/**/*.js*': wallaby.compilers.babel({
        babel: babel,
        // other babel options
        stage: 0    // https://babeljs.io/docs/usage/experimental/
      }),

      'test/spec/**/*.js': wallaby.compilers.babel({
        babel: babel,
        // other babel options
        stage: 0    // https://babeljs.io/docs/usage/experimental/
      })
    },

    postprocessor: webpackPostprocessor,
    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};