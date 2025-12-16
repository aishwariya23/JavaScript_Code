//high-order function

function add(n1,n2)
{
    console.log("Check");
    debugger;//breakpoint
    return n1+n2;
}

function operate(a,b,oper)
{
    return oper(a,b);
}
console.log(operate(5,6,add));

//Built in high-order function
//map

let arr=[1,2,3,4,5,6];//original array it remains unchanged
let double = arr.map(nums => nums*nums);
console.log(double);

//filter
let even=arr.filter(num => num%2==0);
console.log(even);

//reduce

let sum=arr.reduce((num,total)=>num+total,0);
console.log(sum);


let arr1=[4,8,9,10,12];
let duplicate=[...arr1,5,8,7]//create a copy
console.log("Checking");
console.log(duplicate)
let merge=[...arr1,...duplicate];
console.log(merge);

let obj1={name:"aish"};
let obj2={age:20};
let merge1={...obj1,...obj2};
console.log(merge1)