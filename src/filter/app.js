// Imports
const ListProvider = require('./list.js')

// Main
// const key = process.argv[2] || 'blk'
const keyListProvider = new ListProvider()

// get total list
const listSize = keyListProvider.getCurrentSize()
console.log(listSize)

// List all with letter V
const testEntries = keyListProvider.getEntriesWithLetter('V')
console.log('matches for V:', testEntries)

// List all with letter B
// const testEntriesB = keyListProvider.getEntriesWithLetter('B')
// console.log('matches for B:', testEntriesB)

// List all possible letters at pos1
const lettersUnique = keyListProvider.getUniqueLetters()
console.log(`unique letters pos1 (${lettersUnique.length}): ${lettersUnique}`);

// Reduce
const reduced = keyListProvider.filterList('V')
console.log(`Reduced 1 (${reduced.length}): ${reduced}`);
