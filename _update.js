const fs = require('fs');

const path = __dirname + '/json_folder'; // path to json folder
const buildName = (oldValue, id) => 'Your NFT Name #' + id;
const buildDescription = (oldValue, id) => 'Your NFT Descriptions';
const buildImageUri = (oldValue, id) => 'ipfs://__CID__/' + id + '.gif'; // put your images format! MF use gif instead.
const getTokenId = (filePath) => {
  return filePath.match(/(\d+)\.json/)[1];
}

fs.readdirSync(path).forEach((fileName) => {
  const filePath = path + '/' + fileName;
  const stat = fs.statSync(filePath);
  if (! stat.isFile()) {
    return;
  }
  if (fileName.endsWith('.json')) {
    const jsonContent = JSON.parse(fs.readFileSync(filePath,'utf8'));
    const tokenId = getTokenId(fileName);

    jsonContent.name = buildName(jsonContent.name, tokenId);
    jsonContent.description = buildDescription(jsonContent.description, tokenId);
    jsonContent.image = buildImageUri(jsonContent.imageUri, tokenId);
    const attributes = [];
    jsonContent.attributes.forEach((attribute) => {
      console.log(attribute);

// REPLACING TRAITS PROPERTIES

      if (attribute.trait_type === 'Props1') {
        attribute.trait_type = 'Background';
      }
      if (attribute.trait_type === 'Props2') {
        attribute.trait_type = 'Skin';
      }
      
// REPLACING TRAITS VALUE

      if (attribute.value === 'trait1') {
        attribute.value = 'Green';
      }
      if (attribute.value === 'trait2') {
        attribute.value = 'White Fur';
      }
      
// REMOVING PROPERTIES
      if (attribute.trait_type !== 'trait_to_remove') { // per trait_type
      if (attribute.value !== 'value_to_remove') { // per value
      attributes.push(attribute);
    }};
  });

// ADING NEW TRAITS: please remove '//' on the left to use

//    const newAttribute = { trait_type: 'New trait', value: 'new value' };
//    attributes.push(newAttribute);

//==============THANKS FO USING THIS CODE==============//
  jsonContent.attributes = attributes;
  fs.writeFileSync(filePath, JSON.stringify(jsonContent,null, 2));
  console.log(fileName + ' has been updated..');

  }
});
