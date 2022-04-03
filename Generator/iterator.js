function* generator(array) {
  for (let index = 0; index < array.length; index++) {
    yield array[index];
  }
}

const generatorObj = generator([1, 2, 3, 4, 5, 6, 7]);
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());


