class Parent
{
    name;
    constructor(name)
    {
        this.name = name;
    }
     display()
     {
        console.log("I am ", this.name)
     }
     msg()
     {
        console.log("Hello Parent");
     }
}
let p1=new Parent("Parent");
p1.display();
//p1.msg();
class child extends Parent{
    constructor(name,age)
    {
        super(name);//call parent constructor
        this.age=age;
    }
    display1()
    {
        console.log("Hello my name is ",this.name,this.age);
    }
    msg()
    {
        super.msg();//call parent method
        console.log("Hello Child");
    }

}
let c1=new child("Aish",20);
c1.msg();
c1.display1();

