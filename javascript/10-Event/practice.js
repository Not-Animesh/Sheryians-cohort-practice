//kuch bhi screen pr ho wo event listener kaam karega

//event listener ka mtlb hai ki hum kisi bhi element pr event ko listen kr skte hai aur uske according action le skte hai

//event listener ka syntax hai element.addEventListener(event, function, useCapture);


// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   h1.style.color = "red";
// });


// select the h1 first 
// realise kya hoga h1 pe , click krne pr h1 ka color red ho jayega

// h1 pe event listener lagaya hai , click event ke liye , aur jab click hoga to h1 ka color red ho jayega


// let h1 = document.querySelector("h1");

// h1.addEventListener("dblclick", function () {
//   h1.style.color = "red";
// });

// element.addEventListener("event name", function () {
//     //code
// });



// let h1 = document.querySelector("h1");

// function dblclick() {
//   h1.style.color = "red";
// }

// h1.addEventListener("dblclick",  dblclick);
// h1.removeEventListener("dblclick",  dblclick);


// let input = document.querySelector("input");

// input.addEventListener("input", function (data) {
//   console.log(data.target.value);
// });


// change event tab chalta hai jab apka koi input sselect box ya koi bhi input field ka value change hota hai aur ap usko blur kr dete ho ya enter press kr dete ho to change event chalta hai


// let sel = document.querySelector("select");

// let device = document.querySelector("#device");

// sel.addEventListener("change", function (data) {
//   console.log(data.target.value);
//   device.textContent = "Device selected is " + data.target.value;
// });


// jab bhi aap click krte ho ya koi bhi event raise krte ho to apka jo event flow hai do phases mein chalta hai

// phase 1: event top level element se niche ki taraf propagate hota hai , isko event capturing phase bolte hai

// phase 2: event bottom level element se top level element ki taraf propagate hota hai , isko event bubbling phase bolte hai

// humesha phase 1 hoti hai but wo by default band hoti hai , isliye phase 2 hi chalta hai


let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let d = document.querySelector(".d");


d.addEventListener("click", function () {
  console.log("document d clicked");
});
c.addEventListener("click", function () {
  console.log("document c clicked");
});
b.addEventListener("click", function () {
  console.log("document b clicked");
});
a.addEventListener("click", function () {
  console.log("document a  clicked");
},true);

