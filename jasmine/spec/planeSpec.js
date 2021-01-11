describe ('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe ('knows whether it is', function() {
    it('landed', function() {
      expect(plane.isLanded()).toBe(true);
    });
  });

// need to do takeoff method first to set landed to false
  describe ('allows a plane to land', function(){
    it ('lands if it is not landed', function(){
      plane.take_off()
      plane.land()
      expect(plane.isLanded()).toBe(true)
    });
  })
});
