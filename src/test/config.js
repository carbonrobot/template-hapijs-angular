var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({

	baseUrl: '/base/src',

    // paths: maps ids with paths (no extension)
    paths: {
        'hapi': ['index']
    },

    // shim: makes external libraries compatible with requirejs (AMD)
    shim: {
        
    },

    // load tests using require.js
    deps: tests,

    // after require.js loads tests, start karma
    callback: window.__karma__.start
});
