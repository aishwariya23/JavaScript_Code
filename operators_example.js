var num1 = 5;
var num2 = 3;
var sum=num1 +num2;

// addition
console.log('num1 + num2 = ', num1 + num2);  // 8

// subtraction
console.log('num1 - num2 = ', num1 - num2);  // 2

// multiplication
console.log('num1 * num2 = ', num1 * num2);  // 15

// division
console.log('num1 / num2 = ', num1 / num2);  // 1.6666666666666667

// remainder
console.log('num1 % num2 = ', num1 % num2);   // 2

// increment
console.log('++num1 = ', ++num1); // num1 is now 6
console.log('num1++ = ', num1++); // prints 6 and then increased to 7
console.log('num1 = ', num1);     // 7

// decrement
console.log('--num1 = ', --num1); // num1 is now 6
console.log('num1-- = ', num1--); // prints 6 and then decreased to 5
console.log('num1 = ', num1);     // 5

//exponentiation power
console.log('num1 ** num2 =', num1 ** num2);

//Comparison Operators

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true


// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

console.log(3 > 4);//false
console.log(3 >= 3);//true
console.log(3 < 4); //true
console.log(4 <= 4);//true

console.log('Hello' != 'Hello'); //false



// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true
console.log(false || false); // false

// logical NOT
console.log(!true); // false

// assignment operator


var a = 7;
console.log("Assignment: a = 7, a =", a);

// addition assignment operator
a += 5;  // a = a + 5
console.log("Addition Assignment: a += 5, a =", a);

// subtraction assignment operator
a -= 5;  // a = a - 5
console.log("Subtraction Assignment: a -= 5, a =", a);

// multiplication assignment operator
a *= 2;  // a = a * 2
console.log("Multiplication Assignment: a *= 2, a =", a);

// division assignment operator
a /= 2;  // a = a / 2
console.log("Division Assignment: a /= 2, a =", a);

// remainder assignment operator
a %= 2;  // a = a % 2
console.log("Remainder Assignment: a %= 2, a =", a);

// exponentiation assignment operator
a **= 2;  // a = a**2
console.log("Exponentiation Assignment: a **= 7, a =", a);


let str1 = "Hello";
let str2 = "world!";
let result = str1 + " " + str2; // concatenation using the + operator
console.log(result);            // Output: "Hello world!"

//ternary operator
var num1=10,num2=8;
let ans=(num1 > num2)? num1 : num2;
console.log("The max number is : ",ans);

//Type of operator
const num = 42;
const str = "Hello, World!";
const bool = true;
const obj = { key: "value" };
const arr = [1, 2, 3];
const func = function () {};
const und = undefined;
const nul = null;

console.log(typeof num);  // Output: "number"
console.log(typeof str);  // Output: "string"
console.log(typeof bool); // Output: "boolean"
console.log(typeof obj);  // Output: "object"
console.log(typeof arr);  // Output: "object" (arrays are objects in JavaScript)
console.log(typeof func); // Output: "function"
console.log(typeof und);  // Output: "undefined"
console.log(typeof nul);  // Output: "object" (this is considered a historical bug in JavaScript)