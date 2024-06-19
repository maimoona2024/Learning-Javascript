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


