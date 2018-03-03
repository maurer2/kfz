class LicencePlate {
    constructor ({ plate, country = 'de' }) {
        this.plate = plate;
        this.country = country;
        this.length = plate.length;

        if (!this.lengt || this.length > 2) {
            throw new Error('LicencePlate length error'); 
        } 
    }

    getPlate() {
        return this.plate;
    }

    isSingleLetter() {
        return this.length === 1;
    }

    isDoubleLetter() {
        return this.length === 2;
    }

    isTrippleLetter() {
        return this.length === 3;
    }
}

module.exports.LicencePlate