let object = {
    name : 'banana',
    price : 1200
};

for (let key in object) {
    console.log(`${key} : ${object[key]}`);
}