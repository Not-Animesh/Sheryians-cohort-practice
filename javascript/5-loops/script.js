//repeat krne ko loop kehte hai
// for while do-while forin forof foreach

// 1 1 1 1 1 1 1 1 1 
// 1 2 3 4 5 6 7 8 9

// kaha se jaana hai , kaha tak jana hai , kitne step me jana hai, kaise jana hai
// for
// 1-50

// kaha se jana hai -> kab rukna hai -> kaisse jana hai
// while loop

// 1-40 for
// 20-30 for
// hello na aajaye - while
// laal color ka ped - while 



// for 1-100

// for (let i = 1; end; change){}

// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// } 

// start
// while(end){
//     //code
//     change
// }

// let i = 1;
// while (i < 32) {
//     console.log(i);
//     i++;
// }

// let i = 1;
// do{
//     console.log(i);
//     i++;
// }   
// while (i < 32) {
//     console.log(i);
//     i++;
// }


for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i == 50) {
        break;
    }
}
for (let i = 1; i <= 100; i++) {
    if (i == 50) {
        continue;
    }
    console.log(i);
}