'use strict';
describe("Airport", function() {
    var plane;
    var airport;
    beforeEach(function(){
        airport = new Airport()
        plane = jasmine.createSpyObj('plane', ['land', 'take_off']);

    });

    describe("create an instance of Plane", function(){
        it ("create an empty array in the constructor method", function(){
            expect(airport._hangar.length).toBe(0);
        });
    });

    describe('Plane can land', function(){
        it ('allows a plane to land', function(){
            plane.land(airport)
            airport.land_at(plane)
            expect(airport._hangar.length).toBe(1);
            expect(airport._hangar).toEqual([plane]);
        });
    });

    describe('Plane can take_off', function(){
        it ("allows a Plane to take off )", function(){
            plane.land(airport)
            airport.land_at(plane)
            expect(airport._hangar.length).toBe(1);
            plane.take_off(airport)
            airport.take_off_from(plane)
            expect(airport._hangar.length).toBe(0);
        });
    });
});