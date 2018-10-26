const webpackCfg = require('./webpack.config');

function conifigFunc(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'test/**/*.test.js': ['webpack'],
    },
    plugins: [
      'karma-webpack',
      'karma-html-reporter',
      'karma-jasmine',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
    ],
    reporters: ['progress', 'html'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chromium'],
    singleRun: false,
    concurrency: Infinity,
    webpack: webpackCfg,
    htmlReporter: {
      outputDir: 'karma_html',
      templatePath: null,
      focusOnFailures: true,
      namedFiles: false,
      pageTitle: null,
      urlFriendlyName: false,
      reportName: 'report-summary-filename',
    },
  });
}

module.exports = conifigFunc;
