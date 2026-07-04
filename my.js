/*
const accountId = 12345;

let accountEmail = "aarushibamal@123";
var accountPassword = "12345";

accountCity = "Hisar";


console.table({
    Email: accountEmail,
    Id: accountId,
    Password: accountPassword,
    City: accountCity
});

*/
//Do not use var as it does not understand scope

// console.log(3+2);
// console.log("Aarushi");

// const myAge = 24

// console.log(myAge);

// number => 2 to power 53
// null => standalone value (is empty)
// undefined => declared but not assigned
//symbol => uniqueness


//object

// console.log(typeof "aarushi"); => string
// console.log(typeof null); => object
// console.log(typeof undefined); => undefined

/*
let age = 23

console.log(typeof age); =>Number
let myAge = "34rt"
console.log(typeof myAge); => String

let sink = Number(myAge)

let drink = null;
console.log(typeof sink); => Number
console.log(sink); => NAN
let myDrink = Number(drink)
console.log(typeof drink); => Object
console.log(myDrink); => 0

and for undefined it comes NAN and for boolean 0 for false and 1 for true */

// let isLoggedIn = " ";

// let booleanLogged = Boolean(isLoggedIn)
// console.log(booleanLogged);

//1 => true empty string > false and anything in string even space => true


//***********************Operations*******************//

// let value = 56;
// let negValue = - value;

// console.log(negValue);
// let stringVal = String((negValue))
// console.log(stringVal);

// console.log(1 + "2"); => 12
// console.log("1" + "2"); => 12
// console.log("1" + 2); => 12
// console.log("1" + 2 + 2);  => 122
// console.log(1 + 2 + "2"); => 32

//*************Comparison of Data types***********//

// console.log(3>"4"); =>false
// console.log("3">2); => true
// console.log(null >0); => false
// console.log(null==0); => false
// console.log(null>=0); => true
// console.log(null<0); => false

// === strict check also checks its data type


// Primitive
// 7 types : String , Number , Boolean , null , undefined ,Symbol, BigInt
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); => false
// const a = 234589589778327n
// console.log(a);

//Reference (Non primitive)
// Arrays , Objects , Functions

//*******************Stack And Heap Memory*************************//

//Stack Memory in Primitive and Heap Memory in Non-primitve

// let myName = "Aarushi"
// let anotherName = myName;
// anotherName = "Bamel";
/*
___________
___________
___________
___________
___________
___________   Stack Memory
*/



//************Strings****************//

// const name = "Aarushi ";
// const a = 15;
// // console.log(name+ a );
// console.log(`My name is ${name} and my number is ${a}`); // String interpolation

// const gameName = new String("Aarushi")

// console.log(gameName.toLowerCase());

// const newString = gameName.substring(0,4);
// console.log(newString);

// slice can have negative values and from reverse 
// trim to cut all the extra spaces "    aarushi   " >= "aarushi"

// console.log(gameName.replace('a', '-')) => A-rushi
// console.log(gameName.includes('aru')); => true

// split(separator, limit)

//*********************NUMBERS AND MATHS******************************//

// const score = new Number(400);
// console.log(score);
//  console.log(score.toFixed(3)); => 400.000
// const num = 45.345656
//  console.log(num.toPrecision(3)); => first 3 values 
// const num2 = 100000
// console.log(num2.toLocaleString('en-IN')); => 1,00,000;

//*****************************Maths***********************//
//console.log(Math.abs(-23)) => negative to positive;
// console.log(Math.round(23.44));=> 23
// console.log(Math.round(4.6)) => 5
// console.log(Math.ceil(4.2)); => 5
// console.log(Math.floor(4.9)); =>4
// console.log(Math.round((Math.random() * 10)+1));

// const min = 10;
// const max = 20

// console.log(Math.round((Math.random() * (max-min+1) ) + min))

//******************Date And Time************************//

// let myDate = new Date();
// console.log(myDate.toString()); =>Fri Jul 03 2026 15:00:07 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// =>
//    { Fri Jul 03 2026
// 2026-07-03T09:31:24.450Z
// 3/7/2026}
// Date is an object in javascript

// let myCreated = new Date(2008, 2 ,10);
// // console.log(myCreated.toDateString()); => Months start from 0 in JS

// let myTimeStamp = Math.round(Date.now()/1000);
// console.log(myTimeStamp);
// console.log(myCreated.getTime());

// let newDte = new Date();
// console.log(newDte.getTimezoneOffset());
// newDte.toLocaleString('default', {
//     weekday: "long"
// })
// console.log(newDte);

//***********************Arrays***************************//

// const myArr = [1,2,3,"Aarushi"];
// console.log(myArr);
// myArr[1] = myArr[3]
// console.log(myArr);

// const newArr = new Array(1,2,3,4,5,7)
// console.log(newArr);

//Methods of Array

// console.log(myArr.includes(4));
// myArr.push(6);
// console.log(myArr);
/* OUTPUT TILL NOW
{
[ 1, 2, 3, 'Aarushi' ]
[ 1, 'Aarushi', 3, 'Aarushi' ]
[ 1, 2, 3, 4, 5, 7 ]
[ 1, 'Aarushi', 3, 'Aarushi', 6 ]
// }*/
// const newArr = myArr.join()
// myArr.includes(4);
// console.log(myArr);
// console.log(newArr); => to string
// Pop for removing the value

//myArr.unshift(0) => at the start 

//Slice and Spice

// console.log("A" , myArr);
// const myN1 = myArr.slice(1,3) => does not change the original array
// console.log("B", myArr);
// console.log(myN1);
// const myN2 = myArr.splice(1,3)
// console.log(myN2);
// console.log(myArr);

/* OUT PUT IS :-
{
[ 1, 2, 3, 'Aarushi', 6 ]
B [ 1, 2, 3, 'Aarushi', 6 ]
[ 2, 3, 'Aarushi' ]
[ 1, 6 ]

} */


// let lotr = ["frodo" , "sam" , "aragon"]
// const hp = ["harry" , "Ron" , "Ginny", "Hermione"]

// lotr.push(hp);
// console.log(lotr); => [ 'frodo', 'sam', 'aragon', [ 'harry', 'Ron', 'Ginny', 'Hermione' ] ]

// lotr = lotr.concat(hp) => returns an array and does not modify the original array
// console.log(lotr)
// console.log(hp);

// const newArr = [...lotr , ...hp]; => to concat two

// console.log(newArr); => output => [
//   'frodo',    'sam',
//   'aragon',   'harry',
//   'Ron',      'Ginny',
//   'Hermione'
// ]

// const newArr = [1,2,3,[4,5,6],7,[6,8,[9,0]]]
// const myReal = newArr.flat(Infinity)
// console.log(myReal); => output => [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 8, 9,
//   0
// ]
// console.log(Array.isArray("Aarushi")) => false
// console.log(Array.from("Aarushi")); => converts to array

// console.log(Array.from({name: "aarushi"})); => []



//**********************OBJECTS IN JS**********************//

// singleton 

// object literals
// const mySym =  Symbol("key1")
// const myuser = {
//     name: "Aarushi",
//     "full Name" : "Aarushi Bamal",
//     [mySym] : "myKey1",
//     class: 12,
//     gmail: "aarushibamal@gmail.com",
//     isGirl : true,
//     lastLogin: ["monday","tuseday", "saturday"]
// }
// console.log(myuser.fullName); => undefined
// console.log(myuser["full Name"]); => "Aarushi BAMAL"
// console.log(typeof myuser.mySym); => string
// console.log(myuser[mySym]);

// myuser.name = "drinksre"
// console.log(myuser.name);
// Object.freeze(myuser) => does not let us change anything in the myuser object

// console.log(0.1 + 0.2 === 0.3); => false as 0.1 + 0.2 = 0.300000000000000 which is not equal to 0.3
// console.log(0.1 + 0.2);

// myuser.greeting = function(){
//    console.log("this is greeting");
// }
// console.log(myuser.greeting); => [Function (anonymous)]
// console.log(myuser.greeting()); => this is greeting undefined

// myuser.greeting2 = function name() {
//     console.log(`Hello ${this["full Name"]}`); => or use this.name
// }
// console.log(myuser.greeting2);
// console.log(myuser.greeting2());
/* OUTPUT IS :-
[Function: name]=> greeting2
Hello Aarushi Bamal => for greeting2()
undefined  */

//***************SINGLETON******************/

// const users =new Object()
// console.log(users); => {}
// users.id = "123abc"
// users.name = "Arushi"
// users.isLoggedIN = false
// console.log(users);

// const user2 = {
//     email : "aarushi@min.com",
//     fullName : {
//         name: "Aarushi",
//         lastName: "Bamel"
//     }
// }
// console.log(user2.fullName.lastName);  

// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2 = {
//     3: "c",
//     4: "d"
// }
// const obj3 = {obj1 , obj2}
// console.log(obj3);  => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj4 = Object.assign(obj1, obj2)
// console.log(obj4); => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj5 = Object.assign({},obj1, obj2) => same result

// const obj5 = {...obj1 ,...obj2}
/*converting an object to string 
const obj = { name: "John", age: 30 };

SON string
const str = JSON.stringify(obj);
console.log(str); // {"name":"John","age":30}

Simple string representation
console.log(String(obj)); // [object Object] */

// const users = [
//     {
//         id: 1,
//         email: "aarush"
//     },
//     {
//         id: 2,
//         email: "awiehd"
//     },
//     {
//         id: 3,
//         email: "ejkeeh"
//     }
// ]
// users[1].email
// console.log(Object.keys(myuser)); => Output datatype is array all the keys are converted into an array of strings
// console.log(Object.entries(myuser));
/* OUTPUT IS 
[
  [ 'name', 'Aarushi' ],
  [ 'full Name', 'Aarushi Bamal' ],
  [ 'class', 12 ],
  [ 'gmail', 'aarushibamal@gmail.com' ],
  [ 'isGirl', true ],
  [ 'lastLogin', [ 'monday', 'tuseday', 'saturday' ] ]
] */

// console.log(myuser.hasOwnProperty('name')); => true;
// Destructiring of objects
const course = {
    courseName: "wer",
    price: 9403,
    courseInst: "AAarushi"
}
const {price} = course
// console.log(price); => 9403
const {price : p} = course
console.log(p);

