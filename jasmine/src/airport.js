'use strict';
class Airport {
    constructor() {
        this._hangar = []
        // this.weather = typeof weather !== 'undefined' ? weather : new Weather();
    }

    land_at(plane, weather) {
        if (weather.isStormy()) {
            throw new Error ('Cannot land because of the stormy weather'); 
         }

        this._hangar.push(plane);
    }
    take_off_from(plane, weather) {
        if (weather.isStormy()) {
           throw new Error ('Cannot take off because of the stormy weather'); 
        }
        this._hangar.pop(plane);
    }
 
        isStormy() {
        return false;
    }

}