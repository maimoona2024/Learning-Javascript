//you can assign any string or any number to a variable without defining data type.
a = 2;    //assigned a number to a
console.log(a);
a = "Anas";  //assigned a string to a
console.log(a);
b = 10;  //assigned a number to b
console.log(b);  
console.log(b+4);  //adding 4 in the value of b
b = "Nadia";  //assigning string to b
console.log(b);



a=5;
b=6;
c=10;
console.log(a,b,c); //5 6 10


console.log("Maimoona", "is", "Learning", "Javascript."); //Maimoona is Learning Javascript.



// in c++
//age =44;
//cout<<"My age is "<<age<<endl; //My age is 44
//Now question is how is it in javascript?


age=44;
b = "My age is";
console.log(b,age);  //My age is 34
console.log("My age is",age);   //My age is 34
console.log("My age is "+age);  //My age is 34
console.log("My age is "); //My age is
console.log(age); //44
console.log("My age is "+age+" I am a student."); //My age is 44 I am a student.
console.log("My age is",age,"I am a student."); //My age is 44 I am a student.



//var let const in javascript
var f =5;
console.log(f);
f = 6;
console.log(f);


const d =7;
console.log(d);
//d = 10; //error: Assignment to constant variable.
console.log(d); //error



console.log(a);
var a = 6; //no error in redefinition
console.log(a);


let f = 5;
console.log(f);
f = 6; //no error in redefinition
console.log(f);

let g = 5;
console.log(g);
//let g = 6; //error in redefinition no need to write let again in redefinition
//console.log(g);


var b = 7;
console.log(b);
//const b = 8; //you can not declare a var variable constant in javascript
//console.log(b);
