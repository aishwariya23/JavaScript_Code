//Custom High order Function

function greet()
{
    return function(name){return `hello , ${name}`};
}
const user1 = greet();
console.log(user1("Aishwariya"));

const operation = (operation1,n1, n2) => operation1(n1,n2);//add(n1,n2) add(3,4)
const add = (a,b)=> a+b;//addition logic
console.log(operation(add,3,4));

//bulti-in high oder functions
const arr=[1,2,3,4,5];
//map()
const double_arr = arr.map(num => num*2);
console.log(double_arr);

//filter() will only keep those element that match a condition
const eve_nos = arr.filter(num => num%2 === 0);
console.log(eve_nos);

//reduce() -- reduce a array to single value
const sum = arr.reduce((total,num) => total+num);
console.log(sum);

//foreach()
const fruits = ["apple","banana","mango"];
fruits.forEach(value => console.log(value.charAt(0).toUpperCase()));
console.log(fruits);


let old_arr = [1,2,3,4,5];
let new_arr = [...old_arr,5,6,7];
console.log(new_arr);
console.log(old_arr.slice(2,4));



function greet(name)
{
    console.log("Hello",name);
}

greet("Aishwariya");