import Module1 from './../Module1';

describe('Module1', function() {
  var module1;
  beforeEach(function() {
    module1 = new Module1();
    console.log(module1);
  });

  it('shold have "say" method', function() {
    expect(module1.say).to.exist;
  });
});