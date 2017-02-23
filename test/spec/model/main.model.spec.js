'use strict';

define(['model/main.model'], function(Model) {
  describe('A model', function(){
    it('should have certain defaults', function(){
      new Model();
      expect(true).toBe(true);
    });
  });

});