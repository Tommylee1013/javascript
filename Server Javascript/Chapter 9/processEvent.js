process.on('exit', () => {
    console.log('process is down');
});

process.on('uncaughtException', () => {
    console.log("예외가 발생하였습니다");
});

error.error.error();