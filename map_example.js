var mymap = new Map();
mymap.set("name","aishwariya");
mymap.set("lname","budhrani");
mymap.set("department","cse");
mymap.set(30,"age");
mymap.set(101,"John");

console.log(mymap);

mymap.delete(30);
console.log(mymap);

console.log(mymap.size);

console.log(mymap.has("names"));

console.log(mymap.get("name"));
console.log(mymap.get(101));