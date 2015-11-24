module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      'test/global.js',
      'test/**/*Spec.js'
    ],
    exclude: [
      '**/*.sw?'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify', 'env']
    },
    browserify: {
      debug: true,
      transform: ['plastiq-jsxify'],
      extensions: ['.jsx']
    },
    envPreprocessor: [
      'DEMONSTRATOR_API_KEY',
      'DEMONSTRATOR_USER',
      'DEMONSTRATOR_APP'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
