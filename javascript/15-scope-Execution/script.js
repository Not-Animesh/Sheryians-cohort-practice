// ======================================================
// 1. SCOPE
// ======================================================

// Scope means:
//
// "Where can I use this variable?"
//
// A variable created inside a function normally
// cannot be used outside that function.


let globalName = "Animesh";

// This variable is outside the function,
// so it can be used in many places.


// Function scope example

function scopeExample() {

  let message = "Hello from function";

  // message belongs to this function.
  // We can use it inside the function.

  console.log(message);

  // globalName is outside this function,
  // but we can still use it here.

  console.log(globalName);
}


// Try the example

document
  .getElementById("scopeBtn")
  .addEventListener("click", () => {

    scopeExample();

    showToast(
      "Scope: variables have a place where they can be used."
    );

  });


// IMPORTANT:
//
// If we try this:
//
// console.log(message);
//
// It will give an error because message
// only exists inside scopeExample().


// ======================================================
// 2. EXECUTION CONTEXT
// ======================================================

// Execution Context simply means:
//
// "The place/environment where JavaScript
// runs a piece of code."
//
// When JavaScript starts:
//
// Global Execution Context is created.
//
// When a function runs:
//
// A new Function Execution Context is created.
//
// Example:
//
// runExample()
//      ↓
// JavaScript creates a place for runExample()
//      ↓
// Code inside runExample() runs
//      ↓
// Function finishes


function runExample() {

  let name = "Animesh";

  console.log("Function is running");

  console.log(name);

}


// Button

document
  .getElementById("contextBtn")
  .addEventListener("click", () => {

    runExample();

    showToast(
      "Execution Context: JavaScript created a place to run the function."
    );

  });


// ======================================================
// 3. CLOSURE
// ======================================================

// Closure means:
//
// "A function remembers variables from the place
// where it was created."
//
// Example:
//
// createCounter()
//      ↓
// count is created
//      ↓
// inner function remembers count
//      ↓
// inner function is returned
//      ↓
// We can still use count later


function createCounter() {

  let count = 0;


  function increase() {

    count++;

    return count;

  }


  // Return the inner function
  return increase;

}


// createCounter() runs once.
//
// counter now remembers the "count" variable.

const counter = createCounter();


// Every click calls the same function.
//
// The value of count is remembered.

document
  .getElementById("countBtn")
  .addEventListener("click", () => {

    const value = counter();

    document.getElementById("countBtn").textContent =
      `Count: ${value}`;

  });


// ======================================================
// 4. TOASTER
// ======================================================

// A toast is a small message that appears on the screen.
//
// Example:
//
// "Saved successfully!"
//
// We create ONE function and can use it
// anywhere in our JavaScript.


function showToast(message) {

  const toast =
    document.getElementById("toast");


  // Change the message

  toast.textContent = message;


  // Show the toast

  toast.classList.remove("hidden");


  // Hide it after 2 seconds

  setTimeout(() => {

    toast.classList.add("hidden");

  }, 2000);

}