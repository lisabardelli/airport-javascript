'use strict';
class Plane {

    constructor() {
        this.landed = false;
    }

    land(airport) {
        this.landed = true;
        airport.land_at(this)
    }

    take_off(airport) {
        this.landed = false;
        airport.take_off_from(this)
    }
}
