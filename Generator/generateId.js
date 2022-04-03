// Infinite loop

function* generateUniqueId() {
  let id = 1;

  while (true) {
    yield id;
    id++;
  }
}

const generatorObj = generateUniqueId();
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
