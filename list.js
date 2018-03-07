//import { LicencePlate } from './licencePlate'
const axios = require('axios');

module.exports = class List {
    constructor () {
        this.countryCode = 'de'
        this.list = {};
    }

    getList() {
        return new Promise((resolve, reject) => {
            if (Object.keys(this.list).length === 0) {
                // ../node_modules/http-server/bin/http-server
                // http://127.0.0.1:8080/de.json
                axios.get('http://127.0.0.1:8080/de.json')
                    .then((response) => {
                        this.list = response.data;
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
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
