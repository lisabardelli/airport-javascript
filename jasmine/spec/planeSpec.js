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
  
  describe ('allows a plane to land', function(){
    it ('lands if it is not landed', function(){
      plane.isLanded = false
      plane.land
      expect(plane.isLanded).toBe(true)
    });
  })
});
