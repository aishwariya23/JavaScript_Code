class Bank
{
    #balance;//private pproperty

    constructor(owner,balance)
    {
       this.owner=owner;
       this.#balance=balance; 
    }

    getdisplay()
    {
        console.log(this.#balance);
    }
    setdisplay(amount)
    {
        this.#balance += amount;
    }
}
let user1=new Bank("Aishwariya",2000);
user1.setdisplay(1000);
user1.getdisplay();
//console.log(user1.#balance)


//Inheritance

class Parent
{
    msg()
    {
        console.log("Hello");
    }
}

class child extends Parent
{
    demo()
    {
        console.log("Child my property");
    }

}
let c1= new child();
c1.msg();
c1.demo();

let p1=new Parent();
p1.msg();
//p1.demo();//cannot have the access

//super keyword ---> call parent constructor , call parent method

class Parent1
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    display()
    {
        console.log("Hello  "+this.name);
        console.log("Age is  "+this.age);
    }
}
class Child1 extends Parent1
{
    constructor(name,age,number)
    {
        super(name,age);//calling parent constructor
        this.number=number;
    }
    displayinfo()
    {
        super.display();//called parent method
        console.log("My number  "+this.number);

    }
    
}
let child1=new Child1("AA",20,12345);
child1.displayinfo();

//Polymorphism--> overridding and overloading

class Parenteye
{
    eyecolor()
    {
        console.log("I have brown");
    }

}

class Childeye extends Parenteye
{
    eyecolor()
    {
        super.eyecolor();//parent
        console.log("I have blue");
    }

}
let pp1=new Parenteye();
pp1.eyecolor();

let cc1=new Childeye();
cc1.eyecolor();


//Bank----> task
class Bank{
    constructor(){}
    rateofinterest()
    {

    }
}

class SBI extends Bank{}
class Bob extends Bank{}
class ICICi extends Bank{}