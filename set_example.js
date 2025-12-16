var myset = new Set();
console.log(myset);

var my_arr = [10,20,30,40];
var myset1 = new Set(my_arr);
console.log(myset1);
//convert set to array
var convert_arr = Array.from(myset1);
console.log(convert_arr);


var myset2 =new Set([10,20,50,40,20]);
console.log(myset2);

//Set operations
myset.add("hello");
myset.add("World");
myset.add("byee");
myset.add("everyone");
myset.add("hello");
console.log(myset);

myset.delete("everyone");
console.log(myset);

//myset.clear();
//console.log(myset);
console.log(myset.has("byee"));

console.log(myset.size);

for(var i of myset)
{
    console.log(i);
}

var obj1=[10,20,30];
var obj2 = [10,50,40];
var set_ex = new Set();
set_ex.add(obj1);
set_ex.add(obj2);
console.log(set_ex.size);
console.log(set_ex);