const licenceJSON = require('./data/de.json')
const LicencePlate = require('./licencePlate.js')

module.exports = class List {
    constructor() {
        this.entries = Object.keys(licenceJSON).map((key) => {
            const value = licenceJSON[key]
            const entry = new LicencePlate(key, value)

            return entry
        })
    }

    getTotalSize() {
        return this.entries.length
    }

    getEntriesWithLetter(letter) {
        const filteredEntries = this.entries.filter(entry => entry.startsWith(letter))

        return filteredEntries
    }

    getUniqueLetters() {
        const lettersSingle = this.entries.map(entry => entry.getFirstLetter())
        const lettersSingleSorted = lettersSingle.slice().sort() // alphabetically

        // true for first occurence in array // indexof returns first index of element found
        const lettersUnique = lettersSingleSorted.filter((value, index, array) => array.indexOf(value) === index)

        return lettersUnique
    }

    resetList() {
        this.list = require('./data/de.json')
        this.position = 0
    }

    reduceListByOneLevel(letter) {
        const matchingEntries = this.getEntriesWithStartingLetter(letter)

        // poor
        console.log(`size before ${this.getNumberOfEntries()}`)
        this.getList(true).forEach(element => {
            const isMatch = (matchingEntries.indexOf(element) != -1) ? true : false

            if (!isMatch) {
                delete this.list[element]

                return
            }
        })
        console.log(`size after ${this.getNumberOfEntries()}`)
        this.position++

        return matchingEntries
    }
}

module.exports.List