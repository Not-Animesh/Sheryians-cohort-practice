// let arr = [1, 2, 3, 4, 5];


// arr[2] = 10; // change the value at index 2 to 10
// console.log(arr); // should print [1, 2, 10, 4, 5]


// arr.push(6); // add 6 to the end of the array
// console.log(arr); // should print [1, 2, 10, 4, 5, 6]

// arr.pop(); // remove the last element from the array
// console.log(arr); // should print [1, 2, 10, 4, 5]

// arr.unshift(0); // add 0 to the beginning of the array
// console.log(arr); // should print [0, 1, 2, 10, 4, 5]

// arr.shift(); // remove the first element from the array
// console.log(arr); // should print [1, 2, 10, 4, 5]

// arr.splice(2, 1); // remove 1 element at index 2
// console.log(arr); // should print [1, 2, 4, 5]

// arr.splice(2, 0, 3); // add 3 at index 2
// console.log(arr); // should print [1, 2, 3, 4, 5]

// arr.slice(1, 4); // create a new array with elements from index 1 to 3
// console.log(arr.slice(1, 4)); // should print [2, 3, 4]

// arr.indexOf(3); // find the index of the first occurrence of 3
// console.log(arr.indexOf(3)); // should print 2

// arr.reverse(); // reverse the order of the elements in the array
// console.log(arr); // should print [5, 4, 3, 2, 1]

// arr.sort(); // sort the elements in the array in ascending order
// console.log(arr); // should print [1, 2, 3, 4, 5]

// arr.join(', '); // create a string from the array elements, separated by ', '
// console.log(arr.join(', ')); // should print "1, 2, 3, 4, 5"



// arr.forEach(function(element) {
//     console.log(element); // should print each element in the array
// });


//map srf tab use krna hai jab apko ek naya array banana hai pichle array ke data ke basis par

// mao dikhte hi sath mein mann mein ek blank array bna lo aur usme push krte jao


// let newArr = arr.map(function(element) {
//     return element * 2; // create a new array with each element multiplied by 2
// })

// console.log(newArr); // should print [2, 4, 6, 8, 10]


// arr.filter(function(element) {
//     return element > 3; // create a new array with elements greater than 3
// })


// console.log(arr.filter(function(element) {
//     return element > 3; // create a new array with elements greater than 3
// }));


// console.log(arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue; // sum all the elements in the array
// }));


// arr.some(function(element) {
//     return element > 3; // check if any element is greater than 3
// })

// arr.every(function(element) {
//     return element > 0; // check if all elements are greater than 0
// })

// arr.find(function(element) {
//     return element > 3; // find the first element greater than 3
// })


// let arr1 = [1, 2, 3, 4, 5];
// let [a, b, , c] = arr1; // destructuring assignment to assign values to a, b, and c
// console.log(a); // should print 1
// console.log(b); // should print 2
// console.log(c); // should print 4   

// let arr2 = [1, 2, 3, 4, 5,6,7,8,9,10];
// let arr3 = [...arr2]; // spread operator to create a new array with the same elements as arr2
// console.log(arr3); // should print [1, 2, 3, 4, 5,6,7,8,9,10]