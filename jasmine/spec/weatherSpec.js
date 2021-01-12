describe('Weather', function(){

    var weather;

    beforeEach(function(){
        weather = new Weather()
    });

    describe('can return sunny or stormy', function(){
        it ("can return stormy", function(){
            spyOn(Math, 'random').and.returnValue(1);
            expect(weather.isStormy()).toBeTruthy();
  
        });
        it ("can return sunny", function(){
            spyOn(Math, 'random').and.returnValue(0);
            expect(weather.isStormy()).toBeFalsy();
        });
    });
});