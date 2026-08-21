// write a function getGrade(score) that:
// - Takes a stundent's score as input
// - Returns the grade based on this logic:
// - 90 and 100: 'A'
// - 80 to 89: 'B'
// - 70 to 79: 'C'
// - 60 to 69: 'D'
// - Below 60: 'F'
//annything else invalid marks should return 'Invalid marks'

// function getGrade(score){
//     if(score>=90 && score<=100) return 'A';
//     else if(score>=80 && score<90) return 'B';
//     else if(score>=70 && score<80) return 'C';
//     else if(score>=60 && score<70) return 'D';
//     else if(score>=0 && score<60) return 'F';
//     else return 'Invalid marks';
// }
// function getGrade(score){
//     if(score>=90 && score<=100) return 'A';
//     if(score>=80 && score<90) return 'B';
//     if(score>=70 && score<80) return 'C';
//     if(score>=60 && score<70) return 'D';
//     if(score>=0 && score<60) return 'F';
//     return 'Invalid marks';
// }

// console.log(getGrade(98)); // A
// console.log(getGrade(85)); // B
// console.log(getGrade(75)); // C
// console.log(getGrade(65)); // D
// console.log(getGrade(55)); // F
// console.log(getGrade(101)); // Invalid marks


//Rock paper scissors logic


// function rps(user,computer){

//         if (user === "rock" && computer === "scissors") return "rock";
//         if (user === "scissors" && computer === "paper") return "scissors";
//         if (user === "paper" && computer === "rock") return "paper";

// rps('rock','scissors'); // user wins


// function rps(user,computer){
//         if (user === computer) return "draw";
//         if (user === "rock" && computer === "scissors") return "user wins";
//         if (user === "scissors" && computer === "paper") return "user wins";
//         if (user === "paper" && computer === "rock") return "user wins";
//         return "computer wins";
// }
// rps('rock','scissors'); // user wins