const user1={
    name : "aishwariya",
    age : 20,
    sayhello()
    {
        console.log("Hello " , this.name)
    }
};

function sayhello()
{
    console.log("hello eveyone");
}
//setTimeout(user1.sayhello,2000);

//bind()---> method creates a new function where this is permanently set to the specified object.

const greet=user1.sayhello.bind(user1);
setTimeout(greet,2000);

//call()--> method immediately invokes the function with this explicitly set to a given object.

function introduce(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

const person = { name: "Emma" };//person
introduce.call(person, 30, "London");
// Output: Hi, I'm Emma, 30 years old from London.

//apply() --> d is similar to call(), but it accepts arguments as an array.

function introduce(age, city) {
  console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}.`);
}

const person1 = { name: "Sophia" };
introduce.apply(person1, [28, "Paris"]);
// Output: Hi, I'm Sophia, 28 years old from Paris.