//data types
//data ka types

// 12 harsh true {} [] () null undefined NaN symbol bigInt


// primitive data types - number, string, boolean, null, undefined, symbol, bigInt

//aisi saari value jinko coy krne par tumko ek real copy mil jaate

// non-primitive data types - object, array, function

// reference - inko copy krne par real copy nahi milegi but apko reference milega parent ka

//array, object, function
//[] , {} , ()


// let a = [ 1, 2, 3];
// let b = a; // reference copy

// b.pop(); // reference copy hone ki wajah se a me bhi change aa jayega

// console.log(a);
// console.log(b);


// '' single quote
// "" double quote
// `` backticks - template literals

// let a = true;
// let b = false;

// console.log(a);
// console.log(b);

// null ka matlab hai apne jaan boojh kar koi value nahi di

// undefined ka matlab ki aapne ek variable banaya and usey value nahi di toh jo value by default mili wo hai undefined

 //symbol - unique immutable primitive value

 //future mein hum koi libraries use karenge ab is case mein un libraries mein kai baar kuchh fields hoti hai jinse similar hum bhi bna dete hai aur galti se humari banaai hui fields us library ki original fields ko change kar deta hai 
 // is case mein symbol ka use hota hai kyunki symbol unique hota hai toh aapko pata chal jayega ki ye field aapne banayi hai ya library ne banayi hai

//  let shelljs = {
//     uid: 12,
//     model: 'Dell',

//  }

//  shelljs.uid = 15; // is case mein shelljs ki original uid change ho jayegi

//  console.log(shelljs);


//  let obj = {
//     uid: 1,
//     name: 'Harsh',
//     age: 22,
//     email: "test@test.com",

//  };

// let u1 = Symbol('uid'); // unique symbol
// console.log(obj[u1] = 12); // is case mein obj ki original uid change nahi hogi



// bigInt - large integers ke liye use hota hai

// Number.MAX_SAFE_INTEGER
// 9007199254740991

// Number.MIN_SAFE_INTEGER
// -9007199254740991

// let a = 9007199254740991n; // bigInt literal
// a = a + 1n; // bigInt addition
// console.log(a); // 9007199254740992n
// a = a + 1; // bigInt aur number ka addition nahi hota hai, is case mein error aayega
// console.log(a);


// let d = [ 1, 2, 3, 4, 5];
// let e = d; // reference copy

// e.push(6); // reference copy hone ki wajah se d me bhi change aa jayega

// console.log(d);
// console.log(e);

// let a = {
//     name: 'Harsh',
// }
// let b = a; // reference copy
// b.name = 'Rahul'; // reference copy hone ki wajah se a me bhi change aa jayega

// console.log(a);
// console.log(b);


// Dynamic typing - js mmein static typing nahi hai and yaha par dynamic typing jiska matlab hai aap data ko change kr skte ho kyuki yaha par dynamic data types hote hai

let c = 12;
console.log(c);

c = 'Harsh';
console.log(c);

//typeof quirks - js mein kuchh aise cases hote hai jahan par typeof operator expected output nahi deta hai, is case mein humko pata hona chahiye ki ye kya hai aur iska reason kya hai

typeof c; // string
typeof 12; // number
typeof true; // boolean
typeof null; // object (ye js ka ek bug hai, null ko object return karta hai)
typeof undefined; // undefined
typeof Symbol('uid'); // symbol
typeof 9007199254740991n; // bigInt
typeof NaN; // number (ye bhi js ka ek bug hai, NaN ko number return karta hai)


//type coercion (== vs ===) - concept jismein aapka ek type automatically convert ho jaayega 

// "5" + 1 // "51" (string concatenation)
// "5" - 1 // 4 (number subtraction)
// "5" * 2 // 10 (number multiplication)
// "5" / 2 // 2.5 (number division)

// concatenation - jab aap string aur number ko add karte ho toh wo string concatenation kar deta hai, is case mein number ko string mein convert kar deta hai

// "5" - 1 // 4 (number subtraction) - is case mein string ko number mein convert kar deta hai

//truey and falsy values

// truey values - aise values jinko boolean mein convert karne par true milta hai
// falsy values - aise values jinko boolean mein convert karne par false milta hai

!!0; // false
!!1; // true
!!""; // false
!!"Hello"; // true
!!null; // false
!!undefined; // false
!!NaN; // false
!![]; // true
!!{}; // true


// in short, falsy values - 0, "", null, undefined, NaN document.all 
//all other values are truey values

if(null){
    console.log("This is true");
}

if(-1){
    console.log("This is also true");
}