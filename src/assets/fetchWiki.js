const wtf = require('wtf_wikipedia');

wtf.fetch('Liste_der_deutschen_Kfz-Kennzeichen,_die_nicht_mehr_ausgegeben_werden', 'de').then((doc) => {
  const sections = doc.sections();

  console.log(sections);
});
