// var, let , const - line-by-line comparison

// var a;    declare krna
// var a = 10;   declare krna + initialize krna
// var a = 12;   redeclare krna + reinitialize krna

// let a;
// let a = 10;
// const a;  // it's a problem , const must be initialized at the time of declaration
// const a = 12;

// a = 12;  it's a problem , not appreciated in const so dont use



// var a = 10;
// window mein add karta hai , global variable ban jata hai
//function scoped hota hai , block scoped nahi hota hai
//aap firse  declare kr skte ho  same name se  and error nhi ayega

var a = 10;
var a = 12;   // error nahi ayega, 
console.log(a);  // output: 12

let b = 10;
// let b = 12;   // error ayega, same name se declare nhi kr skte
// let b = 12;
console.log(b);  // output: 12

// let dulha = "Rohit";
// let dulhan = "Priyanka";

//output: 
// dulha = "haramzzada"
// 'haramzzada'
// dulha + " weds " + dulhan
// 'haramzzada weds Priyanka'

const dulha = "Rohit";
const dulhan = "Priyanka";



var k =  15;

{
    var k = 20;  // var is function scoped,  block ki respect nhi krta hai,  isliye yaha pe k ki value 20 ho jayegi
}

{
    let l = 25;  // let is block scoped, block ki respect krta hai, 
}

function abcd(){
    if (true){
        var m = 30;  // var is function scoped,  block ki respect nhi krta hai,  isliye yaha pe m ki value 30 ho jayegi
    }
}

// global scope (khule mein variable declare krna)

// function scope
// block scope{ curly space ke andar variable declare krna, but var ke liye block scope kaam nhi krta hai, var function scoped hota hai, let aur const block scoped hote hai}



// refer to notes

var x = 10;
x = 20;  // reassign krna allowed hai var mein

let y = 10;
y = 20;  // reassign krna allowed hai let mein


// Temporal Dead Zone (TDZ) - let and const ke sath hota hai, jab tak variable declare nahi hota tab tak usko access nahi kar sakte, var mein TDZ nahi hota hai

console.log(z);  // undefined, var mein TDZ nahi hota hai
var z = 10;

console.log(w);  // ReferenceError: Cannot access 'w' before initialization, let mein TDZ hota hai
let w = 10;



// Hoisting impact per type
// hoisting -> ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declare part upar chala jaata hai and uska initialization part neeche chala jaata hai, var mein hoisting hota hai, let aur const mein hoisting nahi hota hai


console.log(a);  // undefined, var mein hoisting hota hai, declare part upar chala jaata hai, initialization part neeche chala jaata hai

var a = undefined;  // declare part upar chala jaata hai, initialization part neeche chala jaata hai
a = 10;  // initialization part neeche chala jaata hai

// ********WHAT HE THINKS********


console.log(b);  //let mein bhi hoist hota hai kyuki console mein yeh bolta ki can't access 'b' before initialization

let q = 10;  //hoisting hota hai, but temporal dead zone ke karan can't access 'b' before initialization error aata hai

// ********WHAT HE THINKS********