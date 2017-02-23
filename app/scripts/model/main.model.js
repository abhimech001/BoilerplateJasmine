'use strict';

console.log('model/main.js loaded');

define(['backbone'], function(Backbone) {
  return Backbone.Model.extend({
    initialize: function() {
      console.log('main model initialized');
    }
  });
});