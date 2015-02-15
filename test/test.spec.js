import Module1 from './../Module1';

describe('Module1', function() {
  var module1;
  beforeEach(function() {
    module1 = new Module1();
  });

  it('should have "say" method', function() {
    expect(module1.say).to.exist;
  });
  it('should have "inherited" method', function() {
    expect(module1.inheritedMethod).to.exist;
  });
});