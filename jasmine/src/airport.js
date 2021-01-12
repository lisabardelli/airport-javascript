'use strict';
class Airport {
    constructor() {
        this._hangar = []
    }

    land_at(plane) {
        this._hangar.push(plane);
    }
    take_off_from(plane) {
        this._hangar.pop(plane);
    }

}