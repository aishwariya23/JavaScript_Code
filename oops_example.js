class Student
{
    //data_properties
    //name;
    //age;
    //department;

    constructor(name,age,department)
    {

        this.name=name;
        this.age = age;
        this.department = department;
    }
    //methods
    study()
    {
        console.log(this.name,"Studying");
    }
    play()
    {
        console.log(this.name,"Playing");
    }
    rename(newname)
    {
        this.name=newname;
    }
}
//create a object instance
let student1 = new Student("Aishwariya",20,"CSE");
student1.name="aaa";
student1.study();
student1.rename("Aish");
student1.study();
//console.log(student1.name);

//create a 2 stuent objectinstance
let student2 = new Student("John",20,"CSE");
//student2.name="John";
//console.log(student2.name);
student2.play();


//this in a object
const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet(); // Output: Hello, my name is Alice


//this in regular function
function message()
{
    console.log(this);

}
//message();//global object and for the browser it will window


