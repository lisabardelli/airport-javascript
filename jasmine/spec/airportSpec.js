'use strict';
describe("Airport", function() {
    var plane;
    var airport;
    var weather;
    beforeEach(function(){
        airport = new Airport()
        plane = jasmine.createSpyObj('plane', ['land', 'take_off']);
        weather = jasmine.createSpyObj('weather', ['isStormy']);
    });

    describe("create an instance of Plane", function(){
        it ("create an empty array in the constructor method", function(){
            expect(airport._hangar.length).toBe(0);
        });
    });



    describe('if it is sunny', function(){

        beforeEach(function(){
            weather.isStormy.and.returnValue(false);
        });
        
        it ('allows a plane to land', function(){
            plane.land(airport)
            airport.land_at(plane, weather)
            expect(airport._hangar.length).toBe(1);
            expect(airport._hangar).toEqual([plane]);
        });
        it ("allows a Plane to take off )", function(){
            plane.land(airport)
            airport.land_at(plane, weather)
            expect(airport._hangar.length).toBe(1);
            plane.take_off(airport)
            airport.take_off_from(plane, weather)
            expect(airport._hangar.length).toBe(0);
        });
    });


    describe('if it is stormy', function(){
        beforeEach(function(){
            weather.isStormy.and.returnValue(true);
        });
        it ('does not allow a plane to land', function(){
            expect(function(){airport.land_at(plane, weather);}).toThrowError('Cannot land because of the stormy weather');
        });
        it ("does not allow a Plane to take off )", function(){
            expect(function(){airport.take_off_from(plane, weather);}).toThrowError('Cannot take off because of the stormy weather');
        });

    });

});