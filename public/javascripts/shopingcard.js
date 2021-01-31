/* eslint-disable prefer-const */
/* eslint-disable no-cond-assign */
/* eslint-disable no-array-constructor */
const buscet = document.getElementById('exampleModalLabel');
console.log('Test !');
// console.log(buscet.dataset.buscet);
// const data = JSON.stringify(buscet.dataset.buscet);
// console.log(data);
/* // const hew = JSON.parse(ext);
const reg = /(?:good:\s*{\s*_id:\s+)(\w*)(?:,\w*\s*title:\s*')(.*)(?:',\w*\s*description:\s*')(.*)(?:',\w*\s*price:\s*)(\d*)(?:,\s*art:\s*')(\d*)(?:',\s*imgPath:\s*')(.*)(?:',\s*__v:\s+0\s*},)/gm;
const list = {};
const listArr = [];
let match = reg.exec(data);
do {
  let x = match[1];
  list[x] = list[x] + 1 || 1;
  if (list[x] === 1) {
    listArr.push(new Array(match[1], match[2], match[3], match[4], match[5], match[6]));
  }
} while ((match = reg.exec(data)) !== null);

listArr.forEach((elem) => {
  elem.push(list[elem[0]]);
});

// console.log(list);
console.table(listArr);

 */
//-------------------------------------------------------------

// const hew = JSON.parse(ext);
const reg = /(?:good:\s*{\s*_id:\s+)(\w*),\w*\s*title:\s*'(.*)',\w*\s*description:\s*'(.*)',\w*\s*price:\s*(\d*),\s*art:\s*'(\d*)',\s*imgPath:\s*'(.*)',\s*__v:\s+0\s*},/gm;
const reg2 = /(?:good:\s*{\s*_id:\s+)(\w*)(?:,\w*\s*title:\s*')(.*)(?:',\w*\s*description:\s*')(.*)(?:',\w*\s*price:\s*)(\d*)(?:,\s*art:\s*')(\d*)(?:',\s*imgPath:\s*')(.*)(?:',\s*__v:\s+0\s*},)/gm;

const reg3 = /(?:good:\s*{\s*_id:\s+)(?<id>\w*)(?:,\w*\s*title:\s*')(?<title>.*)(?:',\w*\s*description:\s*')(?<description>.*)(?:',\w*\s*price:\s*)(?<price>\d*)(?:,\s*art:\s*')(?<art>\d*)(?:',\s*imgPath:\s*')(?<imgPath>.*)(?:',\s*__v:\s+0\s*},)/mg;

let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let match22 = regexpNames.exec(personList);
do {
  console.log(`Hello ${match22[1]} ${match22[2]}`);
} while((match22 = regexpNames.exec(personList)) !== null);

// const shopingList = ['id', 'title', 'description', 'price', 'art', 'imgPath'];
let ext = buscet.dataset.buscet;
// console.log(ext);
// const ext = data;
let list = {};
let listArr = [];
let match23 = reg2.exec(String(ext));
 console.log(match23);

do {
  let x = match23[1];
  list[x] = list[x] + 1 || 1;
  if (list[x] === 1) {
    listArr.push(new Array(match23[1], match23[2], match23[3], match23[4], match23[5], match23[6]));
  }
} while ((match23 = reg2.exec(ext)) !== null);
listArr.forEach((elem) => {
  elem.push(list[elem[0]])
});
console.log(list);
console.table(listArr);

