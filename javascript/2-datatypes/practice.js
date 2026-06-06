//predict the result: true + false, null + 1, 5 + "5", !!undefined

true + false; // 1 (true is treated as 1 and false is treated as 0)
null + 1; // 1 (null is treated as 0)
5 + "5"; // "55" (number is converted to string)
!!undefined; // false (undefined is a falsy value)

// NaN ek failed mathematical operation ka result hota hai, jaise ki 0/0, ya phir "hello" - 1, ya phir parseInt("abc") etc. NaN ka type number hota hai, lekin NaN kisi bhi value ke barabar nahi hota hai, including itself. Isliye NaN == NaN false hota hai. NaN ko check karne ke liye aap isNaN() function ka use kar sakte hain.

