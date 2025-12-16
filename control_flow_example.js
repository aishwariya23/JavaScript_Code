var number = 10;
if (number > 0) 
    {
    console.log("This is positive number : ", number);
    }
else if(number < 0)
{
    console.log("This is negative positive number : ", number);
    
}
else
    {
        console.log("OO the number is ZERO");
    }

//another example
var number1 = 10;
var number2 = 80;
var number3 = 7;

if((number1>number2) && (number1>number3))
{
    console.log("n1 is greater");
}
else if((number2>number3) && (number2>number1))
{
console.log("n2 is greater");
}
else{
console.log("n3 is greater");
}


//to check whether a number is even or odd
var num=7;
if(num % 2 == 0)
{
    console.log("It is even");
}
else{
console.log("It is odd");
}


var signal_color = "green";
var message;
switch(signal_color)
{
    case "red":
        message = "Stop !!!!";
        break;
        
    case "green":
        message = "GO !!!!";
        break;
    case "yellow":
        message = "Wait please....";
        break;
    default:
        message = "Invalid";
}
console.log(message);