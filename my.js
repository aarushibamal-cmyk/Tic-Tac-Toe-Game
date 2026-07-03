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

const myArr = [1,2,3,"Aarushi"];
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

