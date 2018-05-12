const wikiParser = require('wtf_wikipedia');

const url = 'Liste_der_deutschen_Kfz-Kennzeichen,_die_nicht_mehr_ausgegeben_werden';

wikiParser.fetch(url, 'de').then((page) => {
  const sections = page.sections();

  // filter section for alphabet
  const indexA = sections.findIndex(section => section.data.title === 'A');
  const indexZ = sections.findIndex(section => section.data.title === 'Z');
  const entriesAtoZ = sections
    .map(section => section.data)
    .filter((_, index) => index >= indexA && index <= indexZ);

  // combine
  const plates = entriesAtoZ
    .map((entry) => {
      let plate;

      // some entries are inside tables, some are inside lists
      if (entry.tables) {
        const plateKey = entry.tables[0][0]['col-0'].data.text;
        const plateValue = entry.tables[0][0]['col-0'].data.text;

        plate = {
          [plateKey]: plateValue,
        };
      }

      if (entry.lists) {
        const plateKey = entry.lists[0][0].data.fmt.bold;
        const plateValue = entry.lists[0][0].data.text;

        plate = {
          [plateKey]: plateValue,
        };
      }

      return plate;
    });
    /*
    .filter((entry) => {
      const plateKey = Object.keys(entry);
      return true;
    });
    */

  console.log(plates);
});
