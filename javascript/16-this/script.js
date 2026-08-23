// =====================================================
// JAVASCRIPT "this"
// =====================================================
//
// `this` tells us which object/function context
// we are currently working with.
//
// The value of `this` can change depending on
// HOW the function is called.
//
// =====================================================



// =====================================================
// 1. GLOBAL
// =====================================================

console.log("1. Global:", this);

// In a normal browser <script>:
//
// this -> window



// =====================================================
// 2. NORMAL FUNCTION
// =====================================================

function normalFunction() {

  console.log(
    "2. Normal function:",
    this
  );

}

normalFunction();

// When a normal function is called like this:
//
// normalFunction()
//
// this -> window
//
// In strict mode, it would be undefined.



// =====================================================
// 3. ES5 METHOD
// =====================================================

const user = {

  name: "Animesh",

  sayHello: function () {

    console.log(
      "3. ES5 method:",
      this
    );

  }

};


user.sayHello();

// We call:
//
// user.sayHello()
//
// The object before the dot is `user`.
//
// Therefore:
//
// this -> user



// =====================================================
// 4. ES6 ARROW FUNCTION
// =====================================================

const arrowFunction = () => {

  console.log(
    "4. Arrow function:",
    this
  );

};


arrowFunction();

// Arrow functions do NOT create their own `this`.
//
// They take `this` from the surrounding scope.
//
// In this normal browser script:
//
// this -> window



// =====================================================
// 5. NORMAL FUNCTION INSIDE ES5 METHOD
// =====================================================

const person = {

  name: "Animesh",

  show: function () {

    console.log(
      "5a. Outer method:",
      this
    );


    function insideFunction() {

      console.log(
        "5b. Normal function inside method:",
        this
      );

    }


    insideFunction();

  }

};


person.show();

// Outer method:
//
// person.show()
//
// this -> person
//
// But insideFunction() is called normally.
//
// So:
//
// insideFunction this -> window



// =====================================================
// 6. ARROW FUNCTION INSIDE ES5 METHOD
// =====================================================

const person2 = {

  name: "Animesh",

  show: function () {

    console.log(
      "6a. Outer method:",
      this
    );


    const insideArrow = () => {

      console.log(
        "6b. Arrow inside method:",
        this
      );

    };


    insideArrow();

  }

};


person2.show();

// Outer method:
//
// this -> person2
//
// Arrow function takes `this`
// from the surrounding function.
//
// Therefore:
//
// insideArrow this -> person2



// =====================================================
// 7. EVENT HANDLER
// =====================================================

const button =
  document.getElementById("testBtn");


button.addEventListener(
  "click",
  function () {

    console.log(
      "7. Normal event handler:",
      this
    );

  }
);

// When you click the button:
//
// this -> button
//
// Because the normal event handler's
// `this` is the element receiving the event.



// =====================================================
// 8. ARROW EVENT HANDLER
// =====================================================

button.addEventListener(
  "click",
  () => {

    console.log(
      "8. Arrow event handler:",
      this
    );

  }
);

// Arrow functions don't get their own `this`.
//
// So they take `this` from outside.
//
// They do NOT automatically make:
// this -> button



// =====================================================
// 9. CLASS
// =====================================================

class Person {

  constructor(name) {

    this.name = name;

  }


  showName() {

    console.log(
      "9. Class method:",
      this
    );

  }

}


const person3 =
  new Person("Animesh");


person3.showName();

// `new Person()` creates an object.
//
// person3.showName()
//
// Therefore:
//
// this -> person3
//
// And:
//
// this.name -> "Animesh"



/*
========================================================

EASY WAY TO REMEMBER
========================================================

1. Normal function

   function test() {}

   test();

   -> this = window
      (in a normal browser script)


--------------------------------------------------------

2. Object method

   user.test();

   -> this = user


--------------------------------------------------------

3. Arrow function

   () => {}

   -> takes `this` from outside


--------------------------------------------------------

4. Event handler

   button.addEventListener("click", function () {})

   -> this = button


--------------------------------------------------------

5. Arrow event handler

   button.addEventListener("click", () => {})

   -> takes `this` from outside


--------------------------------------------------------

6. Class method

   person.showName();

   -> this = person


========================================================
*/