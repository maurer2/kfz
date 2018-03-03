// Imports
const ListProvider = require('./list.js');
const parameters = process.argv;

// Main
const key = parameters[2] || blk;
const keyListProvider = new ListProvider('de');
const keyList = keyListProvider.getListOfLicencePlates().then((list) => {
    //console.log('list', list);
})

keyListProvider.getNumberOfPlates().then((size) => {
    console.log(size);
});

//  node app.js plate=b
console.log('kfz', key);
