//A function always has access to the variable environment of the execution context, in which it was created

// "Normal" function, variable environment gets "deleted" after execution
function getTwo() {
  let two = 2;
  return two;
}

function createFunction() {
  function multiplyByTwo(n) {
    return n * 2;
  }
  return multiplyByTwo;
}

const multiplyByTwo = createFunction();

// console.log(multiplyByTwo(1));

//Closure

function createCounter() {
  let counter = 0;
  function addOne() {
    counter++;
    console.log(counter);
  }
  return addOne;
}

const counterOne = createCounter();
const counterTwo = createCounter();
counterOne();
counterOne();
counterOne();
counterOne();
