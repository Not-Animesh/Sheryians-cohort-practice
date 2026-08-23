/*
============================================================
JAVASCRIPT OOP — BEGINNER FRIENDLY
============================================================

OOP = Object-Oriented Programming

We are going to learn:

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
12. Static methods
13. Getters and setters
14. instanceof
15. Real-world example

Take your time.

Don't just read the code.

Change values and run it.
============================================================
*/



/* ============================================================
   1. OBJECTS
   ============================================================

   Before learning classes,
   understand objects.

   An object stores related information.

   Example:

   A student has:

     name
     age
     course

   A student can also perform actions:

     study()
     introduce()
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
IMPORTANT:

Properties:

    student.name
    student.age
    student.course

Methods:

    student.introduce()
    student.study()

So:

Object = Data + Actions
============================================================
*/



/* ============================================================
   2. WHY DO WE NEED CLASSES?
   ============================================================

   Imagine we need:

     student1
     student2
     student3
     student4
     student5

   We could create five objects manually.

   But that becomes repetitive.

   A class gives us a blueprint.
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



/*
============================================================
CLASS = BLUEPRINT

Student class tells JavaScript:

Every Student object should have:

    name
    age
    course
    introduce()
    study()
============================================================
*/



/* ============================================================
   3. CREATING OBJECTS USING new
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



console.log(
  student1
);


console.log(
  student2
);


console.log(
  student3
);



/*
============================================================
new Student(...)

means:

"Create a new object using the Student blueprint."

So:

Student
   ↓
Class / Blueprint
   ↓
   ├── student1
   ├── student2
   └── student3
============================================================
*/



student1.introduce();

student2.introduce();

student3.introduce();



/* ============================================================
   4. CONSTRUCTOR
   ============================================================

   constructor() is a special method.

   It runs automatically when we use new.

   Example:

       new Student("Animesh", 20, "BCA")

   JavaScript automatically runs:

       constructor(
         "Animesh",
         20,
         "BCA"
       )
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
OUTPUT:

Constructor is running...

Then:

{
    name: "Animesh",
    age: 20
}
============================================================
*/



/* ============================================================
   5. WHAT IS this?
   ============================================================

   this refers to the current object.

   Example:

       student1.introduce()

   Inside introduce():

       this = student1

   If:

       student2.introduce()

   Then:

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



/*
============================================================
Remember:

this.name

means:

"The name belonging to the current object."

this.score

means:

"The score belonging to the current object."
============================================================
*/



/* ============================================================
   6. METHODS
   ============================================================

   A method is simply a function inside a class/object.

   Example:

       start()
       stop()
       accelerate()
*/



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
      `${this.brand} speed: ${this.speed} km/h`
    );

  }


  brake(amount) {

    this.speed -= amount;


    if (this.speed < 0) {

      this.speed = 0;

    }


    console.log(
      `${this.brand} speed: ${this.speed} km/h`
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

   Keep related data and methods together.

   It can also mean protecting internal data.

   JavaScript supports private class fields
   using the # symbol.
*/



class BankAccount {

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
        "Withdrawal must be greater than 0."
      );

      return;

    }


    if (amount > this.#balance) {

      console.log(
        "Not enough balance."
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



const account =
  new BankAccount(
    "Animesh"
  );


account.deposit(1000);


account.withdraw(300);


console.log(
  "Balance:",
  account.getBalance()
);



/*
============================================================
IMPORTANT:

This will NOT work:

    account.#balance

because #balance is private.

Instead:

    account.getBalance()

is used.

The class controls how the balance can be changed.

That's encapsulation.
============================================================
*/



/* ============================================================
   8. INHERITANCE
   ============================================================

   Inheritance means:

   A child class can get features
   from a parent class.

   Real-world example:

       Animal
          ↓
        Dog

       Animal
          ↓
        Cat

   Dog and Cat are both animals.
*/



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
Dog did not define:

    eat()

or:

    sleep()

But Dog can still use them.

Why?

Because:

    Dog extends Animal

Therefore Dog inherits Animal's methods.
============================================================
*/



/* ============================================================
   9. super()
   ============================================================

   super() is used when the child class
   needs to call the parent constructor.
*/



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

calls:

    Vehicle constructor

which does:

    this.brand = brand

Then Bike adds:

    this.gears = gears
============================================================
*/



/* ============================================================
   10. POLYMORPHISM
   ============================================================

   Poly = many

   Morph = forms

   Simple meaning:

   Same method name,
   different behavior.
*/



class AnimalSound {

  speak() {

    console.log(
      "Some animal sound"
    );

  }

}



class DogSound extends AnimalSound {

  speak() {

    console.log(
      "Woof!"
    );

  }

}



class CatSound extends AnimalSound {

  speak() {

    console.log(
      "Meow!"
    );

  }

}



class CowSound extends AnimalSound {

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

Dog → Woof
Cat → Meow
Cow → Moo

Same method.
Different behavior.

That's polymorphism.
============================================================
*/



/* ============================================================
   11. ABSTRACTION
   ============================================================

   Abstraction means:

   Hide unnecessary details.

   Show only what the user needs.
*/



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

They don't need to manually call:

    #heatWater()
    #addCoffee()

The internal complexity is hidden.

That's abstraction.
============================================================
*/



/* ============================================================
   12. GETTERS
   ============================================================

   A getter lets us access a method
   like a property.
*/



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
Notice:

We wrote:

    rectangle.area

NOT:

    rectangle.area()

because area is a getter.
*/



/* ============================================================
   13. SETTERS
   ============================================================

   A setter lets us control
   what happens when a property is changed.
*/



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
   ============================================================

   A static method belongs to the class itself.

   You don't need to create an object
   to use it.
*/



class MathHelper {

  static add(a, b) {

    return a + b;

  }


  static multiply(a, b) {

    return a * b;

  }

}



console.log(
  MathHelper.add(10, 20)
);


console.log(
  MathHelper.multiply(5, 4)
);



/*
This works:

    MathHelper.add(10, 20)

This does NOT require:

    new MathHelper()

Static methods belong to the class itself.
*/



/* ============================================================
   15. instanceof
   ============================================================

   instanceof checks whether an object
   was created from a particular class.
*/



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
   16. REAL-WORLD OOP EXAMPLE
   ============================================================

   Let's build a simple Employee system.
*/



class Employee {

  constructor(name, salary, department) {

    this.name = name;

    this.salary = salary;

    this.department = department;

  }


  introduce() {

    console.log(
      `I am ${this.name}.`
    );

  }


  showSalary() {

    console.log(
      `${this.name}'s salary is ₹${this.salary}`
    );

  }


  work() {

    console.log(
      `${this.name} is working in ${this.department}.`
    );

  }

}



const employee1 =
  new Employee(
    "Animesh",
    50000,
    "Development"
  );


employee1.introduce();

employee1.showSalary();

employee1.work();



/* ============================================================
   17. INHERITANCE IN REAL-WORLD EXAMPLE
   ============================================================ */



class Developer extends Employee {

  constructor(
    name,
    salary,
    programmingLanguage
  ) {

    super(
      name,
      salary,
      "Development"
    );


    this.programmingLanguage =
      programmingLanguage;

  }


  code() {

    console.log(
      `${this.name} is coding in ${this.programmingLanguage}.`
    );

  }

}



const developer =
  new Developer(
    "Animesh",
    60000,
    "JavaScript"
  );


developer.introduce();

developer.showSalary();

developer.work();

developer.code();



/*
============================================================
Developer inherited:

    introduce()
    showSalary()
    work()

Developer also has:

    code()

This is a practical use of inheritance.
============================================================
*/



/* ============================================================
   18. POLYMORPHISM IN REAL-WORLD EXAMPLE
   ============================================================ */



class DeveloperRole extends Employee {

  work() {

    console.log(
      `${this.name} is writing code.`
    );

  }

}



class DesignerRole extends Employee {

  work() {

    console.log(
      `${this.name} is designing UI.`
    );

  }

}



const developerRole =
  new DeveloperRole(
    "Animesh",
    60000,
    "Development"
  );


const designerRole =
  new DesignerRole(
    "Alex",
    55000,
    "Design"
  );



developerRole.work();

designerRole.work();



/*
============================================================
Both have:

    work()

But:

Developer → writes code
Designer → designs UI

Same method.
Different behavior.

POLYMORPHISM.
============================================================
*/



/* ============================================================
   19. INTERACTIVE STUDENT DEMO
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
   20. INTERACTIVE BANK ACCOUNT
   ============================================================ */


const interactiveAccount =
  new BankAccount(
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



function updateBankUI(message) {

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
   21. THE MOST IMPORTANT OOP EXAMPLE
   ============================================================

   Let's put everything together.

   We have:

       Class
       Constructor
       Properties
       Methods
       this
       Inheritance
       super
       Polymorphism
*/



class VehicleSystem {

  constructor(brand) {

    this.brand = brand;

  }


  start() {

    console.log(
      `${this.brand} vehicle started.`
    );

  }


  move() {

    console.log(
      `${this.brand} vehicle is moving.`
    );

  }

}



class CarSystem
  extends VehicleSystem {

  move() {

    console.log(
      `${this.brand} car is driving on the road.`
    );

  }

}



class BoatSystem
  extends VehicleSystem {

  move() {

    console.log(
      `${this.brand} boat is moving on water.`
    );

  }

}



class PlaneSystem
  extends VehicleSystem {

  move() {

    console.log(
      `${this.brand} plane is flying in the sky.`
    );

  }

}



const car =
  new CarSystem(
    "Toyota"
  );


const boat =
  new BoatSystem(
    "Yamaha"
  );


const plane =
  new PlaneSystem(
    "Boeing"
  );



car.start();

boat.start();

plane.start();



car.move();

boat.move();

plane.move();



/*
============================================================
Here we used:

CLASS
  ↓
VehicleSystem

INHERITANCE
  ↓
CarSystem
BoatSystem
PlaneSystem

POLYMORPHISM
  ↓
move()

Each class implements move()
differently.

This is the kind of structure
OOP is designed to help you build.
============================================================
*/



/* ============================================================
   22. BEGINNER PRACTICE
   ============================================================

   Try these yourself.

   ------------------------------------------------------------

   Exercise 1:

   Create a class called:

       Book

   It should have:

       title
       author
       price

   And a method:

       showDetails()

   ------------------------------------------------------------

   Exercise 2:

   Create:

       class BankAccount

   Add:

       deposit()
       withdraw()
       getBalance()

   ------------------------------------------------------------

   Exercise 3:

   Create:

       class Animal

   Then:

       Dog extends Animal
       Cat extends Animal

   Give both:

       speak()

   But make them produce different sounds.

   ------------------------------------------------------------

   Exercise 4:

   Create:

       class Student

   Properties:

       name
       marks

   Method:

       getResult()

   If marks >= 40:

       "Pass"

   Otherwise:

       "Fail"

   ------------------------------------------------------------
*/



/* ============================================================
   23. FINAL OOP MENTAL MODEL
   ============================================================

   Think about OOP like this:

                     CLASS
                       |
                       |
                  Blueprint
                       |
              ----------------
              |       |      |
              ↓       ↓      ↓
           Object  Object  Object
              |
              |
       -------------------
       |                 |
       ↓                 ↓
   Properties          Methods
       |                 |
       ↓                 ↓
     Data              Actions


   Example:

       class Car

       Properties:
           brand
           color
           speed

       Methods:
           start()
           accelerate()
           brake()


   ============================================================

   INHERITANCE:

       Animal
          |
       ----------
       |        |
      Dog      Cat


   POLYMORPHISM:

       dog.speak()
          ↓
       Woof!

       cat.speak()
          ↓
       Meow!


   ENCAPSULATION:

       Keep data controlled.

       #balance


   ABSTRACTION:

       Hide complicated details.

       car.start()

       You don't need to know every internal
       engine operation.

   ============================================================ */



/* ============================================================
   24. FINAL SUMMARY
   ============================================================

   OBJECT

       A real instance/thing.

       Example:
           student1


   CLASS

       Blueprint for creating objects.

       Example:
           class Student


   CONSTRUCTOR

       Runs when object is created.

       Example:
           constructor(name)


   this

       Refers to the current object.


   METHOD

       Function inside a class/object.

       Example:
           study()


   new

       Creates an object from a class.

       Example:
           new Student()


   ENCAPSULATION

       Group and protect data.


   INHERITANCE

       Child gets features from parent.

       Example:
           Dog extends Animal


   super()

       Calls the parent constructor/method.


   POLYMORPHISM

       Same method,
       different behavior.


   ABSTRACTION

       Hide unnecessary implementation details.


   ============================================================

   THE MOST IMPORTANT THING:

       Don't try to memorize everything.

       First understand:

           Object
              ↓
           Class
              ↓
           Constructor
              ↓
           this
              ↓
           Methods
              ↓
           new
              ↓
           Inheritance
              ↓
           Polymorphism
              ↓
           Encapsulation
              ↓
           Abstraction

   ============================================================ */