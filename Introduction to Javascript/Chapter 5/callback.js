function callTenTimes(callback) {
    for (let i = 0; i < 10; i++) {
        callback();
    }
}

callTenTimes(function() {
    console.log("function calling");
});