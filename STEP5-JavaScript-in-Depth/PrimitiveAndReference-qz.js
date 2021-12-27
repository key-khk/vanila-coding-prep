// #1
/*const person = {
    age: 30
  };
  
  const something = person.age;
  
  person.age = 50;
  
  console.log(something); // 출력 : 30
*/

// #2
/*let one = { name: "one" };
const two = { name: "two" };

const something = one;

one = { name: "ONE" };

console.log(something); // 출력 : 
*/

// #3
/*
let one = 1;
const two = 2;

const something = one;

one = 101;

console.log(something); // 출력 :
*/

// #4
/*
let ken = {
    name: "ken",
    age: 30
  };
  
  const wan = {
    name: "wan",
    age: 35
  };
  
  const people = [ ken, wan ];
  
  ken = {
    name: "KEN",
    age: 38
  };
  
  console.log(people); // 출력 : 
  console.log(ken === people[0]); // 출력 : 
*/

  // #5

  var secret = {
    data: "I am secret"
  };
  
  function destroy (stuff) {
    stuff = null;
  }
  function name(params) {
      
  }

  destroy(secret);
  
  console.log(secret); // 출력 : 
