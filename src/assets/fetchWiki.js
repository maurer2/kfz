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

  const plateKey = entriesAtoZ[1].lists[0][0].data.fmt.bold;
  const plateValue = entriesAtoZ[1].lists[0][0].data.text;

  console.log(plateKey[0]);
  console.log(plateValue);
});
