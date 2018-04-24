const licenceJSON = require('./data/de.json')

module.exports = class List {
    constructor () {
        this.countryCode = 'de'
        this.list = licenceJSON
        this.position = 0
    }

    getList(asArray = true) {
        if (asArray) {
            return Object.keys(this.list)
        }

        return this.list
    }

    setList(list) {
        this.list = list
    }

    getPosition() {
        return this.position
    }

    setPosition(position) {
        this.position = position
    }

    getNumberOfEntries() {
        return this.getList(true).length
    }

    getEntriesWithStartingLetter(letter) {
        const filteredList = this.getList(true).filter(value => value.charAt(0) === letter.charAt(0))

        return filteredList
    }

    getUniqueLetters() {
        const lettersSingle = this.getList(true).map(value => value.charAt(0))
        // true for first occurence in array // indexof return first index of element found
        const lettersUnique = lettersSingle.filter((value, index, array) => array.indexOf(value) === index)

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
