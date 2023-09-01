function sum(min, max) {
    let output = 0;
    for (let i = min; i<=max; i++){
        output += i;
    } return output;
}

function multiply(min, max) {
    let output = 1;
    for (let i = min; i <= max; i++){
        output *= i;
    } return output;
}

console.log(sum(1, 100));
console.log(multiply(1,10));