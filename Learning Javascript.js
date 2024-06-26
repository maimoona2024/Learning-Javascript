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


//Operators in Javascript

let firstNum = 5;
let secondNum = 7;
console.log(firstNum + secondNum);  //12
console.log(firstNum - secondNum);  //-2
console.log(firstNum * secondNum);  //35
console.log(firstNum / secondNum);  //0.7142857142857143
console.log(firstNum % secondNum); //5
console.log(firstNum**secondNum); //78125 **is the power operator here 5^7 = 78125


var b = 7;
console.log(b);
//const b = 8; //you can not declare a var variable constant in javascript
//console.log(b);





a = 1;
b = 3.23;
c = "Sanam";
d = 'c';
f = true;
//finding data types by first method.
console.log(a,"is a", typeof(a));
console.log(b,"is a", typeof(b));
console.log(c,"is a", typeof(c));
console.log(d,"is a", typeof(d));
console.log(f,"is a", typeof(f));//finding data types by second method.
console.log(); //for next line
console.log(a,"is a", typeof a);
console.log(b,"is a", typeof b);
console.log(c,"is a", typeof c);
console.log(d,"is a", typeof d);
console.log(f,"is a", typeof f);


//In  javascript you can type string in single quotes
console.log('Javad');





//Conditions in javascript
age = 2;
if(age>=18) console.log("Older");
else console.log("Younger");


// person can vote or not
age = 19;
if(age>=18) console.log("You can vote.");
else console.log("You can't vote.");

//even or odd number
num = 8;
if(num%8==0) console.log(num,"is Even.");
else console.log(num, "is Odd.");




num1 = 24
if(num1>=100 && num1<=999) console.log("Three digit number.");
else console.log("Not a Three digit number.");

//== equal operator: it answers in true or false. it checks only value.
a = 10;
b = 10;
console.log(a==b);   //true

a = 10;
b = '10';
console.log(a==b);   //true
// === equal operator checks data type and value both
console.log(a===b);   //false

//*************Loop in js************
for(i = 1; i<=10; i++) {
    console.log(i);
}

for(let i = 1; i<=10; i++) {
    console.log(i);
}

for(var i = 1; i<=10; i++) {
    console.log(i);
}
//while loop in js to print 10 to 20.
let j = 10;
while(j<=20) {
    console.log(j);
    j++;
}
//do- while loop in js to 21 to 30.
let k = 21;
do{
    console.log(k);
    k++;
}
while(k<=30);






array = [1,2,3,4]; //[ 1, 2, 3, 4 ]
console.log(array);
console.log(array[0]);
console.log(array.length);
for(let i =0; i<array.length; i++) {
    console.log(array[i]);
}
//adding an element in last of array in js
array.push(10);
console.log(array); //[ 1, 2, 3, 4, 10 ]
//removing last element from array in js
array.pop();
console.log(array); //[ 1, 2, 3, 4 ]
//adding an element in starting of an array in js
array.unshift(3); //unshift mean to add
console.log(array); //[ 3, 1, 2, 3, 4 ]
//removing an element in starting of an array in js
array.shift(); //shift mean to remove
console.log(array); //[ 1, 2, 3, 4 ]



//const array you can insert or change any element but you cannot reassign const array any different value
const arr = [2,3,4,5];
arr[0]= 1;
console.log(arr);

//replacing any element in array in js
let cities = ["Karachi", "Multan", "Sahiwal"];
cities[3] = "Gujranwala"; //adding element at index 3 in array.
console.log(cities);
cities[0] = "Hyderabad"; //replacing element at index 0 in array.
console.log(cities);
//two-D array in js
arr2 = [[1,2,3],[4,5,6]];
console.log(arr2); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]










//*****************BuiltIn functions on string****************************
let a = "Pakistan is a beautiful country.";
console.log(a,a.length);
console.log(a[4]); //s is on index 4
for(let i =0; i<a.length; i++) {
    console.log(a[i]);
}
for(const ele of a) { //for of loop 
    console.log(ele);
}
console.log(a.toUpperCase()); // PAKISTAN IS A BEAUTIFUL COUNTRY. (U and C are capital)
console.log(a.toLowerCase()); // pakistan is a beautiful country. //L and C are capital
let b = "   India is a big country.   ";
console.log(b,b.trim()); //it will just remove space in corner of string b.
//index of function can find index no of any character in string.
console.log(b.indexOf('n')); //4 
//lastIndexOf() function can find index from last of string
console.log(b.lastIndexOf('b')); //14
//charAt() builtin function will find character at any index
let c = "Cat";
console.log(c[2]);
console.log(c.charAt(2));
//slice builtin function will cut string from where you want to cut
let g = "Giraffe";
console.log(g.slice(3));  //affe
//slice builtin function will cut string from any index to any index.
let name = "Maimoona";
console.log(name.slice(3,8)); //moona index 3 and 8 will be included

//string to array with split function
//splitting on the bases of space.
let m = "Pakistan is a beautiful country.";
console.log(m.split(' ')); //[ 'Pakistan', 'is', 'a', 'beautiful', 'country.' ]
//by using for loop
for(const ele of m) {
    console.log(ele)
}
//splitting on the bases of comma(,)
let c = "India, Pakistan, America, NewYork";
console.log(c.split(',')); //[ 'India', ' Pakistan', ' America', ' NewYork' ]










//***********************TEMPLATE LITERAL IN JS VERY IMPORTANT*****************
let a = "Physics book is of ";
let b = 2020;
console.log(`My ${a} Dr Saif ${b}`); //My Physics book is of  Dr Saif 2020
//**************PROMBLEMS IN DOUBLE QUOTES*********************************
// What if you want to pring Paki"stan?
let p = "Paki\"stan" //use \to pring above string.
console.log(p); //Paki"stan
//second method
console.log(`Paki"stan`);


//**************************Objects in JavaScript************************


let student = {
    Name: "Dilawar", //no space should be in variable name.
    FatherName: "Hussain",
    Class: "Eight",
    Section: "C",
};
/* 
{
  Name: 'Dilawar',
  FatherName: 'Hussain',
  Class: 'Eight',
  Section: 'C'
}
*/
console.log(student);
console.log(student.Name); //Dilawar
console.log(student.FatherName); //Hussain
console.log(student.Class); //Eight
console.log(student.Section); //C
student = {
    Name: "Dilawar", //no space should be in variable name.
    "Father Name": "Hussain",
    Age: 18,
    Class: "Eight",
    Section: "C",
};
console.log(student);
//Methods to access members from object
console.log(student['Class']); //Eight
console.log(student['Name']);  //Dilawar
//accessing all members of objects with comma separation.
console.log(student.Name,student['Father Name'],student.Class, student.Section)//Dilawar Hussain Eight C



//updating class in student object;
student.Class = "Nine"; //updating class in object
console.log(student.Class); //Nine
student.Age = 20; //updating age in object
console.log(student.Age); //20


//For in loop in objects in js
let train = {
    Name: "Shalimar",
    Arriaval: "09:00",
    Departure: "02:00",
    From: "Sahiwal",
    To: "Islamabad",
};
//accessing keys of object train.
for(const key in train) {
    if(Object.hasOwnProperty.call(train,key)) {
        console.log(key);
    };
};
/*  OUTPUT:
Name
Arriaval
Departure
From
To
*/
//now accessing only values of object train.
for(const key in train) {
    if(Object.hasOwnProperty.call(train,key)) {
        console.log(train[key]);
    };
};
/* 
Shalimar
09:00
02:00
Sahiwal
Islamabad
*/
//now accessing both keys and values of object train.
for(const key in train) {
    if(Object.hasOwnProperty.call(train,key)) {
        console.log(key, train[key]);
    };
};
/* 
Name Shalimar
Arriaval 09:00
Departure 02:00
From Sahiwal
To Islamabad
*/



let train = {
    Name: "Shalimar",
    Arriaval: "09:00",
    Departure: "02:00",
    From: "Sahiwal",
    To: "Islamabad",
};
//you can also access data member with for in loop without if condition.
for(const key in train) {
        console.log(key, train[key]);
};
/*  OUTPUT
Name Shalimar
Arriaval 09:00
Departure 02:00
From Sahiwal
To Islamabad
*/















//**************************FUNCTIONS IN JS*****************************
function oneTonine(n) //function keyword is must for function.
{
    for(i = 0; i <=n; i++) {
        console.log(i);
    }
    console.log("*********************************");
}
oneTonine(10);
oneTonine(3);
oneTonine(9);


//Math.abs() function convert negative answer to positive
let a = -2;
let b = 4;
console.log(Math.abs(a*a*a)+Math.abs(b*b*b)); //72 as you can see answer is positive.

//now doing the same thing with function
function add(c,d) {
    let e = Math.abs(c*c*c) + Math.abs(d*d*d);
    console.log(e);
}
add(2,3); //35
//*************Math function in js*************
//Math.abs() function convert negative value to positive.
console.log(Math.abs(-2)); //2
//Math.max() find maximum value;
console.log(Math.max(10,20,30)); //30
//Math.min() find minimum value between numbers
console.log(Math.min(10,20,1,-2)); //-2
//Math.pow() function find power of a to b.
console.log(Math.pow(2,2)); //4
//Math.sqrt() find the square root of the given number.
console.log(Math.sqrt(9)); //3
//Math.cbrt() used to find cube root
console.log(Math.cbrt(729)); //9
//Math.log() is used to find log of numbers
console.log(Math.log10(10)); //1
console.log(Math.log(27)); //3.295836866004329
//Math.floor() is used to remove extra numbers after decimal.
console.log(Math.floor(3.142)) //3
console.log(Math.floor(3.9)) //3
console.log(Math.floor(-2.3)); //-3
console.log(Math.floor(6.8));  //6
console.log(Math.ceil(7.9));  //8  //complete round off

console.log(Math.random()); //it generates random number between 0 and 1.
console.log(Math.floor(Math.random()*10)); //now it generates random number between 0 to 9.
console.log(Math.floor(Math.random()*11)); //now it generates random number between 0 to 10.
console.log() //for next line.

console.log(Math.floor(Math.random()*21)-10); //now it generates random number between -10 to 10.

console.log() //for next line

if(Math.random() < 0.5) {
    console.log("Hello");
}
else {
    console.log("Bye");
}





//*********************************************SET TIME OUT FUNCTION*********************************************
//call back function ek esa function hota hai jo ek function main pas hota hai.


function Product(a,b,c) {
    return a*b*c;
}
function fun(x,y) {
    return x+y;
}
console.log(fun(Product(2,4,3),2));


function Product(a,b,c) {
    return a*b*c;
}
function fun(x,y) {
    let a = x(2,4,3);
    console.log(a+y);
}
fun(Product,2);



set time out in js
//print 1 to 10 with delay of 1 sec after each print
function Hello() {
    console.log("Hello!");
}
function Bye() {
    console.log("Bye!");
}
Bye();
//in setTimeout function first call function in setTimeout function and then seconds multiply by 1000
setTimeout(Hello,10*1000); //printing hello after 10 seconds of bye.


setTimeout function printing all after 3 seconds of each print.

setTimeout(function(){
    console.log("Hello");
},3*1000);
setTimeout(function(){
    console.log("world");
},6*1000);
setTimeout(function(){
    console.log("I am learning JavaScript.");
},9*1000);

//below for loop is printing counting beautifully 1 to 10 after each second there is one second delay.
for(let i = 1; i <= 10; i++) {
    setTimeout(function(){
        console.log(i);
    },i*1000)
}
//below code is printing counting 1 to 30 after half second delay.
for(let i = 30; i >= 1; i--) {
    setTimeout(function(){
        console.log(i);
    },i*500)
}
//printing backward counting from 10 to 1
for(let i = 1; i<=10; i++) {
    setTimeout(function(){
        console.log(11-i);
    },i*200)
}















//generating random number after a second delay between 0 to 9
for(let i = 0; i<=10; i++) {
    setTimeout(function(){
    console.log(Math.floor(Math.random()*10));
},i*1000)
}











//****************************************ARRAY(MAP,FILTER,REDUCE)***********************************************************
let arr = [1,2,3,4];
console.log(arr);
let brr = []; //empty array in js
for(const element of arr) {
    brr.push(element*2); //pushing arr element in brr after multiplying each element by 2.
};
console.log(brr);


let arr = [1,2,3,4];
console.log(arr);
let brr = []; //empty array in js
for(const element of arr) {
    brr.push(element*element); //pushing arr element in brr after finding square of each element.
};
console.log(brr);



let arr = [1,2,3,4];
console.log(arr);
let brr = []; //empty array in js
for(const element of arr) {
    brr.push(element); //pushing arr element in brr
};
console.log(brr);


let arr = [1,-2,-3,4];
console.log(arr);
let brr = []; //empty array in js
for(const element of arr) {
    brr.push(Math.abs(element)); //pushing arr element in brr after converting negative number to positive number
};
console.log(brr);


function twice(ele) {
    return 2*ele;
}
function square(ele) {
    return ele * ele;
}
function add(ele) {
    return ele + 10;
}

let array = [1,2,3,4];
console.log(array);
let barray = array.map(function (ele) {
    return ele + 10;
});
console.log(barray);
