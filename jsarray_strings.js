//array is zer0 based index
//array can hold multiple values of different data types
//array can have duplicated values
//array literal

var a = ["hello", "world"];
var numbers = [1, 2, 3, 4, 5];
console.log("original array");
console.log(numbers);
console.log(typeof numbers);

//array constructor
var b = new Array("foo", "bar");
var moreNumbers = new Array(6, 7, 8, 9, 10);
var emptyArray = new Array(3); // creates an array of length 3 with undefined elements

//accessing elements
var firstElement = a[0]; // "hello"
var secondElement = a[1]; // "world"

//adding elements
numbers.push(6); // numbers is now [1, 2, 3, 4, 5, 6]
console.log(numbers);
numbers.unshift(7); // numbers is now [7, 1, 2, 3, 4, 5, 6]
console.log(numbers);

//removing elements
numbers.pop(); // removes 6, numbers is now [7, 1, 2, 3, 4, 5]
console.log(numbers);
numbers.shift(); // removes 7, numbers is now [1, 2, 3, 4, 5]
console.log(numbers);

//modifying elements
numbers[0] = 10; // numbers is now [10, 2, 3, 4, 5]
console.log(numbers);


//array length ----> property
console.log("Array length: " + numbers.length); // 5


//splicing elements
//remove an element
numbers.splice(2, 1); // removes 1 element at index 2, numbers is now [10, 2, 4, 5]
console.log(numbers);

//add elements
numbers.splice(2, 0, 3,8,9); // adds 3,8,9 at index 2, numbers is now [10, 2, 3, 4, 5]
console.log(numbers);

//replace elements
numbers.splice(1, 2, 20,30); // replaces 2 elements at index 1 with 20,30, numbers is now [10, 20, 30, 4, 5]
console.log(numbers);
//length = 7

//iterating over arrays
for(var i=0; i < numbers.length; i++) {
    console.log("Element at index " + i + ": " + numbers[i]);
}


//iterating over arrays
for(var i=1; i < (numbers.length)+1; i++) {
    console.log("Element at index " + (i-1) + ": " + numbers[i-1]);
}

//iterate using for..of
for(var num of numbers) {
    console.log("Element: " + num);
}

//i want to check 8 is present in the array or not
for(var i=0; i < numbers.length; i++) {
    if(numbers[i] === 40) {
        console.log("8 is present in the array at index " + i);
    }
    else
    {
        console.log("value not found");
        break;
    }
}

//includes()
console.log("Checking if 30 is present: " + numbers.includes(30)); // true

//slice(start,end) [10,20,30,8,9,4,5]
var slicedArray = numbers.slice(1, 4); // creates a new array from index 1 to 3
console.log(slicedArray); // [20, 30, 8]
console.log(numbers.slice(2)); // [30, 8, 9, 4, 5]

//original array remains unchanged
console.log(numbers); // [10, 20, 30, 8, 9, 4, 5]


//indexOf(value) --> give index of first occurrence of value
console.log(numbers.indexOf(30)); //2


//multidiimensional arrays
var multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(multiArray[0]); //[1,2,3]
console.log(multiArray[0][1]); // 2

multiArray.push([10,11,12]);
console.log(multiArray);

multiArray[1][1] = 50; // change 5 to 50
console.log(multiArray);

multiArray.pop();
console.log(multiArray);
multiArray[2].pop();
console.log(multiArray);

//iterate over multidimensional array
for(var i=0; i < multiArray.length; i++) {
    for(var j=0; j < multiArray[i].length; j++) {
        console.log("Element at [" + i + "][" + j + "]: " + multiArray[i][j]);
    }
}



//Strings ----> sequence of characters
//strings are immutable
var name = "John Doe";
console.log("Original string: " + name);
console.log("Length of string: " + name.length); // 8

//accessing characters
console.log("First character: " + name[0]); // J
console.log(name.charAt(1)); // o

console.log(name.toUpperCase()); // JOHN DOE
console.log(name.toLowerCase()); // john doe

console.log(name.indexOf("Doe")); // 5

console.log(name.slice(0, 4)); // John

console.log(name.replace("John", "Jane")); // Jane Doe

//original string remains unchanged
console.log("Original string after replace: " + name); // John Doe

var greeting = " Hello, World! ";
console.log(greeting.replace("l","p"));
console.log(greeting.replaceAll("l","p"));

console.log(greeting.trim()); // "Hello, World!"


var words = "hello,everyone,welcome,to,JavaScript";
var wordArray = words.split(","); // splits the string into an array of words
console.log(wordArray); // ["hello", "everyone", "welcome", "to", "JavaScript"]


var arr=["apple","banana","cherry"];
var joinedString = arr.join(",");
console.log(joinedString); // "apple banana cherry"