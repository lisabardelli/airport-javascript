'use strict';
class Airport {
    constructor(weather) {
        this._hangar = []

    }

    land_at(plane) {
        this._hangar.push(plane);
    }
    take_off_from(plane) {
        if (this.isStormy()) {
           throw new Error ('Cannot take off because of the stormy weather'); 
        }
        this._hangar.pop(plane);
    }
 
        isStormy() {
        return false;
    }

}