/* eslint-disable prefer-const */
/* eslint-disable no-cond-assign */
/* eslint-disable no-array-constructor */
const buscet = document.getElementById('exampleModalLabel');
const reg2 = /(?:good:\s*{\s*_id:\s+)(\w*)(?:,\w*\s*title:\s*')(.*)(?:',\w*\s*description:\s*')(.*)(?:',\w*\s*price:\s*)(\d*)(?:,\s*art:\s*')(\d*)(?:',\s*imgPath:\s*')(.*)(?:',\s*__v:\s+0\s*},)/gm;
let ext = buscet.dataset.buscet;
let list = {};
let listArr = [];
let match23 = reg2.exec(String(ext));
do {
  let x = match23[1];
  list[x] = list[x] + 1 || 1;
  if (list[x] === 1) {
    listArr.push(new Array(match23[1], match23[2], match23[3], match23[4], match23[5], match23[6]));
  }
} while ((match23 = reg2.exec(ext)) !== null);
listArr.forEach((elem) => elem.push(list[elem[0]]));
console.table(listArr);

const tbody = document.querySelector('#targetbody');
for (let i = 0; i < listArr.length; i += 1) {
  const element = document.createElement('tr');
  element.innerHTML = `
  <td>${listArr[i][1]}</td>
  <td>${listArr[i][4]}</td>
  <td>${listArr[i][3]}</td>
  <td>${listArr[i][6]}</td>
  <td><button type="button" id="${listArr[i][0]}i" class="btn btn-outline-success"> + </button></td>
  <td><button type="button" id="${listArr[i][0]}d" class="btn btn-outline-danger"> - </button></td>
   `;
  tbody.appendChild(element);
}
