/*
  PROMISES + ASYNC/AWAIT — BEGINNER JAVASCRIPT FILE
  -------------------------------------------------

  Open promise-async-await.html in a browser.

  This file intentionally contains many examples.

  Read each section, change values,
  and observe what happens.
*/



/* ============================================================
   SECTION 1 — CREATE A SIMPLE PROMISE
   ============================================================ */


const simplePromise = new Promise(
  (resolve, reject) => {

    const success = true;


    if (success) {

      resolve(
        "Everything worked!"
      );

    } else {

      reject(
        "Something failed!"
      );

    }

  }
);



simplePromise

  .then((value) => {

    console.log(
      "Success:",
      value
    );

  })

  .catch((error) => {

    console.error(
      "Error:",
      error
    );

  });



/*
  A Promise starts as:

      PENDING

  Then it can become:

      FULFILLED

      OR

      REJECTED

  Once settled,
  it cannot go back to pending.
*/



/* ============================================================
   SECTION 2 — A REALISTIC DELAYED PROMISE
   ============================================================ */


function getData(success = true) {

  return new Promise(
    (resolve, reject) => {

      setTimeout(() => {

        if (success) {

          resolve({

            message:
              "Data received successfully!",

            id: 101,

            name: "Alex"

          });

        } else {

          reject(
            new Error(
              "The server failed to respond."
            )
          );

        }

      }, 1000);

    }
  );

}



getData(true)

  .then((data) => {

    console.log(
      "Received:",
      data
    );

  })

  .catch((error) => {

    console.error(
      "Failed:",
      error.message
    );

  });



/* ============================================================
   SECTION 3 — THEN()
   ============================================================ */


function getNumber() {

  return Promise.resolve(10);

}



getNumber()

  .then((number) => {

    console.log(
      "Number:",
      number
    );

  });



/*
  then() receives the value passed to resolve().

  resolve(10)
       ↓
  then((number) => ...)
       ↓
  number === 10
*/



/* ============================================================
   SECTION 4 — CATCH()
   ============================================================ */


function failOnPurpose() {

  return Promise.reject(
    new Error(
      "This is an intentional error."
    )
  );

}



failOnPurpose()

  .then((value) => {

    console.log(
      "This will not run:",
      value
    );

  })

  .catch((error) => {

    console.log(
      "Caught:",
      error.message
    );

  });



/* ============================================================
   SECTION 5 — FINALLY()
   ============================================================ */


getData(true)

  .then((data) => {

    console.log(
      "Finally example success:",
      data
    );

  })

  .catch((error) => {

    console.log(
      "Finally example error:",
      error.message
    );

  })

  .finally(() => {

    console.log(
      "This runs whether success or failure happens."
    );

  });



/*
  finally() is useful for cleanup:

  - hide a loading spinner
  - close a connection
  - reset a button
  - clear temporary state
*/



/* ============================================================
   SECTION 6 — PROMISE CHAINING
   ============================================================ */


function loginUser(username) {

  return new Promise(
    (resolve) => {

      setTimeout(() => {

        resolve({

          id: 7,

          username

        });

      }, 500);

    }
  );

}



function getProfile(user) {

  return new Promise(
    (resolve) => {

      setTimeout(() => {

        resolve({

          userId: user.id,

          name: "Alex",

          city: "Delhi"

        });

      }, 500);

    }
  );

}



function getOrders(profile) {

  return new Promise(
    (resolve) => {

      setTimeout(() => {

        resolve([

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
  );

}



function getFirstOrder(orders) {

  return new Promise(
    (resolve) => {

      setTimeout(() => {

        resolve(
          orders[0]
        );

      }, 500);

    }
  );

}



loginUser("alex")

  .then((user) => {

    console.log(
      "1. Logged in:",
      user
    );

    return getProfile(user);

  })

  .then((profile) => {

    console.log(
      "2. Profile:",
      profile
    );

    return getOrders(profile);

  })

  .then((orders) => {

    console.log(
      "3. Orders:",
      orders
    );

    return getFirstOrder(orders);

  })

  .then((order) => {

    console.log(
      "4. First order:",
      order
    );

  })

  .catch((error) => {

    console.error(
      "Chain failed:",
      error
    );

  });



/*
  VERY IMPORTANT:

  return getProfile(user);

  The return matters.

  It passes the next Promise
  to the next .then().

  This:

      .then(user => {
        return getProfile(user);
      })

      .then(profile => {
        ...
      })

  means:

      user → getProfile() → profile
*/



/* ============================================================
   SECTION 7 — ASYNC FUNCTIONS ALWAYS RETURN PROMISES
   ============================================================ */


async function sayHello() {

  return "Hello!";

}



const helloResult =
  sayHello();



console.log(
  "Async result:",
  helloResult
);



/*
  Even though we wrote:

      return "Hello!";

  the actual result is:

      Promise("Hello!")

  Therefore:

      sayHello().then((message) => {
        console.log(message);
      });
*/



/* ============================================================
   SECTION 8 — AWAIT
   ============================================================ */


async function showDataWithAwait() {

  const data =
    await getData(true);


  console.log(
    "Await result:",
    data
  );

}



showDataWithAwait();



/*
  Read:

      const data = await getData(true);

  as:

      "Start getData.

       Give me its result before continuing
       this async function."

  IMPORTANT:

  await does NOT freeze the entire browser.

  It pauses the current async function
  until the Promise settles.
*/



/* ============================================================
   SECTION 9 — TRY/CATCH WITH AWAIT
   ============================================================ */


async function safeDataRequest() {

  try {

    const data =
      await getData(true);


    console.log(
      "Safe request:",
      data
    );

  } catch (error) {

    console.error(
      "Safe request failed:",
      error.message
    );

  }

}



safeDataRequest();



/* ============================================================
   SECTION 10 — FORCE AN ERROR
   ============================================================ */


async function failingRequest() {

  try {

    const data =
      await getData(false);


    console.log(
      "This will not run:",
      data
    );

  } catch (error) {

    console.log(
      "Caught with try/catch:",
      error.message
    );

  }

}



failingRequest();



/* ============================================================
   SECTION 11 — MULTIPLE AWAIT OPERATIONS
   ============================================================ */


async function loadDashboard() {

  try {

    console.log(
      "Dashboard: starting..."
    );


    const user =
      await loginUser("alex");


    console.log(
      "Dashboard: user loaded"
    );


    const profile =
      await getProfile(user);


    console.log(
      "Dashboard: profile loaded"
    );


    const orders =
      await getOrders(profile);


    console.log(
      "Dashboard: orders loaded"
    );


    const firstOrder =
      await getFirstOrder(orders);


    console.log(
      "Dashboard: first order:",
      firstOrder
    );


    return firstOrder;


  } catch (error) {

    console.error(
      "Dashboard failed:",
      error.message
    );

  }

}



loadDashboard();



/*
  This looks almost like synchronous code:

      get user
      get profile
      get orders
      get first order

  But each operation can still be asynchronous.
*/



/* ============================================================
   SECTION 12 — ASYNC/AWAIT IS BUILT ON PROMISES
   ============================================================ */


function promiseVersion() {

  return getData(true)

    .then((data) => {

      return data.name;

    });

}



async function asyncAwaitVersion() {

  const data =
    await getData(true);


  return data.name;

}



promiseVersion()

  .then((name) => {

    console.log(
      "Promise version:",
      name
    );

  });



asyncAwaitVersion()

  .then((name) => {

    console.log(
      "Async/await version:",
      name
    );

  });



/*
  Both ultimately work with Promises.

  async/await is not a completely different
  asynchronous system.

  It is a cleaner syntax for working
  with Promise-based code.
*/



/* ============================================================
   SECTION 13 — MIXING AWAIT WITH THEN/CATCH
   ============================================================ */


async function mixedExample() {

  const data =
    await getData(true);


  return data;

}



mixedExample()

  .then((data) => {

    console.log(
      "Mixed style result:",
      data
    );

  })

  .catch((error) => {

    console.error(
      "Mixed style error:",
      error
    );

  });



/*
  This is valid.

  Why?

  Because mixedExample() is async.

  Therefore mixedExample() returns a Promise.

  We can consume that Promise using
  .then() and .catch().

  However, inside one flow,
  consistency is often easier for beginners:

      async/await + try/catch

  rather than switching styles repeatedly.
*/



/* ============================================================
   SECTION 14 — PARALLEL PROMISES
   ============================================================

   Important advanced beginner concept:

   These are sequential:

      const a = await taskA();
      const b = await taskB();

   If taskA takes 2 seconds and taskB takes 2 seconds,
   total time can be about 4 seconds.

   If taskB does NOT depend on taskA,
   we can start both:

      const promiseA = taskA();
      const promiseB = taskB();

      const a = await promiseA;
      const b = await promiseB;

   Or use Promise.all().
*/



function taskA() {

  return new Promise(
    (resolve) => {

      setTimeout(
        () => resolve("Task A complete"),
        1500
      );

    }
  );

}



function taskB() {

  return new Promise(
    (resolve) => {

      setTimeout(
        () => resolve("Task B complete"),
        1500
      );

    }
  );

}



async function runInParallel() {

  const start =
    Date.now();


  const promiseA =
    taskA();


  const promiseB =
    taskB();


  const [
    resultA,
    resultB
  ] =
    await Promise.all([
      promiseA,
      promiseB
    ]);


  const seconds =
    (Date.now() - start) / 1000;


  console.log(
    resultA
  );


  console.log(
    resultB
  );


  console.log(
    `Parallel time: about ${seconds.toFixed(1)} seconds`
  );

}



runInParallel();



/* ============================================================
   SECTION 15 — PROMISE.ALL
   ============================================================ */


async function loadEverything() {

  try {

    const [
      profile,
      orders
    ] = await Promise.all([

      getProfile({
        id: 7
      }),

      getOrders({
        userId: 7
      })

    ]);


    console.log(
      "Profile:",
      profile
    );


    console.log(
      "Orders:",
      orders
    );


  } catch (error) {

    console.error(
      "One of the requests failed:",
      error
    );

  }

}



loadEverything();



/*
  Promise.all() means:

    "Start all these Promises and give me all results
     when they have all succeeded."

  If one rejects,
  Promise.all() rejects.
*/



/* ============================================================
   SECTION 16 — INTERACTIVE HTML DEMO
   ============================================================ */


const successButton =
  document.getElementById(
    "promiseSuccess"
  );


const failureButton =
  document.getElementById(
    "promiseFailure"
  );


const promiseOutput =
  document.getElementById(
    "promiseOutput"
  );



function writeLine(text) {

  const line =
    document.createElement("div");


  line.textContent =
    text;


  promiseOutput.appendChild(
    line
  );

}



function fakeServerRequest(
  shouldSucceed
) {

  return new Promise(
    (resolve, reject) => {

      writeLine(
        "Promise state: PENDING"
      );


      writeLine(
        "Request started..."
      );


      setTimeout(() => {

        if (shouldSucceed) {

          resolve({

            status: 200,

            message:
              "Server returned the data."

          });

        } else {

          reject(
            new Error(
              "Server returned an error."
            )
          );

        }

      }, 1500);

    }
  );

}



successButton.addEventListener(
  "click",
  async () => {

    promiseOutput.innerHTML = "";


    try {

      const result =
        await fakeServerRequest(true);


      writeLine(
        "Promise state: FULFILLED"
      );


      writeLine(
        `Status: ${result.status}`
      );


      writeLine(
        result.message
      );


    } catch (error) {

      writeLine(
        "Promise state: REJECTED"
      );


      writeLine(
        error.message
      );

    }

  }
);



failureButton.addEventListener(
  "click",
  async () => {

    promiseOutput.innerHTML = "";


    try {

      const result =
        await fakeServerRequest(false);


      writeLine(
        "This will not run."
      );


      writeLine(
        result.message
      );


    } catch (error) {

      writeLine(
        "Promise state: REJECTED"
      );


      writeLine(
        `Error: ${error.message}`
      );

    }

  }
);



/* ============================================================
   SECTION 17 — COMMON MISTAKE
   ============================================================ */


/*
  WRONG IDEA:

      const data = getData();

      console.log(data.name);


  Why?

  getData() returns a Promise,
  not the final object.


  Correct:

      const data = await getData();


  inside an async function.


  Or:

      getData().then(data => {
        console.log(data.name);
      });
*/



/* ============================================================
   SECTION 18 — ANOTHER COMMON MISTAKE
   ============================================================ */


/*
  WRONG:

      async function test() {
        throw new Error("Oops");
      }

      test();


  This creates a rejected Promise.


  If you want to handle it:

      try {

        await test();

      } catch (error) {

        ...

      }


  Or:

      test().catch(error => {
        ...
      });
*/



/* ============================================================
   SECTION 19 — QUICK MENTAL MODEL
   ============================================================

   CALLBACK

      "Here is a function.
       Call it later."


   PROMISE

      "Here is an object representing
       a future result."


   THEN

      "When the Promise succeeds,
       run this."


   CATCH

      "If it fails,
       run this."


   ASYNC

      "This function works with Promises
       and always returns a Promise."


   AWAIT

      "Wait for this Promise's result
       before continuing this async function."


   TRY/CATCH

      "Handle rejected Promises
       using familiar error handling."

   ============================================================ */



/* ============================================================
   SECTION 20 — FINAL PRACTICE
   ============================================================ */


/*
  Try these yourself:

  1. Change getData(true) to getData(false).

  2. Change the timer from 1000ms to 3000ms.

  3. Add a new .then().

  4. Create a function called getProduct().

  5. Make getProduct() return a Promise.

  6. Call getProduct() with await.

  7. Put the await inside try/catch.

  8. Create two independent tasks and use Promise.all().
*/



/*
  FINAL TAKEAWAY:

  Async isn't magic.

  It is structured waiting.

  The evolution looks like:

      callbacks
          ↓
      Promises
          ↓
      async/await


  The underlying idea stays the same:

      Start asynchronous work
              ↓
      wait for a result
              ↓
      handle success
              ↓
      handle failure
              ↓
      continue
*/