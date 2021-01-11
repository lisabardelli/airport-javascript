describe ('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe ('knows whether it is', function() {
    it('landed', function() {
      expect(plane.isLanded).toBe(true);
    });
  });
  
});
