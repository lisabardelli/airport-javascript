'use strict';
class Airport {
    constructor() {
        this._hangar = []
        // this.weather = 'sunny'
    }

    land_at(plane) {
        this._hangar.push(plane);
    }
    take_off_from(plane) {
        this._hangar.pop(plane);
    }
    // weather() 

}