const fs = require('fs');
const async = require('async');

async.parallel({
    fileA : (callback) =>{
        fs.readFile('a.txt', callback);
    },
    fileB : (callback) =>{
        fs.readFile('b.txt', callback);
    },
    fileC : (callback) =>{
        fs.readFile('c.txt', callback);
    }
}, (error, results) => {
    console.log(results.fileA);
    console.log(results.fileB);
    console.log(results.fileC);
    console.log(results.fileA.toString());
    console.log(results.fileB.toString());
    console.log(results.fileC.toString());
});
