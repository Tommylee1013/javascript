let date = new Date();
let hours = date.getHours();

if (hours < 11) {
    console.log("It's time to have a breakfast");
} else if (hours < 15) {
    console.log("It's time to have a lunch");
} else {
    console.log("It's time to have a dinner");
}