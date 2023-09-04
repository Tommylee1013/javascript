const repl = require('repl');

repl.start({
    prompt : "Enter the Number > ",
    eval : (command, context, filename, callback) => {
        let number = Number(command);

        if (isNaN(number)){
            console.log("Not a Number");
        } else {
            console.log("Number");
        }
        callback();
    }
})