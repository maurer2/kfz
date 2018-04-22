const licenceJSON = require('./data/de.json')
//const axios = require('axios')

module.exports = class List {
    constructor () {
        this.countryCode = 'de'
        this.list = licenceJSON
    }

    getList() {
        return new Promise((resolve, reject) => {
            resolve(this.list)
            /*
            if (Object.keys(this.list).length === 0) {
                resolve(licenceJSON)
            } else {
                resolve(this.list)
            }
            */
        })
    }

    getNumberOfEntries() {
        return this.getList().then((list) => {
            return Object.keys(list).length
        })
    }

    getEntriesWithLetter(letterString) {
        return new Promise((resolve, reject) => {
            const letter = letterString.charAt(0)

            this.getList().then((list) => {
                const listArray = Object.keys(list)
                const filteredList = listArray.filter(value => value.charAt(0) === letter)

                resolve(filteredList)
            })
        })
    }

    getExtractedLetters(nestedLetters = {}) {
        const letterList = Object.keys(nestedLetters)

        return letterList
    }

    getUniqueLetters(letterList = [], position = 0) {
        const lettersSingle = letterList.map((value) => value.charAt(position))
        // true for first occurence in array // indexof return first index of element found
        const lettersUnique= lettersSingle.filter((value, index, array) => array.indexOf(value) === index)

        return lettersUnique
    }

}
