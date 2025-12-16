//Implicit conversion

var a = "12";//"123"
var b = 10;
var result = a + b; // "510" - string concatenation
console.log(result);
console.log(a - b); // 2 - numeric subtraction
console.log(a * b);
console.log(a / b);

console.log(true + 1); // 2
console.log(false + 1); // 1

//Explicit conversion
//convert number explicitly

console.log(Number("123")); // 123
console.log(Number("abc"));// NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

//convert string explicitly
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(false)); // "false"  
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN));// "NaN"

//convert boolean explicitly
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("abc")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(" "));//true
console.log(Boolean(123));//true


//Decision Statements

//if statement
if (true) {
    console.log("This will always execute");
}

//if-else statement

if (6 > 3) {
    console.log("6 is greater than 3");

}
else {
    console.log("6 is not greater than 3");
}

//if-else if-else statement
var percentage = 60;
if(percentage >= 90)
{   
    console.log("Grade A");
}
else if (percentage < 90 && percentage >= 75)
{
    console.log("Grade B");
}
else if (percentage < 75 && percentage >= 60)
{
    console.log("Grade C");
}
else if (percentage < 60 && percentage >= 45)
{
    console.log("Grade C");
}
else
{
    console.log("Grade F");
}


//nested if statement

if(6>3)
{
    if(4>2)
    {
        console.log("Both conditions are true");
    }
}


//nested if -else statement
if(2>3)
{
    if(4<2)
    {
        console.log("Inner condition is true");
    }
    else
    {
        console.log("Inner condition is false");
    }
}
else{
    if(5>1)
    {
        console.log("Outer condition is false, inner condition is true");
    }
    else{   
        console.log("Both outer and inner conditions are false");
    }
}

//Loops
//while loop
var count = 0;
while(count < 5)
{
    console.log("Count is: " + count);
    count++;
}

//do-while loop
var num = 0
do{
    console.log("Num is: " + num);
    num++;
}while(num > 5);


for(var i=1; i<=10; i++)
{
    console.log("i is: " + 5*i);
}

//break statement
for(var j=10; j>=1; j--)
{
    console.log("j is: " + j);
    if(j==5)
    {
        break;
    }
}
console.log("Loop ended");


//continue statement
for(var k=1; k<=10; k++)
    //skip even numbers
{  if(k%2==0)
    {
        continue;
    }
    console.log("k is: " + k);
}
console.log("Loop ended");


//switch statement
var days = 3;
switch(days)
{
    case 1:
        console.log("Monday");
        break;
        
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
        
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//switch statement
var traffic = "green";
switch(traffic)
{
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}


let num1=2;
let b1="2";
if(a==b)
console.log("true");
else
console.log("false");
