import licenceJSON from "../assets/de.json";
import licenceOldJSON from "../assets/de-outdated.json";
import Plate from "./Plate";

interface ListType {
  entries: any[];
  entriesRestore: any[];
  position: number;

  getCurrentSize(): number;
  getEntries(): any;
  getEntriesWithLetter(letter: string): any;
  getUniqueLetters(): any;
  filterList(letter: string): any;
  resetList(): void;
  activeKeys: string[];
}

class List implements ListType {
  entries: Plate[];
  entriesRestore: Plate[];
  position: number;
  activeKeys: string[];
  entriesAll: Readonly<Plate[]>;

  constructor() {
    const entriesCurrent = Object.keys(licenceJSON).map(key => {
      const entry = new Plate(key, licenceJSON[key], true);
      return entry;
    });

    const entriesOutdated = Object.keys(licenceOldJSON).map(key => {
      const entry = new Plate(key, licenceOldJSON[key], false);
      return entry;
    });

    // contains duplicates
    const entriesAll = entriesCurrent.concat(entriesOutdated);

    // sorting
    const entriesSorted = entriesAll.slice().sort((current, next) => {
      const currentKey = (current as any).key;
      const nextKey = (next as any).key;

      return currentKey.localeCompare(nextKey);
    });

    // remove duplicates
    /*
    this.entries = entriesSorted.filter((value, index) => {
      const entryKey = value.key;

      const firstIndex = entriesAll.findIndex((entry) => {
        const test = entry.key === entryKey;

        return test;
      });

      return index === firstIndex;
    });
    */

    this.entries = [...entriesSorted];
    this.entriesRestore = [...entriesSorted];
    this.entriesAll = Object.freeze([...entriesSorted]);
    this.position = 0;
    this.activeKeys = this.entries.map(entry => entry.key);
  }

  getCurrentSize() {
    return this.entries.length;
  }

  getEntries() {
    return this.entries;
  }

  getEntriesWithLetter(letter: string) {
    const filteredEntries = this.entries.filter(entry => entry.startsWith(letter));

    return filteredEntries;
  }

  getUniqueLetters() {
    const lettersSingle = this.entries.map(entry => entry.getLetterAtPosition(this.position));
    const lettersSingleSorted = lettersSingle.slice().sort(); // alphabetically

    // true for first occurrence in array // indexOf returns first index of element found
    const lettersUnique = lettersSingleSorted.filter(
      (value, index, array) => array.indexOf(value) === index
    );

    return lettersUnique;
  }

  filterList(letter: string) {
    const entriesFiltered = this.entries.filter(entry =>
      entry.hasLetterAtPosition(this.position, letter)
    );

    this.entries = entriesFiltered;
    this.position = this.position + 1;

    const keysOfFilteredEntries = entriesFiltered.map(entry => entry.key);
    this.activeKeys = keysOfFilteredEntries;

    return this.entries;
  }

  resetList() {
    this.entries = [...this.entriesRestore];
    this.position = 0;
    this.activeKeys = this.entries.map(entry => entry.key);
  }
}

export default List;
