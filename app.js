// Imports
const ListProvider = require('./list.js');

// Main
//const key = process.argv[2] || 'blk';
const keyListProvider = new ListProvider('de');
//const keyList = keyListProvider.getList().then((list) => {
//    //console.log('list', list);
//})

// List all with letter B
keyListProvider.getEntriesWithLetter('V').then((matches) => {
    console.log('matches for V:', matches);
});

// List all with letter B
keyListProvider.getEntriesWithLetter('Z').then((matches) => {
    console.log('matches for Z:', matches);
});

// List all possible letters at pos1
keyListProvider.getList().then((list) => {
    const lettersArray = keyListProvider.getExtractedLetters(list)
    const lettersUnique = keyListProvider.getUniqueLetters(lettersArray);

    console.log(`unique letters pos1 (${lettersUnique.length}): ${lettersUnique}`);
});