import licenceJSON from '../assets/de.json';
import Plate from './Plate';

class List {
  constructor() {
    this.entriesAll = Object.keys(licenceJSON).map((key) => {
      const entry = new Plate(key, licenceJSON[key]);

      return entry;
    });

    this.entries = this.entriesAll.slice();
    this.position = 0;
  }

  getCurrentSize() {
    return this.entries.length;
  }

  getEntries() {
    return this.entries;
  }

  getEntriesWithLetter(letter) {
    const filteredEntries = this.entries.filter(entry => entry.startsWith(letter));

    return filteredEntries;
  }

  getUniqueLetters() {
    const lettersSingle = this.entries
      .map(entry => entry.getLetterAtPosition(this.position));
    const lettersSingleSorted = lettersSingle.slice().sort(); // alphabetically

    // true for first occurence in array // indexof returns first index of element found
    const lettersUnique = lettersSingleSorted
      .filter((value, index, array) => array.indexOf(value) === index);

    return lettersUnique;
  }

  filterList(letter) {
    this.entries = this.entries
      .filter(entry => entry.hasLetterAtPosition(this.position, letter));
    this.position = this.position + 1;

    return this.entries;
  }

  resetList() {
    this.entries = this.entriesAll;
    this.position = 0;
  }
}

export default List;
