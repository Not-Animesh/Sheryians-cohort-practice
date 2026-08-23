/*
  CALLBACKS — BEGINNER JAVASCRIPT FILE
  ------------------------------------
  Open callback.html in a browser.

  The goal of this file is not to be short.
  It is deliberately verbose so you can read, edit, and experiment.
*/


/* ============================================================
   SECTION 1 — NORMAL FUNCTIONS
   ============================================================

   A function is a reusable block of code.

   function sayHello() {
     console.log("Hello");
   }

   sayHello();

   A callback is simply a function that is passed to another
   function.

   IMPORTANT:
   These are different:

   greet       -> pass the function itself
   greet()     -> call the function immediately
*/


function greet(name) {

  return `Hello, ${name}!`;

}


function runFunction(functionToRun) {

  const result = functionToRun("Animesh");

  console.log(result);

}


runFunction(greet);



/* ============================================================
   SECTION 2 — CALLBACK IN A SIMPLE SYNCHRONOUS FUNCTION
   ============================================================ */


function calculate(a, b, callback) {

  const answer = a + b;

  callback(answer);

}


calculate(10, 20, function (result) {

  console.log("The answer is:", result);

});


/*
  Notice the flow:

  1. calculate(10, 20, callback) starts.
  2. answer becomes 30.
  3. callback(30) is called.
  4. The anonymous function receives 30.

  Nothing asynchronous has happened yet.

  A callback does NOT automatically mean asynchronous.
*/



/* ============================================================
   SECTION 3 — ASYNCHRONOUS CALLBACK
   ============================================================ */


function waitAndSay(message, delay, callback) {

  setTimeout(function () {

    callback(message);

  }, delay);

}


console.log("A");


waitAndSay("B", 1000, function (message) {

  console.log(message);

});


console.log("C");


/*
  Expected order:

  A
  C
  B

  Why?

  setTimeout starts a timer and JavaScript continues.

  When the timer is finished,
  the callback is allowed to run.

  Think:

  "Start this work."

  "Don't stop everything while waiting."

  "When it is done, call this function."
*/



/* ============================================================
   SECTION 4 — ERROR-FIRST CALLBACK
   ============================================================

   A common callback convention is:

   callback(error, result)

   If there is an error:

     callback(error, null)

   If successful:

     callback(null, result)
*/


function getUser(userId, callback) {

  setTimeout(function () {

    if (userId === 1) {

      const user = {

        id: 1,

        name: "Alex",

        role: "Student"

      };


      callback(null, user);

      return;

    }


    callback("User not found", null);

  }, 1000);

}


getUser(1, function (error, user) {

  if (error) {

    console.error(
      "Something went wrong:",
      error
    );

    return;

  }


  console.log("User:", user);

});


/*
  Try changing:

  getUser(1, ...)

  to:

  getUser(99, ...)

  You will see the error branch.
*/



/* ============================================================
   SECTION 5 — CALLBACK HELL DEMO
   ============================================================ */


function login(username, callback) {

  setTimeout(function () {

    callback(null, {

      id: 7,

      username: username

    });

  }, 500);

}


function getProfile(user, callback) {

  setTimeout(function () {

    callback(null, {

      userId: user.id,

      name: "Alex",

      city: "Delhi"

    });

  }, 500);

}


function getOrders(profile, callback) {

  setTimeout(function () {

    callback(null, [

      {
        id: 101,
        total: 499
      },

      {
        id: 102,
        total: 799
      }

    ]);

  }, 500);

}


function getFirstOrder(orders, callback) {

  setTimeout(function () {

    callback(null, orders[0]);

  }, 500);

}



login("alex", function (loginError, user) {

  if (loginError) {

    console.error(loginError);

    return;

  }


  getProfile(user, function (profileError, profile) {

    if (profileError) {

      console.error(profileError);

      return;

    }


    getOrders(profile, function (ordersError, orders) {

      if (ordersError) {

        console.error(ordersError);

        return;

      }


      getFirstOrder(orders, function (orderError, order) {

        if (orderError) {

          console.error(orderError);

          return;

        }


        console.log(
          "Final order:",
          order
        );

      });

    });

  });

});


/*
  This works.

  The problem is readability.

  login
    └── profile
          └── orders
                └── first order

  Promises let us write this as a chain instead.
*/



/* ============================================================
   SECTION 6 — INTERACTIVE EXAMPLE FOR THE HTML PAGE
   ============================================================ */


const runButton =
  document.getElementById("runBasic");


const output =
  document.getElementById("basicOutput");



function printOutput(text) {

  const line =
    document.createElement("div");

  line.textContent = text;

  output.appendChild(line);

}



runButton.addEventListener(
  "click",
  function () {

    output.innerHTML = "";


    printOutput("1. Start");


    setTimeout(function () {

      printOutput(
        "3. Timer finished after 2 seconds"
      );

    }, 2000);


    printOutput("2. End");

  }
);



/* ============================================================
   SECTION 7 — PRACTICE FUNCTIONS
   ============================================================ */


/*
  Exercise 1:

  Create a function:

    multiply(a, b, callback)

  It should calculate a * b and send
  the answer to callback.

  Example:

    multiply(5, 4, function (answer) {
      console.log(answer);
    });

  Expected:

    20
*/


function multiply(a, b, callback) {

  const result = a * b;

  callback(result);

}


multiply(5, 4, function (answer) {

  console.log(
    "Practice 1:",
    answer
  );

});



/*
  Exercise 2:

  Make a delayed callback.
*/


function delayMessage(
  message,
  milliseconds,
  callback
) {

  setTimeout(function () {

    callback(message);

  }, milliseconds);

}


delayMessage(
  "Practice 2 finished!",
  1500,
  function (message) {

    console.log(message);

  }
);



/*
  Exercise 3:

  Predict this before running:

    console.log("1");

    setTimeout(() => {
      console.log("2");
    }, 0);

    console.log("3");

  Answer:

    1
    3
    2

  Even a 0ms timer does not mean
  "run immediately".
*/



/* ============================================================
   FINAL TAKEAWAY
   ============================================================

   Callback:

     "Here is a function.
      Call it later."


   Synchronous:

     "Do this work now
      and wait for it."


   Asynchronous:

     "Start this work and allow
      other JavaScript to continue."


   Callback hell:

     "Many dependent callbacks
      become deeply nested."


   Next:

     Promises provide a cleaner way
     to represent the future result
     of an asynchronous operation.


   Then:

     async/await makes Promise-based
     code look much closer to normal
     top-to-bottom code.

   ============================================================ */