// what's the diff btw func declaration and func expression?
// The main differences between function declarations and function expressions in JavaScript are:
// 1. **Syntax**:
//    - Function Declaration:
//      ```javascript
//      function myFunction() {
//          // function body
//      }
//      ```
//    - Function Expression:
//      ```javascript
//      const myFunction = function() {
//          // function body
//      };
//      ```

//      function declaration hoist hote hai and function expression hoist nahi hote hai.


//  convert this func into an arrow func

//  function multiply(a,b){
//     return a*b;
//  }

// let multiply = (a, b) => {
//     return a * b;
// }

// use rest parameter to accept any number of scores and return the total 

// function getScores(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total += val;
//     })
//     return total;
//     // console.log(score);
// }

// console.log(getScores(10, 20, 30, 40, 50)); // should return 150


// write a bmi calculator function that takes weight in kilograms and height in meters as parameters and returns the BMI value. The formula for BMI is weight / (height * height).

// function calculateBMI(weight, height){
//     return weight / (height * height);
// }

// console.log(calculateBMI(70, 1.75).toFixed(2)); // should return approximately 22.86



// function discountCalculator(discount){
//     return function(price){
//         return price * (1 - discount);
//     }
// }

// let discounter = discountCalculator(0.1); // 10% discount
// console.log(discounter(100)); // should return 90


