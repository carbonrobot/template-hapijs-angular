// Karma configuration
// Generated on Thu Aug 27 2015 08:23:04 GMT-0500 (Central Daylight Time)
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
        //'node_modules/jasmine-core/lib/*.js',
        //'node_modules/karma-jasmine/lib/*.js',
        'node_modules/requirejs/require.js',
        'node_modules/karma-requirejs/lib/adapter.js',

        // load the require.js shim file so that we can use require.js in our tests
        'src/test/config.js',

        // load the paths into karma, but exclude everything so that require.js can load them
        { pattern: 'src/**/*.js', included: false }
    ],

    // list of files to exclude
    exclude: [
        // make sure we don't start the server
        //'src/index.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'html'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
