/*"use strict";
function message()
{"use strict";
    console.log(this);

}
message()*/


/*console.log("Start");

function greet()
{
    console.log("Delay of 2 second");
}
setTimeout(greet,5000);
console.log("End");*/



/*const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
let greetbind = user.greet.bind(user)//this is now permanently bound with user object

setTimeout(greetbind, 5000);*/ // Output: Hello, my name is undefined (or error in strict mode)

//using bind with parameters


let person = {
    name : "John",
    greet(age) {
    console.log(`Hello, my name is ${this.name}, ${age}`);
  }
}
let personbind = person.greet.bind(person,20);
setTimeout(personbind, 5000); 


//call() method invoke the function with this explicitly set
function introduce(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

const person1 = { name: "Emma" };//object
introduce.call(person1, 30, "London");

//The apply() method is similar to call(), but it accepts arguments as an array.
function introduce1(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

const person2 = { name: "Emma" };//object
introduce1.apply(person2, [40, "London"]);