class Plane {

    constructor() {
        this.landed = true;
    }

    isLanded() {
        return this.landed === true;
    }

    land() {
        this.landed = true;
    }
}
