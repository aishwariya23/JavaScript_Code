function greet(name)
{
    console.log("Hello",name);
}

greet("Aishwariya");

let student={
    name: "Aishwariya",
    greet(){console.log("Hello",this.name)}
};
student.greet();


let msg = function (){console.log("Hello everyone")};
msg();

//passing function as a ARGUMENT
setTimeout(function(){console.log("2 seconds")},2000);


let arr=[1,2,3];
let new_arr=[...arr,4,5,6];
console.log(new_arr);


let arr1=[1,3,5,8,9,100];
let [ first,second,...rest]=arr1;
console.log(first);
console.log(second);
console.log(rest);

function add(n1,n2,n3)
{
    return n1+n2+n3;
}
let adddd=[1,7,9,10,11];
console.log(add(...adddd));//passing as argument


function greet1(...name)
{
    console.log(name);
}
greet1('aish','bbb','ccc','ddd')