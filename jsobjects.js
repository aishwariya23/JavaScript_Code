//JS objects

//object literal method
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue"
};

//object constructor method
var car = new Object();// empty object
car.name = "Toyota";
car.model = "Camry";
car.year = 2020;


//accessing object properties
console.log("Person's first name: " + person.firstName);//dot notation
console.log("Car model: " + car["model"]);//bracket notation

//modifying object properties
person.age = 31;
car.year = 2021;

//object 
console.log(person);
console.log(car);

//adding the nested object in person

person.address = {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
};

console.log(person);
person.address.country = "USA";//adding new property to nested object
person['address']['city'] = "North America";//modifying property to nested object using bracket notation
console.log(person);

person.array=[1,2,3,4,5];//adding array property to object
console.log(person);

//iterating over object properties
for (var key in person)
{
    console.log(key + ": " + person[key]);
}

//JS object methos

console.log(Object.keys(person));//prints all keys of the object

console.log(Object.values(person));//prints all values of the object

console.log(Object.entries(person));//prints all key-value pairs of the object

var clonedperson = new Object();//empty object
Object.assign(clonedperson, person);//cloning object
console.log(clonedperson);

Object.freeze(person);//freezing the object to prevent modifications
person.firstName = "Jane";//this will not change the firstName property
console.log(person.firstName);//prints "John"


//JS sets

//new keyword
var mySet = new Set();//empty set

//literal method
var mySet2 = new Set([1,2,3,4,5,1,2]);
console.log(mySet2);//prints Set(5) { 1, 2, 3, 4, 5 } - duplicates are removed


var arr=[1,2,3,4,5,1,2];
var mySet3=new Set(arr);
console.log(mySet3);//prints Set(5) { 1, 2, 3, 4, 5 } - duplicates are removed

//set methods

mySet.add(1);//adding elements to set
mySet.add(2);
mySet.add(3);
console.log(mySet);//prints Set(3) { 1, 2, 3 }

mySet.delete(2);//removing element from set
console.log(mySet);//prints Set(2) { 1, 3 }

//mySet.clear();//removing all elements from set

//size property
console.log("Size of mySet: " + mySet.size);//prints 2

//checking presence of element
console.log("mySet has 3: " + mySet.has(5));

//converting set to array
var setToArray = Array.from(mySet);
console.log(setToArray);//prints [ 1, 3 ]

//JS maps

//new keyword
var myMap = new Map();//empty map

myMap.set("name", "John");//adding key-value pairs
myMap.set(30, "age");
console.log(myMap);//prints Map(2) { 'name' => 'John', 'age' => 30 }

myMap.set("name", "Jane");//modifying value for existing key
console.log(myMap);//prints Map(2) { 'name' => 'Jane', 'age' => 30 }

myMap.delete(30);//removing key-value pair
console.log(myMap);//prints Map(1) { 'name' => 'Jane' }

//myMap.clear();//removing all key-value pairs

console.log("Size of myMap: " + myMap.size);//prints 1

console.log("myMap has 'name': " + myMap.has("name"));//checking presence of key

//get the value for a key
console.log("Value for 'name': " + myMap.get("name"));//prints Jane

//iterating over map
for (var [key, value] of myMap) {
    console.log(key + ": " + value);
}

//converting map to array
var mapToArray = Array.from(myMap);
console.log(mapToArray);//prints [ [ 'name', 'Jane' ] ]


//convert js objects to JSON string
var obj1={
    name: "Alice",
    age: 25,
    city: "Wonderland"
};

var jsonString = JSON.stringify(obj1);
console.log("JSON String: " + jsonString);//prints JSON string



//JSON to JS objects
var jsobject = JSON.parse(jsonString);
console.log("JS Object: ", jsobject);//prints JS object