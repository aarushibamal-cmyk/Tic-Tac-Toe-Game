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
// const course = {
//     courseName: "wer",
//     price: 9403,
//     courseInst: "AAarushi"
// }
// const {price} = course
// // console.log(price); => 9403
// const {price : p} = course
// console.log(p);

// {
//     "name": "Aarushi",
//     "age": "18",
//     "degree": "BTECH"
// }



//*******************Functions********************//



// function myName(){
//     console.log("Aarushi");   
// }
// myName();

// function add(a, b) {
//     return a + b;
// }
// const c = add(34, "56")
// console.log(c); => 3456
// console.log(typeof c); => string
// const d = add(23,"d")
// console.log(d); => 23d

// function loginUser(username = "Asa"){
//     if(username===undefined){
//         console.log("please enter a name");
//         return
//     }
//     return `${username} Just Logged in`;
// }
// const returend= loginUser("Aarushi") 
// console.log(returend);

// function calculateCartPrice(...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(2000, 4000, 5000));
// // Output = [ 2000, 4000, 5000 ]

// const user = {
//     userName: "Aarushi",
//     prices: 456
// }
// function handle(obj) {
//     console.log(`Username is ${obj.userName} and price is ${obj.price}`);
// }
// handle(user) => is prices then it shows undefined



//*******************Scopes******************//

// let a = 300
//BLOCK SCOPE
// if (true) {
//     let a = 10
//     const b = 20
//     // console.log(a); =>10
// }

// console.log(a); => it says a is not defined
// console.log(b); => it say b is not defined
// console.log(c); => it prints c
// console.log(a);


//NESTED SCOPE

// function one() {
//     const userName = "Aarushi"
//     function two() {
//         const website = "youtbw"
//         console.log(userName);
//     }
//     // console.log(website); => error
//     // two() =>Aarushi
// }
// one()
// if (true) {
//     const userName = "ADEF"
//     if (userName === "ADEF") {
//         const website = "hthe"
//         console.log(userName + website);
//     }
// }
// ++++++++++++++++++INTERESTING++++++++++++++++/////

// addOne(5) => no erorr
// function addOne(num){
//     return num+1
// }

// addTwo(6) => Shows error
// const addTwo = function (num) {
//     return num+2
// }




//*********************This and arrow function************************/

// const user = {
//     userName: "Aarushi",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.userName}`);
//         console.log(this); // => OUTPUT
// Aarushi
// {
//     userName: 'Aarushi',
//         price: 999,
//             welcomeMessage: [Function: welcomeMessage]
// }

//     }
// }
// user.welcomeMessage()=> "Aarushi"
// user.userName = "aarhi"
// user.welcomeMessage() => "aarhi"
// user.welcomeMessage()
// console.log(this); => {}
//BUT IN WINDOWS OR BROWESER THIS SHOWS A WINDOW OBJECT AS IT IS A GLOBAL OBJECT


// function one(){
//     let userName ="Sd"
//     console.log(this.userName);
// }


// one() => gives a lot of values

// const one = () => {
//     let name = "ert"
//     // console.log(this.name); => undefined
//     // console.log(this); => {}
// }
// one()

// const add = (num1, num2)=> {
//     return num1 + num2
// }
// const newdu = (num1,num2) => (num1+num2) // implicit return
// const arr = [1,22,3,4,5]

// arr.forEach(()=>{
//     console.log("hii");
// })

// IMMEDTAITELY INVOKED FUNCTION EXPRESSIONS IIFE

// (function one(){
//named IIFE
//     console.log("Connected");
// })(); USE SEMICOLON

// ((name) => {
//     console.log(`23 ${name}`);
// })("aaeruhi");


//*****************CONTROL FLOW**********************//

// const isLoggedIn = true
// const temperature= 41
// if(isLoggedIn){
//     console.log(`${isLoggedIn} yes`);
// }
// if(2==="2"){
//     console.log("executed");
// }else if(2=="2"){
//     console.log("not");
// }

// if(temperature<50){
//     console.log("(._.)");
// }else{
//     console.log("(.-.)"); 
// }

// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`${power}`);
// }

// const balance= 1000
// if(balance>500){
//     console.log(`balance: ${balance-500}`);
// }
// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<2000){
//     console.log("leess than 20000000");
// }
// else if(balance<5000){
//     console.log("5000");
// }

// IF 2ND ELSE MATCHES THEN IT ENDS THERE AND DOES NOT CHECK FOR THE OTHER CONDITIONS

// const userLoggedIn = true;
// const debitCard = true;
// if(userLoggedIn&& debitCard){
//     console.log("allowed to shop");
// }else if(userLoggedIn && debitCard == true){
//     console.log("Allowed to see only");
// }
// else{
//     console.log("First login");
// }n

// switch (balance) {
//     case 500:
//         console.log("less than 500")
//         break;
//     case 1000:
//         console.log("less than 1000")
//         break;
//     case 400:
//         console.log("less than 400")
//         break;
//     default:
//         console.log("not true");
//         break;
// }

//*********TRUTHY AND FALSY*************//

// const email = "drink"
// const email2 =""
// if(email){
//     console.log("yess");
// }// YES

// if(email2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }//FALSE

// if([]){
//     console.log(true);
// } //YES


//falsy
// false , 0 , -0 , BigInt 0n , "" , null undefined ,NAN

//truthy
// [], "0", " ","false", ,{} , function(){},

//Nullish Coalescing Operator (??) : null undefined

// let val1
// // val1 = 5??10 =>5
// val1 = null??10 => 10
// val1 = undefined ?? 15 =>15
// val1 = null??10??20 =>10
// console.log(val1);

//terniary operator

// conditon? true : false
// const price = 800
// price>200 ? console.log(true) : console.log(false); => true


// FOR , DO WHILE LOOPS
// const array = [45,67,8,91,2,456,6768,5,987]
// for (let i = 0; i < array.length; i=i+2) {
//     const element = array[i];
//     console.log(`[${i}: ${element}]`);
// }
// for (let i = 0; i < 4; i++) {
//    for (let j = 0; j < 5; j++) {
//     console.log(i,j);

//    }
// }

// break and continue

// for (let index = 1; index < 10; index++) {
//     if (index == 5) {
//         console.log("detected", index);
//         break;
//     }
//     console.log(index);
// }
// 1
// 2
// 3
// 4
// detected 5

// for (let index = 1; index < 10; index++) {
//     if (index == 5) {
//         console.log("detected", index);
//         continue;
//     }
//     console.log(index);
// }
// 1
// 2
// 3
// 4
// detected 5
// 6
// 7
// 8
// 9

// WHILE LOOP
let i = 0;
// while (i != 10) {
//     console.log(i);
//     i++;
// }
// let myArr = ["frodo", "aaragon" , "gimli", "legolas"]
// while(i< myArr.length){
//     console.log("Name is:" , myArr[i]);
//     i++;
// }
// do {
//     console.log(i);
// } while (i==0);

// FOR OF these loops are specific loops

// ["", "", ""]
// [{},{},{}]

// const arr = [1,2,3,45,67]
// for (const element of arr) {
//     console.log(element);
// }

// const greetings = "Hello Aarushi";
// for (const greet of greetings) {
//     console.log(greet);
// }

// MAPS

// const map = new Map()
// map.set('IN',"INDIA")
// map.set('Fr',"France")
// map.set('GR',"Germany")
// console.log(map);
// for (const [element,val] of map) {
//     console.log(element, "-:", val);  
// }

// for object its does not work


// const myObj = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     sw: "swift"
// }

// for (const key in myObj) {
//     console.log(key);
// } // output is js cpp rb sw

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }
// => js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// sw shortcut is for swift

// const myarr = ["js", "java","ruby","python"]

// for (const key in myarr) {
//    console.log(key);
// } //OUTPUT 0,1,2,,3

// for (const key in myarr) {
//    console.log(myarr[key]);
// } => values;

// MAP IS NOT ITERATABLE SO FOR IN DOES NOT WORK

//****************FOR EACH LOOP************************ */
// const coding = ["js", "java", "python", "reddit", "cpp", "html", "css"]
// coding.forEach(e => {
//     console.log(e);
// });

// coding.forEach( d =>{

// })
// coding.forEach(function (e){

// })

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

// coding.forEach((item,index)=>{
//     if(index<4){
//         console.log(item,index);
//     }
//     console.log(index);
// })

// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values); => undefined
// For each never return even if we write return

// const nums = [1, 2, 3, 4, 5, 6, 9, 7, 8, 10]
// const newnum = nums.filter((item) => {
//     return item > 5
// })
// console.log(newnum); // 6 7 8 .... 10

// IF RETURN IS NOT EXPLICIT THEN [] EMPTY ARRAY IS RETURNED

// const nums1 = []

// nums.forEach((item) => {
//     if (item > 5) {
//         nums1.push(item);
//     }
// })
// console.log(nums1);

// const books = [
//     { title: "Book one", genre: "fiction", publish: 1981 },
//     { title: "Book two", genre: "history", publish: 1984 },
//     { title: "Book three", genre: "science", publish: 1921 },
//     { title: "Book four", genre: "fiction", publish: 1917},
//     { title: "Book five", genre: "Non-Fiction", publish: 1900 },
//     { title: "Book six", genre: "fiction", publish: 1931 },
//     { title: "Book seven", genre: "History", publish: 1966 },
//     { title: "Book eight", genre: "Science", publish: 2008 },
//     { title: "Book nine", genre: "fiction", publish: 2000 }
// ]

// const myBook = books.filter((item)=>{
//    return item.genre == "fiction"
// })
// console.log(myBook);
// const book2 = books.filter((item)=>{
//     return (item.publish>=1989 && item.genre == "fiction")
// })
// console.log(book2);


// MAPS
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const new1 = myNums.map((num)=> num+10);
// console.log(new1);

// const num1 = myNums.map((item) => {
//     return item * 10
// }).map((item) => {
//     return item + 1
// }).filter((item) => item > 45)
// console.log(num1);


// ***************REDUCE METHOD***********************//

// const arr = [1, 2, 3, 4]
// const initialVal = 0;
// const sumInitial = arr.reduce((acc, curr) => {
//     console.log(acc, "->", curr);
//     return acc + curr
// }, initialVal)
// console.log("total is: ", sumInitial);

// const shoppingCart = [
//     { itemName: "js course", price: 2999 },
//     { itemName: "ds course", price: 299 },
//     { itemName: "python course", price: 2345 },
//     { itemName: " aiml course", price: 8769 },
//     { itemName: "ai course", price: 9999 },
// ]
// const myTotal = shoppingCart.reduce((acc,curr)=>{
//     return acc + curr.price;
// },0)
// console.log("Your total is: $",myTotal);




//*********DOM (DOCUMENT OBJECCT MODEL)************//


// title.innerHTML
// 'Dom learning on chai aur code<span style="display: none;"> test text</span>'
// title.textContent
// 'Dom learning on chai aur code test text'
// title.innerText
// 'Dom learning on chai aur code'

// document.querySelector('ul')
// <ul>​…​</ul>​
// const myul = document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li style=​"background-color:​ pink;​ color:​ blue;​">​…​</li>​::marker​"JS"</li>​
// const green = myul.querySelector('li')
// undefined
// green.style.backgroundColor="pink"
// 'pink'
// myul.querySelector('li').style.colo
// undefined
// myul.querySelector('li').style.color = "blue"
// 'blue'



// document.getElementsByClassName("list-item")
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// 0
// : 
// li.list-item
// 1
// : 
// li.list-item
// 2
// : 
// li.list-item
// 3
// : 
// li.list-item
// length
// : 
// 4
// [[Prototype]]
// : 
// HTMLCollection
// const tempLi = document.getElementsByClassName("list-item")
// undefined
// Array.from(tempLi)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]
// 0
// : 
// li.list-item
// 1
// : 
// li.list-item
// 2
// : 
// li.list-item
// 3
// : 
// li.list-item
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)


const myparent = document.querySelector('.parent')
console.log(myparent);
