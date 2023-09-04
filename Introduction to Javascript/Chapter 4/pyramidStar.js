let output1 = '';
for (let i = 0; i < 10; i++){
    for (let j = 0; j < i + 1; j++){
        output1 += '*';
    }
    output1 += '\n';
}
console.log(output1);

let output2 = '';

for (let k = 0; k < 10; k++){
    for (let l = 0; l < 10 - k; l++){
        output2 += ' ';
    }
    for (let l = 0; l < k + 1; l++){
        output2 += '*';
    }
    output2 += '\n';
}

console.log(output2);