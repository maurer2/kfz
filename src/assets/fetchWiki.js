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
      // wtf_wikipedia doens't return correctly parsed table content
      if (entry.tables) {
        return null;
      }

      // single entry
      if (entry.sentences && entry.sentences.length === 1) {
        const plateKey = entry.sentences[0].fmt.bold[0];
        const plateValue = entry.sentences[0].text;

        return {
          [entry.title]: {
            [plateKey]: plateValue,
          },
        };
      }

      // multiple entries
      if (entry.lists && entry.lists.length > 0) {
        const subentries = entry.lists[0].map((subentry) => {
          const plateKey = subentry.data.fmt.bold;
          const plateValue = subentry.data.text;

          return {
            [plateKey]: plateValue,
          };
        });

        return {
          [entry.title]: subentries,
        };
      }

      return null;
    })
    .filter(entry => entry !== null);

  console.dir(plates);
});
