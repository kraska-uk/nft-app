const fs = require('fs');
const { parse } = require('csv-parse/sync');



const image = {
  'logo-2783x1847.jpg': 'ipfs://QmQTvK2HXrHWPyGrDUpzmSSgADqLTHRJVpaTPZUB1aDibc',
  'KRASKA_sweater_01_4000x4000.jpg': 'ipfs://QmSnx1YJB2JZbdaWBZvB3rFKDy84VveLJeokg2WwhnRCkS',
  'KRASKA_sweater_02_4000x4000.jpg': 'ipfs://QmRDhebJPCXk1ik6fWDhM1XX8uKEHDgRP67zuK11gJkmx8',
  'KRASKA_kardigan_03_4000x4000.jpg': 'ipfs://QmW1jnjLDD87FJ31S7fGexdQpDmV81Eu41wuRnhrLqZSBm',
  'KRASKA_kardigan_04_4000x4000.jpg': 'ipfs://QmUcBBg3ZTcLooFY49VW5h8yi8p6REXJKaZVbDWuNLreNS',
};
const animation_url = {
  'KRASKA_sweater_01_4000x4000.mp4': 'ipfs://QmdbvZeSp9GbVwNjWmn4Tu2pvB8BWmVhm42EbTGQWrNFtm',
  'KRASKA_sweater_02_4000x4000.mp4': 'ipfs://QmVudi5zqo27MmwYaX24Zf6obqxU8gST4LphH9xkmTLdSZ',
  'KRASKA_kardigan_03_4000x4000.mp4': 'ipfs://QmUnZvcXDpCPyRW8rfMP4BLDhM5HQh26qxFsvyYsAwss3P',
  'KRASKA_kardigan_04_4000x4000.mp4': 'ipfs://QmcQ4h3LEmhc4Fq7joxPPCQZSDAPCoBo69eL6T3hxiWZ9Y',
};

function getMetadataTemplate() {
  return {
    name: "",
    description: "**KRASKA. Knitted Paintings, 2022** \n\nToken description",
    external_link: "",
    image: "",
    animation_url: "",
    //youtube_url: "",
    attributes: []
  };
}

function processRecord(record) {
  const temp = getMetadataTemplate();
  //'{category} {type}, {color}, #{edition}/100, size {size}',
  temp.name = record.name;
  temp.name = temp.name.replace('{category}', record.category);
  temp.name = temp.name.replace('{type}', record.type);
  temp.name = temp.name.replace('{color}', record.color);
  temp.name = temp.name.replace('{edition}', record.edition);
  temp.name = temp.name.replace('{size}', record.size);

  //temp.description = record.description;

  temp.external_link = record.external_link;
  temp.image = image[record.image];
  temp.animation_url = animation_url[record.animation_url];
  //temp.youtube_url = record.youtube_url;

  temp.attributes.push({ trait_type: 'Brand', value: record.Brand, });
  temp.attributes.push({ trait_type: 'Collection', value: record.Collection, });
  temp.attributes.push({ trait_type: 'Category', value: record.Category.replace('{category}', record.category), });
  temp.attributes.push({ trait_type: 'Type', value: record.Type.replace('{type}', record.type), });
  temp.attributes.push({ trait_type: 'Color', value: record.Color.replace('{color}', record.color), });
  temp.attributes.push({ trait_type: 'Edition', value: record.Edition.replace('{edition}', record.edition), });
  temp.attributes.push({ trait_type: 'Size', value: record.Size.replace('{size}', record.size), });
  return temp;
}



fs.mkdirSync('./metadata', { recursive: true });


const dataRaw = fs.readFileSync('./metadata.csv');
const records = parse(dataRaw, {
  columns: true,
  skip_empty_lines: true
});

console.log(records)

for (let i in records) {
  const metadata = processRecord(records[i]);
  fs.writeFileSync(
    `./metadata/${records[i].tokenId}.json`,
    JSON.stringify(metadata, null, 2)
  );
}

/*
    tokenId: '99',
    category: 'Art à Porter',
    type: 'Sweater',
    color: 'Light Blue',
    edition: '100',
    size: 'L-XL',
    number: '49',
    name: '{category} {type}, {color}, #{edition}/100, size {size}',
    description: '-',
    external_url: 'https://kraska.uk/collection22',
    image: 'KRASKA_sweater_01_4000x4000.jpg',
    animation_url: 'KRASKA_sweater_01_4000x4000.mp103',
    youtube_url: '-',
    Brand: 'KRASKA',
    Collection: 'Knitted Paintings, 2022',
    Category: '{category}',
    Type: '{type}',
    Color: '{color}',
    Edition: '#{edition}/100',
    Size: '{size}'
*/
