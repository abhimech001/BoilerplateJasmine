var tests = [];
for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    
    baseUrl: '/base/app/scripts',

    paths: {
     'jquery': '../bower_components/jquery/dist/jquery',
     'underscore': '../bower_components/underscore/underscore',
     'backbone': '../bower_components/backbone/backbone'
    },
    shim: {
      backbone:{ 
         deps:
            [
             'underscore', 
             'jquery'
            ]
         },
         exports: 'Backbone'
      },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

