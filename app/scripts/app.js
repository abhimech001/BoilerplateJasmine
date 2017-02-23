'use strict';

console.log('app.js loaded');

var App = App || {};

App.version = '{ VERSION }';

require.config({
  baseUrl: '/',
  urlArgs: App.version,
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'underscore': 'bower_components/underscore/underscore',
    'backbone': 'bower_components/backbone/backbone'
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
    }

});

define(['scripts/routes/router'], function(Router) {

  /**
   * use Handlebars like this:
   * var html = FistWallet.templates.home({ some: data })
   * $("body").html(html);
   */
  new Router();
  Backbone.history.start();

});

