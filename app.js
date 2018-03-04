// Imports
const ListProvider = require('./list.js');

// Main
const key = process.argv[2] || 'blk';
const keyListProvider = new ListProvider('de');
const keyList = keyListProvider.getList().then((list) => {
    //console.log('list', list);
})

// node app.js plate=b
console.log('kfz app', key);

keyListProvider.getEntriesWithLetter('B').then((matches) => {
    console.log(matches);
});