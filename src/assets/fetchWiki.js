const wikiParser = require("wtf_wikipedia");
const fs = require("mz/fs");

const url = "Liste_der_deutschen_Kfz-Kennzeichen,_die_nicht_mehr_ausgegeben_werden";

wikiParser.fetch(url, "de").then(page => {
  const sections = page.sections();

  // filter section for alphabet only content
  const indexA = sections.findIndex(section => section.data.title === "A");
  const indexZ = sections.findIndex(section => section.data.title === "Z");
  const entriesAtoZ = sections
    .map(section => section.data)
    .filter((_, index) => index >= indexA && index <= indexZ);

  // combine
  const platesArray = entriesAtoZ.reduce((accumulator, entry) => {
    let newAccumulator = accumulator;

    // wtf_wikipedia doens't correctly parse table content
    if (entry.tables) {
      return newAccumulator;
    }

    // single entry
    if (entry.sentences && entry.sentences.length === 1) {
      const plateKey = entry.sentences[0].fmt.bold[0];
      const plateValue = entry.sentences[0].text.replace(`: ${plateKey} `, "");

      const newEntry = [{ [plateKey]: plateValue }];

      newAccumulator = newAccumulator.concat(newEntry);
    }

    // multiple entries
    if (entry.lists && entry.lists.length > 0) {
      const subentries = entry.lists[0].map(subentry => {
        const plateKey = subentry.data.fmt.bold;
        const plateValue = subentry.data.text.replace(`${plateKey} `, "");

        return {
          [plateKey]: plateValue
        };
      });

      newAccumulator = newAccumulator.concat(subentries);
    }

    return newAccumulator;
  }, []);

  // remove null values
  platesArray.filter(entry => entry !== null);

  // create single object
  const platesObject = Object.assign({}, ...platesArray);

  // write to file
  fs.writeFile("de-outdated.json", JSON.stringify(platesObject, null, 2)).then(
    console.log("wrote file")
  );

  console.dir(platesObject);
});
