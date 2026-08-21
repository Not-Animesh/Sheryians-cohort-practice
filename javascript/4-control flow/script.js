// if else else-if 
// switch case
// early return pattern

if(condition1) {
    // code block for condition1
} else if(condition2) {
    // code block for condition2
} else {
    // code block for default case
}   


switch (expression) {
    case value1:
        // code block for value1
        break;
    case value2:
        // code block for value2
        break;
    default:
        // code block for default case
}

function getVal(val){
    if(val<100) return 'A';
    else if(val<200) return 'B';
    else return 'C';
}

console.log(getVal(89));

