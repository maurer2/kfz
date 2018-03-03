//import { LicencePlate } from './licencePlate'

module.exports = class List {
    constructor ({ countryCode = 'de' }) {
        this.countryCode = countryCode;
    }

    getListOfLicencePlates() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const dummyList = {
                    'B': 'Berlin',
                    'M': 'München',
                    'K': 'Köln',
                    'H': 'Hannover',
                    'HH': 'Hamburg',
                    'BLK': 'Burgenlandkreis',
                }
                resolve(dummyList);
            }, 100);
        });
    }

    getNumberOfPlates() {
        return this.getListOfLicencePlates().then((list) => {
            return Object.keys(list).length;
        }); 
    }
}
