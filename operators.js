var name="Aishwariya";
var age=22;
var percentage=88.5;
var country='India';
var b1=true;
var b2=false;

var n1=null;
var x;
var n2=undefined;

console.log(name);
console.log("name :" ,name);
console.log(typeof(name));
console.log(typeof(n2));
console.log(typeof(x));


/* multi line comments */
//Arthmetic Operators
console.log(2+2);
var n1=10;
var n2=5;
console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);
console.log(n1%n2);
console.log(2**3)
console.log(++n2);//6
console.log(n2++);//6
console.log(n2);//7
console.log(--n1);//9
console.log(n1--);//9
console.log(n1);//8

//assignment Operators
var a=10;
console.log(a+=5);//a=a+5
console.log(a-=5);//a=a-5
console.log(a*=5);//a=a*5
console.log(a/=5);//a=a/5
console.log(a%=5);//a=a%5
console.log(a**=2);//a=a**2

//comparison Operators
console.log(5==5);//true
console.log(5=='5');//true
console.log(5===5);//true
console.log(5==='5');//false
console.log(5!=5);//false
console.log(5!=='5');//true
console.log(5>3);//true
console.log(5<3);//false
console.log(5>=5);//true
console.log(5<=3);//false


//logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log((6>3) && (5<2));
console.log((6>3) || (5<2));
console.log((6>3) && !(5<2));
console.log(!(6>3) || (5<2));

//voting application
var age=8;

(age>=18)?console.log("Eligible to vote"):console.log("Not eligible to vote");  

//max number
var n1=10;
var n2=15;

(n1>n2)?console.log(n1+" is max"):console.log(n2+" is max");
//task --> find max of 3 numbers using ternary operator