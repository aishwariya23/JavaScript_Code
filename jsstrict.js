"use strict";

//a=10; //error: a is not defined
//console.log(a);

sayhello();

function sayhello()
{
    "use strict";
    console.log("Hello in strict mode!");
    //y=20;
}

/*personal = {
    name: "John",
    age: 30
}

let x=10;
delete x;//error: delete of an unqualified identifier in strict mode

delete sayhello;//error: delete of a function in strict mode

function sum(n1,n1)
{

}*/


function show()
{
    console.log(this);
}
show();