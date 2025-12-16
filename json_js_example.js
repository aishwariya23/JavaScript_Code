//built in methods to convert data between JSON format and Javascript objects
//1. JSON.stringify() --> JS object - JSON
//2. JSON.parse() ---> JSON - JS object

var person ={

    name:"John",
    age : 20,
    email : "john123@gmail.com",
    greet : function(){console.log("Hello")}
};

var convert_json = JSON.stringify(person);
console.log(convert_json);


var person_details ='{"name":"john","age":22,"hobbies":["drwaing","cycling","painting"]}';
var convert_obj = JSON.parse(convert_json);
console.log(convert_obj);