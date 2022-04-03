// A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears 
// to be a function but it behaves like an iterator.
//  generator function return some code then yield a value, then again will run some code and return a value
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// generator function return a generator object
const generatorObj = simpleGenerator();
console.log({ generatorObj });

// next allows us to execute a code inside the generator

const obj = generatorObj.next();
console.log({ obj }); // will return { value: 1 , done: false }, here done is false means there is some more code left to run , value return is the yield

const obj1 = generatorObj.next();
console.log({ obj1 });

const obj2 = generatorObj.next();
console.log({ obj2 });

const obj3 = generatorObj.next();
console.log({ obj3 });

// done : true indicates no code is left to run
//Note
// When we create a generator object , it is different from all other generators object.They are not pointing to same reference
