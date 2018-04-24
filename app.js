// Imports
const ListProvider = require('./list.js')

// Main
//const key = process.argv[2] || 'blk'
const keyListProvider = new ListProvider('de')
//const keyList = keyListProvider.getList().then((list) => {
//    //console.log('list', list)
//})

// get total list
//const list = keyListProvider.getList()

// List all with letter B
const testEntry = keyListProvider.getEntriesWithStartingLetter('V')
console.log('matches for V:', testEntry)

// List all with letter B
const testEntry2 = keyListProvider.getEntriesWithStartingLetter('Z')
console.log('matches for Z:', testEntry2)

// List all possible letters at pos1
const lettersUnique = keyListProvider.getUniqueLetters()
console.log(`unique letters pos1 (${lettersUnique.length}): ${lettersUnique}`);

// Reduce
const reduced = keyListProvider.reduceListByOneLevel('V')
console.log(`test (${reduced.length}): ${reduced}`);
