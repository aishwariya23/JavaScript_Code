
var grade = 'A';
var result = ' ';
switch (grade) {
    case 'A': result += 10; //result = result + 10;result =10
    case 'B': result +=  9; //result = result + 9; 10 9 
    case 'C': result += 8; 
    default: result +=  0;
} console.log(result); //10 9 8 0