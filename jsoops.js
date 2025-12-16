class Car
{
    model_no;
    color;
    speed_limit;
    start()
    {
        console.log("car started");
    }
    accelerate()
    {
        console.log("car accelerated");
    }
    brake()
    {
        console.log("car stopped");
    }
}
//create an object
let audi =new Car();//object creation
audi.model_no="A6";
audi.color="Black";
audi.speed_limit=200;
audi.start();

let bmw =new Car();//object creation
bmw.model_no="X5";
bmw.color="White";
bmw.speed_limit=250;
bmw.start();
bmw.accelerate();
bmw.brake();

//object literal method inside it
let student1={
    name:"John",
    age:20,
    greet()
    {
        console.log("Hello, " + this.name);//this.name ---> styudent1.name
    },
    msg:function(){console.log("Welcome to the class");}
};
student1.msg();
student1.greet();

class Person{
    constructor(name,age)
    {
        this.name =name;
        this.age=age;

    }
    displayInfo()
    {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }

}
//object creation
let person1=new Person("Aishwariya",25);
person1.displayInfo();

let person2=new Person("Rohit",30);
person2.displayInfo();

a=10;
console.log(a);


function show()
{
    console.log(this);
}
show();