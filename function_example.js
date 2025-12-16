//declaring the function
function greet(){
    console.log("HEllo Everyone");
    console.log("Byee");
}

greet();//calling a function
console.log("Outside a function");
//greet();

//addition function
function add(num1=10 ,num2)//num1 and num2 are parameter
{
    console.log("Addition : ",num1+num2);
}

add(4,5);//arguments 


function multiply(num)
{
    console.log("before return");
    return num*num; //return statment will terminate the funstion

    console.log("After return");
}


console.log(multiply(9));

// Helper function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Main function using the helper
function getEvenNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isEven(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5,6,7,8,9,10]));


//Function Expression
var result = function(num1,num2){ return num1+num2};
console.log(result(4,5));

//Arrow function
var answer = (num1,num2)=>{ return (num1*num2)};
console.log(answer(3,5));


var answer1 = (num1,num2)=> (num1*num2);
console.log(answer1(3,4));

//Immediately Invoked Function Expressions (IIFE)
(function(){
    console.log("Hello");
})();

//callstack of function

function main() {
  console.log(`Task Starting`);
  task();//called a function
  console.log(`Task Completed`);

  function task() {
    console.log(`Task Running`);

  }

}

main();

//var let and const
var a=10;
var a=20;//redeclaration and updation
console.log(a);
if(true)
{
    var b=30;
}
console.log("Using var :",b);

if(true)
{
    let ab=30;
    console.log("Using let :",ab);
}
//console.log("Using let :",ab);
const pi=3.14;
//pi=5.75;
console.log(pi);


greet1();

function greet1()
{
    console.log("Hello");
}

console.log(msg);

var msg="hiee";

//console.log(message);
//let message = "Byee";

//console.log(message1);
//const message1 = "Everyone";


function outer(){

    let out=10;
    function inner()
    {
        let inn = 20;
        console.log(out);
        if(true)
        {
           console.log(out);
        }
    }
    //console.log(inn);
    inner();
    
   
}
outer();

console.log("Closure Example");

//closure
function outer1(){
    let count=0;

   
     return function inner1()
    {
        //count = 10;//updateed or redeclared
        count++;
        console.log(count);
    }
     count =10;

    //inner1();
}
let counter = outer1();//1//function expression
counter();
counter();
counter();

//Recursion
//5! = 5*4*3*2*1
function fact(num)
{
    
    if(num>0)
        return num * fact(num - 1);
    if(num == 0)
        return 1;


}
console.log(fact(1));

//debugging
console.log("HEllo...")

function add12(n1,n2)
{debugger;
    return n1+n2;
}
add12(10,20);