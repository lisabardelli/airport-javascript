describe("Airport", function() {

    beforeEach(function(){
        airport = new Airport()
    });

    describe("create an instance of Plane", function(){
        it ("create an empty array in the constructor method", function(){
            expect(airport.hangar.length).toBe(0);
        });
    });

    describe('Plane can land', function(){
        it ('allows a plane to land', function(){
            airport.land('plane')
            expect(airport.hangar.length).toBe(1);
        });
    });
});