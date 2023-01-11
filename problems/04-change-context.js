function changeContext(func, obj) {
  let context = func.bind(obj);
  return context(); 

  }


class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}
const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen
// let extract = extractName.bind(kristen);
// console.log(extract());

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
