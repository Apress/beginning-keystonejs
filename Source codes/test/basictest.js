var expect = require('expect.js')

describe('Test simple assert', function(){
   it('should return true for 2=2',function(){
      expect(2).to.eql(2);
   }) ;
});