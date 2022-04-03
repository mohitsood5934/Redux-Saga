// Infinite loop

function* generateUniqueId() {
    let id = 1;
  
    while (true) {
      const increment = yield id;
      if(increment !== null){
          id += increment;
      } else {
          id++;
      }
    }
  }
  
  const generatorObj = generateUniqueId();
  console.log(generatorObj.next());
  console.log(generatorObj.next(2)); // yield id ->  where argument passed in next(2) will be return in yield
  console.log(generatorObj.next(3));
  console.log(generatorObj.next(7));
  console.log(generatorObj.return(100)); // exists out from the generator functions, after return generator object will return done as false !!
  console.log(generatorObj.next(8));
  
  console.log(generatorObj.throw(new Error('I am error'))); // throw is used to throw an error