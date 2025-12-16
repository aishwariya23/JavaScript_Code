var student1={

    name : "John",
    ID : 101,
    department :"CS"
};
console.log(student1);

var student2 = new Object();
student2.name="Jack";
student2.ID = 102;
student2.department = "Mangment";

console.log(student2);

//add new objects projects
student1.age = 20;
console.log(student1);

student2.age = 25;
console.log(student2);

//only access name of the students
console.log(student1.name);
console.log(student2['name']);

//assign new value to existing key - modify object properties
student2.age=30;
console.log(student2);

//delete an object property
delete student1.name;
console.log(student1);
student1.fullname="John";
console.log(student1);

//Object methods Object.protype

console.log(Object.keys(student1));

console.log(Object.values(student1));

console.log(Object.entries(student1));

Object.freeze(student1);//prevent an object from being modfying
student1.age = 40;
console.log(student1);

var tartgetobj = { name:"aaa",department:"cse"};
var sourceobje = {age:50};
Object.assign(tartgetobj,sourceobje);
console.log(tartgetobj);



var person={
    name : "Aishwariya",
    age : 20,
    greet : function(){console.log("Hello Everyone : ",this.name,this.age);}
}
console.log(person.name);
person.greet();//using dot notation
person["greet"](); // using bracket notation

//nested objects

var person1 =
{
    fname:"aishwariya",
    lname:"Budhrani",
    address:{House_no : 20,street :"aaaaa",state:"Gujarat",pincode:"123456"}

};
console.log(person1.address.state);
console.log(person1["address"]["state"]);

person1.address.state = "MP";
console.log(person1.address.state);
person1.firstname = person1.fname;
delete person1.fname;
console.log(person1);


var student4={

    name : "John",
    ID : 101,
    department :"CS"
};
for(var i in student4)
{
    console.log(i,student4[i]);
}