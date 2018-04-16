//import { LicencePlate } from './licencePlate'
const licenceJSON = require('./data/de.json');
//const axios = require('axios');

module.exports = class List {
    constructor () {
        this.countryCode = 'de'
        this.list = {};
    }

    getList() {
        return new Promise((resolve, reject) => {
            if (Object.keys(this.list).length === 0) {
                resolve(licenceJSON);
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

    getExtractedLetters(nestedLetters = {}) {
        const letterList = Object.keys(nestedLetters);

        return letterList;
    }

    getUniqueLetters(letterList = []) {
        const letters = letterList.map((value) => value.charAt(0));
        const uniqueLetters = letters.filter((value, index, array) => array.indexOf(value) === index);

        return uniqueLetters;
    }
}
