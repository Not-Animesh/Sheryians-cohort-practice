console.log(age);
var age = 25;

// output: undefined,  var ko hoisting ke through upar le jata hai, isliye age ki value undefined hoti hai, aur fir uske baad age ko 25 assign kar diya jata hai


// console.log(name);
// let name = "Rohit";

// output: ReferenceError: Cannot access 'name' before initialization, let ko hoisting ke through upar le jata hai, lekin usko initialize nahi karta hai, isliye name ki value undefined hoti hai, aur fir uske baad name ko "Rohit" assign kar diya jata hai


var x = 1;
{
    var x = 2;  // var is function scoped, block ki respect nahi krta hai, isliye yaha pe x ki value 2 ho jayegi
}

console.log(x);  // 2, var is function scoped, block ki respect nahi krta hai, isliye yaha pe x ki value 2 ho jayegi

let y = 1;
{
    let y = 2;  // let is block scoped, block ki respect krta hai, isliye yaha pe y ki value 1 hi rahegi
    console.log(y);  // 2, let is block scoped, block ki respect krta hai, isliye yaha pe y ki value 2 ho jayegi
}
console.log(y);  // 1, let is block scoped, block ki respect krta hai, isliye yaha pe y ki value 1 hi rahegi