// print no. from 1 to 10 using a for loop.

// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// print no. from 10 to 1 using a for loop.

// for (let i = 10; i > 0; i--){
//     console.log(i);
// }


// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// print even no. from 1 to 20 using a for loop

// for(let i = 1; i <= 20; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }


// print  odd no. from 1 to 15 using a for loop

// for(let i = 1; i <= 15; i++) {
//     if(i % 2 != 0) {
//         console.log(i);``
//     }
// }


// 5. print the multiplication table of 5 

// for ( let i = 1; i <=10; i++){
//     console.log(`5 x ${i} = ${5*i}`)
// }

// 6. find the sum of no. from 1 to 100 using a loop

// let sum = 0;

// for (let i = 1; i <=100; i++){
//     sum = sum + i;
// }
// console.log(sum);

// 7. print all number btw 1 to 50 that are divisible by 3

// for (i = 1; i <= 50; i++){
//     if(i % 3 == 0){
//         console.log(i);
//     }
// }

// 8. ask the user for a number and print whether each number  from 1 to that numner is even or odd 

// let val = prompt("Enter a number:");
// for (let i = 1; i <= val; i++){
//     if (i % 2 == 0){
//         console.log(`${i} is even`);
//     }
//     else {
//         console.log(`${i} is odd`);
//     }
// } 

// 9. count how many number btw 1 to 100 are divisible by both 3 and 5

// let count = 0;

// for (i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         count++;
//         console.log(i);
//     }
// }
// console.log(count);

// stop at first mulitple of 7 
// write a loop from 1 to 100
// print each no. 
// stops completely when it finds the first no. divisible by 7


// for (i = 1; i <=100; i++){
//     if(i % 7 === 0){
//         console.log(`First multiple of 7 is ${i}`);
//         break;
//     }
//     console.log(i);
// }


// skip multiples of 3
// for (i = 1; i <=30; i++){
//     if(i % 3 === 0){
//         continue;
//     }
//     console.log(i);
// }