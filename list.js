//import { LicencePlate } from './licencePlate'
const axios = require('axios');

module.exports = class List {
    constructor () {
        this.countryCode = 'de'
        this.list = {};
    }

    getList() {
        // ../node_modules/http-server/bin/http-server
        // http://127.0.0.1:8080/de.json
        axios.get('http://127.0.0.1:8080/de.json')
          .then((response) => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });


        return new Promise((resolve, reject) => {
            // Faux Ajax
            if (Object.keys(this.list).length === 0) {
                setTimeout(() => {
                    const dummyList = {
                        'B': 'Berlin',
                        'BIT': 'Bitterfeld',
                        'M': 'München',
                        'MSH': 'Mannsfeld-Südharz',
                        'K': 'Köln',
                        'KA': 'Karlsruhe',
                        'H': 'Hannover',
                        'HH': 'Hamburg',
                        'BLK': 'Burgenlandkreis',
                    }
                    this.list = dummyList;
                    resolve(dummyList);
                }, 100);
            } else {
                resolve(this.list);
            }
        });
    }

    getNumberOfEntries() {
        return this.getList().then((list) => {
            return Object.keys(list).length;
        });
    }

    getEntriesWithLetter(letterString) {
        return new Promise((resolve, reject) => {
            const letter = letterString.charAt(0);

            this.getList().then((list) => {
                const listArray = Object.keys(list);
                const filteredList = listArray.filter((value) => {
                    return value.charAt(0) === letter;
                });

                resolve(filteredList);
            });
        });
    }
}
