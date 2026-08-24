/*
============================================================
JAVASCRIPT OOP — COMPLETE BEGINNER GUIDE
============================================================

Topics:

1. Objects
2. Classes
3. Constructor
4. this
5. Methods
6. new
7. Encapsulation
8. Inheritance
9. super()
10. Polymorphism
11. Abstraction
12. Getters
13. Setters
14. Static Methods
15. instanceof
16. Closure
17. IIFE / Module Pattern
18. Factory Function Pattern
19. Factory + Private Data
20. Observer Pattern
21. Observer + Subscribe / Unsubscribe
22. Factory + Observer Together
23. Interactive Examples

Open index.html and check the browser console
to see all examples.

============================================================
*/


/* ============================================================
   1. OBJECTS
   ============================================================

   An object stores related data and actions.

   Data     → properties
   Actions  → methods
*/


const student = {

  name: "Animesh",

  age: 20,

  course: "BCA",


  introduce() {

    console.log(
      `Hi, I am ${this.name}.`
    );

  },


  study() {

    console.log(
      `${this.name} is studying JavaScript.`
    );

  }

};



console.log(
  "Student name:",
  student.name
);


console.log(
  "Student age:",
  student.age
);


student.introduce();

student.study();



/*
============================================================
Remember:

student.name

is a property.

student.study()

is a method.

Object = Data + Actions
============================================================
*/



/* ============================================================
   2. CLASS
   ============================================================

   A class is like a blueprint.

   Class:
       Student

   Objects:
       student1
       student2
       student3
*/


class Student {

  constructor(name, age, course) {

    this.name = name;

    this.age = age;

    this.course = course;

  }


  introduce() {

    console.log(
      `Hi, my name is ${this.name}.`
    );

  }


  study() {

    console.log(
      `${this.name} is studying ${this.course}.`
    );

  }

}



/* ============================================================
   3. new
   ============================================================ */


const student1 =
  new Student(
    "Animesh",
    20,
    "BCA"
  );


const student2 =
  new Student(
    "Rahul",
    21,
    "BCA"
  );


const student3 =
  new Student(
    "Priya",
    20,
    "BCA"
  );



student1.introduce();

student2.introduce();

student3.introduce();



/*
============================================================
new Student(...)

means:

"Create a new object using the Student class."

Student
   ↓
   ↓
Blueprint
   ↓
---------------------
|        |          |
↓        ↓          ↓
student1 student2 student3
============================================================
*/



/* ============================================================
   4. CONSTRUCTOR
   ============================================================

   constructor() runs automatically
   when an object is created using new.
*/


class Person {

  constructor(name, age) {

    console.log(
      "Constructor is running..."
    );


    this.name = name;

    this.age = age;

  }

}



const person1 =
  new Person(
    "Animesh",
    20
  );


console.log(
  person1
);



/*
============================================================
When this runs:

new Person("Animesh", 20)

JavaScript creates an object and calls:

constructor("Animesh", 20)

Then:

this.name = "Animesh"
this.age = 20
============================================================
*/



/* ============================================================
   5. this
   ============================================================

   this refers to the current object.

   If:

       student1.introduce()

   then inside introduce():

       this = student1

   If:

       student2.introduce()

   then:

       this = student2
*/


class Player {

  constructor(name, score) {

    this.name = name;

    this.score = score;

  }


  showScore() {

    console.log(
      `${this.name} has ${this.score} points.`
    );

  }

}



const player1 =
  new Player(
    "Alex",
    100
  );


const player2 =
  new Player(
    "John",
    250
  );


player1.showScore();

player2.showScore();



/* ============================================================
   6. METHODS
   ============================================================ */


class Car {

  constructor(brand, color) {

    this.brand = brand;

    this.color = color;

    this.speed = 0;

  }


  start() {

    console.log(
      `${this.brand} has started.`
    );

  }


  accelerate(amount) {

    this.speed += amount;


    console.log(
      `${this.brand} speed:
      ${this.speed} km/h`
    );

  }


  brake(amount) {

    this.speed -= amount;


    if (this.speed < 0) {

      this.speed = 0;

    }


    console.log(
      `${this.brand} speed:
      ${this.speed} km/h`
    );

  }


  stop() {

    this.speed = 0;


    console.log(
      `${this.brand} stopped.`
    );

  }

}



const car1 =
  new Car(
    "Toyota",
    "Black"
  );


car1.start();

car1.accelerate(30);

car1.accelerate(20);

car1.brake(10);

car1.stop();



/* ============================================================
   7. ENCAPSULATION
   ============================================================

   Encapsulation means:

   Keep data and methods together.

   Private fields can be created using #.
*/


class SecureBankAccount {

  #balance = 0;


  constructor(owner) {

    this.owner = owner;

  }


  deposit(amount) {

    if (amount <= 0) {

      console.log(
        "Deposit must be greater than 0."
      );

      return;

    }


    this.#balance += amount;


    console.log(
      `₹${amount} deposited.`
    );

  }


  withdraw(amount) {

    if (amount <= 0) {

      console.log(
        "Amount must be greater than 0."
      );

      return;

    }


    if (amount > this.#balance) {

      console.log(
        "Insufficient Balance."
      );

      return;

    }


    this.#balance -= amount;


    console.log(
      `₹${amount} withdrawn.`
    );

  }


  getBalance() {

    return this.#balance;

  }

}



const secureAccount =
  new SecureBankAccount(
    "Animesh"
  );


secureAccount.deposit(1000);

secureAccount.withdraw(300);


console.log(
  "Balance:",
  secureAccount.getBalance()
);



/*
============================================================
This does NOT work:

secureAccount.#balance

because #balance is private.

This works:

secureAccount.getBalance()

The class controls access to its data.

That's encapsulation.
============================================================
*/



/* ============================================================
   8. INHERITANCE
   ============================================================ */


class Animal {

  constructor(name) {

    this.name = name;

  }


  eat() {

    console.log(
      `${this.name} is eating.`
    );

  }


  sleep() {

    console.log(
      `${this.name} is sleeping.`
    );

  }

}



class Dog extends Animal {

  bark() {

    console.log(
      `${this.name} says Woof!`
    );

  }

}



const dog =
  new Dog(
    "Bruno"
  );


dog.eat();

dog.sleep();

dog.bark();



/*
============================================================
Dog inherits:

eat()
sleep()

from Animal.

Dog also has:

bark()

because Dog defines it itself.
============================================================
*/



/* ============================================================
   9. super()
   ============================================================ */


class Vehicle {

  constructor(brand) {

    this.brand = brand;

  }


  showBrand() {

    console.log(
      `Brand: ${this.brand}`
    );

  }

}



class Bike extends Vehicle {

  constructor(brand, gears) {

    super(brand);

    this.gears = gears;

  }


  showGears() {

    console.log(
      `Gears: ${this.gears}`
    );

  }

}



const bike =
  new Bike(
    "Yamaha",
    6
  );


bike.showBrand();

bike.showGears();



/*
============================================================
super(brand)

calls the parent constructor.

Parent:

Vehicle

Child:

Bike

Vehicle handles:

this.brand = brand

Bike handles:

this.gears = gears
============================================================
*/



/* ============================================================
   10. POLYMORPHISM
   ============================================================

   Same method.
   Different behavior.
*/


class AnimalSound {

  speak() {

    console.log(
      "Some animal sound"
    );

  }

}



class DogSound
  extends AnimalSound {

  speak() {

    console.log(
      "Woof!"
    );

  }

}



class CatSound
  extends AnimalSound {

  speak() {

    console.log(
      "Meow!"
    );

  }

}



class CowSound
  extends AnimalSound {

  speak() {

    console.log(
      "Moo!"
    );

  }

}



const dogSound =
  new DogSound();


const catSound =
  new CatSound();


const cowSound =
  new CowSound();



dogSound.speak();

catSound.speak();

cowSound.speak();



/*
============================================================
All three have:

speak()

But:

Dog → Woof!
Cat → Meow!
Cow → Moo!

Same method.
Different behavior.

That's polymorphism.
============================================================
*/



/* ============================================================
   11. ABSTRACTION
   ============================================================ */


class CoffeeMachine {

  #heatWater() {

    console.log(
      "Heating water internally..."
    );

  }


  #addCoffee() {

    console.log(
      "Adding coffee internally..."
    );

  }


  makeCoffee() {

    this.#heatWater();

    this.#addCoffee();

    console.log(
      "Coffee is ready!"
    );

  }

}



const machine =
  new CoffeeMachine();


machine.makeCoffee();



/*
============================================================
The user only needs:

machine.makeCoffee()

The user doesn't need to know:

#heatWater()
#addCoffee()

The complicated details are hidden.

That's abstraction.
============================================================
*/



/* ============================================================
   12. GETTERS
   ============================================================ */


class Rectangle {

  constructor(width, height) {

    this.width = width;

    this.height = height;

  }


  get area() {

    return this.width * this.height;

  }

}



const rectangle =
  new Rectangle(
    10,
    5
  );


console.log(
  "Rectangle area:",
  rectangle.area
);



/*
============================================================
Notice:

rectangle.area

NOT:

rectangle.area()

because area is a getter.
============================================================
*/



/* ============================================================
   13. SETTERS
   ============================================================ */


class User {

  constructor(name) {

    this.name = name;

  }


  get username() {

    return this.name;

  }


  set username(newName) {

    if (newName.length < 3) {

      console.log(
        "Name must contain at least 3 characters."
      );

      return;

    }


    this.name = newName;

  }

}



const user =
  new User(
    "Animesh"
  );


console.log(
  user.username
);


user.username =
  "Rahul";


console.log(
  user.username
);


user.username =
  "A";



/* ============================================================
   14. STATIC METHODS
   ============================================================ */


class MathHelper {

  static add(a, b) {

    return a + b;

  }


  static multiply(a, b) {

    return a * b;

  }

}



console.log(
  MathHelper.add(
    10,
    20
  )
);


console.log(
  MathHelper.multiply(
    5,
    4
  )
);



/*
============================================================
Static method:

MathHelper.add()

We don't need:

new MathHelper()

because static methods belong
to the class itself.
============================================================
*/



/* ============================================================
   15. instanceof
   ============================================================ */


class StudentCheck {

  constructor(name) {

    this.name = name;

  }

}



const checkStudent =
  new StudentCheck(
    "Animesh"
  );


console.log(
  checkStudent instanceof StudentCheck
);

// true



/* ============================================================
   16. CLOSURE
   ============================================================

   Closure is extremely important
   for understanding factory functions
   and the module pattern.
*/


function createCounter() {

  let count = 0;


  return function () {

    count++;


    console.log(
      "Count:",
      count
    );

  };

}



const counter =
  createCounter();


counter();

counter();

counter();



/*
============================================================
Why does count remember its value?

Because the returned function has access
to the variable from its outer function.

This is a closure.

The function remembers:

count

even after createCounter()
has finished executing.
============================================================
*/



/* ============================================================
   17. IIFE
   ============================================================

   IIFE:

   Immediately Invoked Function Expression

   It runs immediately.
*/


(function () {

  console.log(
    "IIFE executed!"
  );

})();



/*
============================================================
Structure:

(function () {

   code

})();

The final () immediately calls the function.
============================================================
*/



/* ============================================================
   18. MODULE PATTERN
   ============================================================

   Your Bank example.

   IIFE + Closure + Public API
   = Module Pattern
*/


const Bank =
  (function () {

    let BankBalance = 12000;


    function checkBalance() {

      console.log(
        `Your Bank Balance is ${BankBalance}`
      );

    }


    function setBalance(amount) {

      BankBalance =
        amount;

    }


    function withdraw(amount) {

      if (amount > BankBalance) {

        console.log(
          "Insufficient Balance"
        );

      } else {

        BankBalance -= amount;


        console.log(
          `You have withdrawn ${amount}.
           Your remaining balance is ${BankBalance}`
        );

      }

    }


    return {

      checkBalance,

      setBalance,

      withdraw

    };

  })();



Bank.checkBalance();

Bank.withdraw(2000);

Bank.checkBalance();

Bank.setBalance(5000);

Bank.checkBalance();



/*
============================================================
THIS DOES NOT WORK:

Bank.BankBalance

because BankBalance is private.

Only the functions returned
from the IIFE are public.

Public:

Bank.checkBalance()
Bank.setBalance()
Bank.withdraw()

Private:

BankBalance
============================================================
*/



/* ============================================================
   19. FACTORY FUNCTION PATTERN
   ============================================================

   A factory function is a function
   that creates and returns objects.
*/


function createStudent(
  name,
  age,
  course
) {

  return {

    name,

    age,

    course,


    introduce() {

      console.log(
        `Hi, I am ${this.name}`
      );

    },


    study() {

      console.log(
        `${this.name} is studying ${this.course}`
      );

    }

  };

}



const factoryStudent1 =
  createStudent(
    "Animesh",
    20,
    "BCA"
  );


const factoryStudent2 =
  createStudent(
    "Rahul",
    21,
    "BCA"
  );


factoryStudent1.introduce();

factoryStudent2.introduce();


factoryStudent1.study();

factoryStudent2.study();



/*
============================================================
Why is it called a factory?

Because:

createStudent()
       ↓
   creates
       ↓
 Student Object

Just like:

Factory
   ↓
Product
============================================================
*/



/* ============================================================
   20. FACTORY + PRIVATE DATA
   ============================================================ */


function createBankAccount(
  owner,
  initialBalance
) {

  let balance =
    initialBalance;


  function deposit(amount) {

    if (amount <= 0) {

      console.log(
        "Invalid deposit."
      );

      return;

    }


    balance += amount;


    console.log(
      `₹${amount} deposited.`
    );

  }


  function withdraw(amount) {

    if (amount > balance) {

      console.log(
        "Insufficient Balance."
      );

      return;

    }


    balance -= amount;


    console.log(
      `₹${amount} withdrawn.`
    );

  }


  function checkBalance() {

    console.log(
      `${owner}'s balance is ₹${balance}`
    );

  }


  return {

    deposit,

    withdraw,

    checkBalance

  };

}



const account1 =
  createBankAccount(
    "Animesh",
    12000
  );


const account2 =
  createBankAccount(
    "Rahul",
    5000
  );


account1.deposit(2000);

account1.checkBalance();

account2.checkBalance();



/*
============================================================
account1 has its own private balance.

account2 has its own private balance.

This works because each call to:

createBankAccount()

creates a new closure.
============================================================
*/



/* ============================================================
   21. OBSERVER PATTERN
   ============================================================

   Observer Pattern:

   "Tell me when something changes."

   Subject:
       something being observed

   Observer:
       something that wants to know
       when the subject changes.
*/


function createYouTubeChannel(
  name
) {

  let subscribers = [];


  function subscribe(callback) {

    subscribers.push(
      callback
    );


    console.log(
      "New subscriber added."
    );

  }


  function uploadVideo(video) {

    console.log(
      `${name} uploaded: ${video}`
    );


    subscribers.forEach(
      function (subscriber) {

        subscriber(video);

      }
    );

  }


  return {

    subscribe,

    uploadVideo

  };

}



const channel =
  createYouTubeChannel(
    "JavaScript Tutorials"
  );



function animeshNotification(
  video
) {

  console.log(
    `Animesh received notification: ${video}`
  );

}



function rahulNotification(
  video
) {

  console.log(
    `Rahul received notification: ${video}`
  );

}



channel.subscribe(
  animeshNotification
);


channel.subscribe(
  rahulNotification
);



channel.uploadVideo(
  "JavaScript Promises Explained"
);



/*
============================================================
Flow:

Channel
   ↓
uploads video
   ↓
notify subscribers
   ↓
-------------------------
↓                       ↓
Animesh                 Rahul
notification            notification

The channel doesn't need to know
exactly what each subscriber does.

It simply calls them.
============================================================
*/



/* ============================================================
   22. OBSERVER WITH UNSUBSCRIBE
   ============================================================ */


function createNewsAgency() {

  let observers = [];


  function subscribe(
    observer
  ) {

    observers.push(
      observer
    );

  }


  function unsubscribe(
    observer
  ) {

    observers =
      observers.filter(
        function (item) {

          return item !== observer;

        }
      );

  }


  function publishNews(
    news
  ) {

    console.log(
      `Breaking News: ${news}`
    );


    observers.forEach(
      function (observer) {

        observer(news);

      }
    );

  }


  return {

    subscribe,

    unsubscribe,

    publishNews

  };

}



const news =
  createNewsAgency();



function phone(news) {

  console.log(
    `📱 Phone notification: ${news}`
  );

}



function email(news) {

  console.log(
    `📧 Email notification: ${news}`
  );

}



function website(news) {

  console.log(
    `🌐 Website updated: ${news}`
  );

}



news.subscribe(phone);

news.subscribe(email);

news.subscribe(website);



news.publishNews(
  "JavaScript 2026 released!"
);



/*
Now remove email.
*/


news.unsubscribe(
  email
);


news.publishNews(
  "New JavaScript tutorial available!"
);



/*
============================================================
First:

Phone
Email
Website

receive the news.

After:

unsubscribe(email)

Email no longer receives notifications.
============================================================
*/



/* ============================================================
   23. FACTORY + OBSERVER TOGETHER
   ============================================================

   This is a very useful combination.

   Factory:
       creates the store.

   Observer:
       lets other parts of the app
       react when state changes.
*/


function createStore() {

  let state = 0;

  let observers = [];


  function subscribe(
    callback
  ) {

    observers.push(
      callback
    );

  }


  function setState(
    newState
  ) {

    state =
      newState;


    observers.forEach(
      function (observer) {

        observer(state);

      }
    );

  }


  function getState() {

    return state;

  }


  return {

    subscribe,

    setState,

    getState

  };

}



const store =
  createStore();



store.subscribe(
  function (state) {

    console.log(
      "Observer 1:",
      state
    );

  }
);



store.subscribe(
  function (state) {

    console.log(
      "Observer 2:",
      state
    );

  }
);



store.setState(10);

store.setState(20);

store.setState(30);



/*
============================================================
Output:

Observer 1: 10
Observer 2: 10

Observer 1: 20
Observer 2: 20

Observer 1: 30
Observer 2: 30

This is the basic idea behind
many state-management systems.
============================================================
*/



/* ============================================================
   24. DOM EVENTS ARE SIMILAR TO OBSERVER
   ============================================================

   When you write:

       button.addEventListener(
           "click",
           callback
       );

   you're basically saying:

   "Watch this button.

    When it is clicked,
    notify me by calling this callback."
*/


/*
Example:

const button =
  document.querySelector("button");


button.addEventListener(
  "click",
  function () {

    console.log(
      "Button clicked!"
    );

  }
);

*/


/* ============================================================
   25. INTERACTIVE STUDENT DEMO
   ============================================================ */


const createStudentButton =
  document.getElementById(
    "createStudentBtn"
  );


const studentOutput =
  document.getElementById(
    "studentOutput"
  );



createStudentButton.addEventListener(
  "click",
  function () {

    const student =
      new Student(
        "Animesh",
        20,
        "BCA"
      );


    studentOutput.innerHTML = `

      <div class="space-y-2">

        <p>

          <span class="text-violet-300">
            Object created:
          </span>

          Student

        </p>


        <p>

          <span class="text-cyan-300">
            Name:
          </span>

          ${student.name}

        </p>


        <p>

          <span class="text-cyan-300">
            Age:
          </span>

          ${student.age}

        </p>


        <p>

          <span class="text-cyan-300">
            Course:
          </span>

          ${student.course}

        </p>


        <p class="text-green-300">

          Method executed:
          study()

        </p>

      </div>

    `;


    student.study();

  }
);



/* ============================================================
   26. INTERACTIVE BANK ACCOUNT
   ============================================================ */


const interactiveAccount =
  new SecureBankAccount(
    "Animesh"
  );


const depositButton =
  document.getElementById(
    "depositBtn"
  );


const withdrawButton =
  document.getElementById(
    "withdrawBtn"
  );


const bankOutput =
  document.getElementById(
    "bankOutput"
  );



function updateBankUI(
  message
) {

  bankOutput.innerHTML = `

    <div class="space-y-2">

      <p>

        ${message}

      </p>


      <p class="text-green-300 text-lg">

        Current Balance:
        ₹${interactiveAccount.getBalance()}

      </p>

    </div>

  `;

}



depositButton.addEventListener(
  "click",
  function () {

    interactiveAccount.deposit(
      500
    );


    updateBankUI(
      "₹500 deposited successfully."
    );

  }
);



withdrawButton.addEventListener(
  "click",
  function () {

    interactiveAccount.withdraw(
      200
    );


    updateBankUI(
      "Attempted to withdraw ₹200."
    );

  }
);



/* ============================================================
   27. INTERACTIVE OBSERVER DEMO
   ============================================================ */


const observerOutput =
  document.getElementById(
    "observerOutput"
  );


const subscribePhoneButton =
  document.getElementById(
    "subscribePhoneBtn"
  );


const subscribeEmailButton =
  document.getElementById(
    "subscribeEmailBtn"
  );


const publishNewsButton =
  document.getElementById(
    "publishNewsBtn"
  );



const interactiveNews =
  createNewsAgency();



let phoneSubscribed =
  false;


let emailSubscribed =
  false;



function addObserverLine(
  message
) {

  const line =
    document.createElement(
      "div"
    );


  line.textContent =
    message;


  observerOutput.appendChild(
    line
  );

}



function interactivePhone(
  message
) {

  addObserverLine(
    `📱 Phone received: ${message}`
  );

}



function interactiveEmail(
  message
) {

  addObserverLine(
    `📧 Email received: ${message}`
  );

}



subscribePhoneButton.addEventListener(
  "click",
  function () {

    if (phoneSubscribed) {

      addObserverLine(
        "Phone is already subscribed."
      );

      return;

    }


    interactiveNews.subscribe(
      interactivePhone
    );


    phoneSubscribed =
      true;


    addObserverLine(
      "📱 Phone subscribed successfully."
    );

  }
);



subscribeEmailButton.addEventListener(
  "click",
  function () {

    if (emailSubscribed) {

      addObserverLine(
        "Email is already subscribed."
      );

      return;

    }


    interactiveNews.subscribe(
      interactiveEmail
    );


    emailSubscribed =
      true;


    addObserverLine(
      "📧 Email subscribed successfully."
    );

  }
);



publishNewsButton.addEventListener(
  "click",
  function () {

    addObserverLine(
      "------------------------"
    );


    addObserverLine(
      "📰 News published!"
    );


    interactiveNews.publishNews(
      "New JavaScript OOP lesson is available!"
    );

  }
);



/* ============================================================
   28. FINAL OOP MENTAL MODEL
   ============================================================

   OBJECT

       A thing.

       Example:

           student1


   CLASS

       Blueprint.

       Example:

           class Student


   CONSTRUCTOR

       Initializes the object.

       Example:

           constructor(name)


   THIS

       Refers to current object.


   METHOD

       Function belonging to an object/class.

       Example:

           study()


   NEW

       Creates an object from a class.

       Example:

           new Student()


   ENCAPSULATION

       Protect and organize data.


   INHERITANCE

       Child gets features from parent.

       Example:

           Dog extends Animal


   SUPER

       Calls parent constructor/method.


   POLYMORPHISM

       Same method,
       different behavior.


   ABSTRACTION

       Hide unnecessary details.


   CLOSURE

       Function remembers outer variables.


   IIFE

       Function that runs immediately.


   MODULE PATTERN

       Private data + public methods.


   FACTORY FUNCTION

       Function that creates objects.


   OBSERVER PATTERN

       Notify subscribers when something changes.


============================================================
*/



/* ============================================================
   29. FINAL SUMMARY
   ============================================================

                  OOP
                   |
          -------------------
          |                 |
       Objects            Classes
                            |
                       Constructors
                            |
                          this
                            |
                         Methods
                            |
                           new
                            |
              -------------------------
              |           |           |
        Inheritance   Encapsulation   etc.
              |
           extends
              |
           super()


   DESIGN PATTERNS:

       Closure
          ↓
       IIFE
          ↓
       Module Pattern


       Factory Function
          ↓
       Creates Objects


       Observer Pattern
          ↓
       Subscribe
          ↓
       Something Changes
          ↓
       Notify Observers


============================================================

THE SIMPLEST WAY TO REMEMBER EVERYTHING:

    CLASS
      ↓
    Blueprint
      ↓
    OBJECT
      ↓
    Data + Methods


    INHERITANCE
      ↓
    Reuse


    ENCAPSULATION
      ↓
    Protect


    POLYMORPHISM
      ↓
    Same method, different behavior


    ABSTRACTION
      ↓
    Hide complexity


    FACTORY
      ↓
    Create objects


    OBSERVER
      ↓
    Notify subscribers


    CLOSURE
      ↓
    Remember private data

============================================================
*/


console.log(
  "OOP lesson loaded successfully!"
);