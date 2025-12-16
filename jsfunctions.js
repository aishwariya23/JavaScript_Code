//declare a function named greet
function greet()
{
    console.log("Hello, World!");
}

//call the function
greet();
greet();

//function with parameters
function greetuser(name)
{
    console.log("Hello, " + name + "!");
}

greetuser("Alice");
greetuser("Bob");

//function with parameters
function add(n1, n2)
{
    console.log("Sum: " + (n1 + n2));
}

add(5, 10);

//function with return value
function multiply(n1, n2)
{
    console.log("Calculating product...");
    return n1 * n2;//sending back the product
    console.log("This line will not be executed");
}
var product =multiply(4, 5);
console.log("Product: " + product);
console.log("Product: " + multiply(6, 7));

//default parameters
function addition(n1, n2=10)
{
    return n1 + n2;
}
console.log("Addition: " + addition(5));//n2 takes default value 10
console.log("Addition: " + addition(5, 20));//n2 takes value 20

function addNumbers(n1,n2=5,n3=5)
{
    return n1 + n2 + n3;

}
var result = addNumbers(2,3);
console.log("Result: " + result);//n3 is undefined, so result is NaN


//helper function
function square(n)
{
    return n * n;
}
function triple(n)
{
    return n * n * n;
}

//whenever i have odd no - triple it, even no - square it
function processNumber(n)
{
    if(n % 2 == 0){
        return square(n);
        return null;//this line will not be executed
    }
    else{
        return triple(n);   
    }
}
console.log("Processed Number (4): " + processNumber(4));//prints 16
console.log("Processed Number (5): " + processNumber(5));//prints 125

{
    //block scope
}
var globalVar = "I am global";//global scope
function testvarScope()
{
    //function scope
    var x = 10;
    var x=15;
    console.log("Inside function scope x: " + x);//prints 10
    {
        //block scope
        var x =20;//redeclaring x and updation
        console.log("Inside block scope x: " + x);//prints 20
    }
    {
        //block scope
         x=30;//updatING THE VALUE
         x=40;
    }
    console.log("Inside function scope x: " + x);//prints 20
}
testvarScope();

function testLetScope()
{
    let y = 10;
    console.log("Inside function scope y: " + y);
    //let y = 15; //error: redeclaration of y
    y=15;//updating value
    console.log("Inside function scope y: " + y);//prints 15
    
    {
        let y =20;//different variable
        console.log("Inside block scope y: " + y);//prints 20
    }
    console.log("Inside function scope y: " + y);//prints 15
}
testLetScope();

function testConstScope()
{
    const z = 10;
    console.log("Inside function scope z: " + z);
    //const z = 15; //error: redeclaration of z
    //z=15;//error: assignment to constant variable
    //console.log("Inside function scope z: " + z);
    {
        const z =20;//different variable
        console.log("Inside block scope z: " + z);//prints 20
        {
            const z =30;
            console.log("Inside inner block scope z: " + z);//prints 30
        }
    }

}
testConstScope();

//function expressions or anonymous functions
var squareFunc = function(n)
{
    return n * n;
};

console.log("Square of 5: " + squareFunc(5));//prints 25

//arrow functions
var cubeFunc = (n) => { return n * n * n;};
console.log("Cube of 3: " + cubeFunc(3));//prints 27

//shorter syntax for single parameter and single return statement
var cubeFuncShort = n => n * n * n;
console.log("Cube of 4: " + cubeFuncShort(4));//prints 64


//IIFE - Immediately Invoked Function Expression
(function(){
    console.log("IIFE executed!");
})();

msg();//function hoisting


function msg()
{
    console.log("hello everyone")
}

//variable hoisting

console.log("Value of a: " + a);//undefined due to hoisting
var a = 10;


//console.log("Value of b: " + b);//ReferenceError: Cannot access 'b' before initialization
//const b = 20;

//lexical scoope

function outerFunction()
{
    let outerVar = "I am from outer function";
    function innerFunction()
    {
        let innerVar = "I am from inner function";
        console.log(innerVar);//accessing variable from inner function
        
        console.log(outerVar);//accessing variable from outer function
    }
    innerFunction();
    //console.log(innerVar);//error: innerVar is not defined

}
outerFunction();


//closure
function makeCounter()
{
    let count=0;

    return function inner()
    {
        count++;
        console.log("Count: " + count);
    };
}


var counter = makeCounter();
counter();
counter();
counter();