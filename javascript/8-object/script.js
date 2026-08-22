// let obj ={
//     name: "Animesh",
//     age: 22,
//     city: "Bangalore"
// }

// console.log(obj.name); // should print "Animesh"


// let aa = "name";

// console.log(obj[aa]); // should print "Animesh"


// const user = {
//     name: "Animesh",
//     address: {
//         city: "Bangalore",
//         state: "Karnataka",
//         location: {
//             lat: 12.9716,
//             long: 77.5946
//         },
//     },
// };


// console.log(user.address.location);

// let { lat , long} = user.address.location;

// console.log(lat, long); // should print 12.9716 77.5946


// let obj ={
//     name: "Animesh",
//     age: 22,
//     city: "Bangalore"
// }

// for (let key in obj) {
//     console.log(key, obj[key]); // should print key and value of each property in the object
// }


// let obj ={
//     name: "Animesh",
//     age: 22,
//     city: "Bangalore"
// }

// console.log(Object.assign(obj, { age: 23, country: "India" })); // should print { name: "Animesh", age: 23, city: "Bangalore", country: "India" }


// for nested objects, agr spread operator ka use karte hai to wo sirf first level ke properties ko hi copy karega, nested objects ke properties ko nahi. wo reference krne lgta

// isliye hum log deepclone karne ke liye JSON.parse(JSON.stringify(obj)) ka use karte hai, jo ki nested objects ke properties ko bhi copy kar lega, aur reference nahi karega.

// const user = {
//     name: "Animesh",
//     address: {
//         city: "Bangalore",
//         state: "Karnataka",
//         location: {
//             lat: 12.9716,
//             long: 77.5946
//         },
//     },
// };


// jsonString = JSON.stringify(user); // convert object to string

// const user2 = JSON.parse(jsonString); // convert string to object

// console.log(user); // should print the same object as user
// console.log(user2); // should print the same object as user

// obj?.address?.location?.lat // optional chaining operator, will return undefined if any of the properties in the chain is undefined or null