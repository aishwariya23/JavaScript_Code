var numbers  = [10,20,40,50,20,60];

console.log(numbers.length);
console.log(numbers[2]);
console.log(numbers);

//add more element to array
numbers.push(100); //add at the end
console.log(numbers);
numbers.unshift(5); //add at the beginning
console.log(numbers);

//remove element
numbers.pop();// remove the final element of the array
console.log(numbers);
numbers.shift(); //remove the first element
console.log(numbers);

//changing an array elements
numbers[2] = 100;
console.log(numbers);
numbers[6]=90;
console.log(numbers)

//extrract some of array
console.log(numbers.slice(1,3)) //index 1 ,2 and 3
//var new_array = numbers.slice(1,4);


var new_array = [ 2,4,6,1,2,8];
//console.log(new_array.splice(2,1,9,10));
//console.log(new_array);

console.log(new_array.indexOf(10));

new_array.sort();
console.log(new_array);

console.log(new_array.includes(2));

//using for loop
var arr=[];
for(var i=0; i < new_array.length;i++ )
{
    arr[i]=(new_array[i] * 2);//number[0] number [i]
}
console.log(new_array);
console.log(arr);

//using for...of
for(var temp of new_array)
{
    console.log(temp * 2);
}


var arr1 = [1,2];
var arr2 = arr1;

arr2.push(3);

console.log(arr2);
console.log(arr1);



var multi_array = [[1,2,3],[4,5,6],[7,8,9]];
console.log(multi_array);
multi_array.push(10);
console.log(multi_array);
console.log(multi_array.length);
multi_array[1][1] = 20;
console.log(multi_array);

multi_array[2].splice(2,0,10);
console.log(multi_array);
console.log(multi_array.length);



//for for iteration in m multi - dimensional
for(var i=0 ;i<multi_array.length;i++)
{
    var innerarray = multi_array[i].length;
    if(innerarray>1){
        
    for( var j = 0; j < innerarray; j++)
    {
        console.log(multi_array[i][j]);
    }
    }
    
    else{
        console.log(multi_array[i]);
    }
}


var multi_array1 = [[1,2,3],[4,5,6],[7,8,9]];
for (var temp of multi_array1)
{
    for (var temp1 of temp)
    {
        console.log("the value is",temp1);
    }
}


//Javascript Strings

var str= " Hello World ";

console.log(str.charAt(0));
console.log(str[1]);//e
str[1]='E';
console.log(str);//strings are immutable

console.log(str.length);
//str = str.toUpperCase();//re assign
console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.concat(" Byee"," hahaha"));

console.log(str.replace('ll',"aa"));

console.log(str.replaceAll('l','p'));

console.log(str.trim());


console.log(str);
var str1= "Hello, Everyone, Welcome, to, the, class";
console.log(str1.split(","));
var splitarr = str1.split(",");
console.log(splitarr);
console.log(splitarr.join("."));



var newstr= " Hello   World  ";
console.log(newstr.trim());

var newstr1= "Byee World";
var emp_str = "";
console.log(newstr1.slice(1,4));//yee
var le = newstr1.length;
for(var i = le - 1;i >= 0; i--)
{
   emp_str += newstr1[i];
}
console.log(emp_str);