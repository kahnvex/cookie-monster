'use strict';

module.exports = function (config){
    config.set({
      frameworks: ['browserify', 'mocha', 'chai'],
      browsers: ['PhantomJS'],
      plugins : [
        'karma-phantomjs-launcher',
        'karma-mocha-reporter',
        'karma-browserify',
        'karma-mocha',
        'karma-chai'
      ],
      files: [
        'test/test-setup.js',
        'test/*-spec.js'
      ],
      preprocessors: {
        'test/**/*.js': ['browserify']
      },
      reporters : ['mocha'],
      colors: true,
      autoWatch: false,
      singleRun: true,
      logLevel: config.LOG_INFO
  });
};
