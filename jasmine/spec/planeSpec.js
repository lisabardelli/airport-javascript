'use strict';
describe ('Plane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['land_at', 'take_off_from']);
  });

  describe ('knows whether it is', function() {
    it('landed', function() {
      expect(plane.landed).toBe(false);
    });
  });
  
  describe ('allows a plane to land', function(){
    it ('lands if it is not landed', function(){
      plane.land(airport)
      expect(plane.landed).toBe(true)
      expect(airport.land_at).toHaveBeenCalledWith(plane);
    });
  });

  describe('allow a plane to take_off', function(){
    it("takes_off if is not landed", function(){
      plane.land(airport)
      expect(plane.landed).toBe(true)
      plane.take_off(airport)
      expect(plane.landed).toBe(false)
      expect(airport.take_off_from).toHaveBeenCalledWith(plane);
    });
  });
});
