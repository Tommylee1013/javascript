let object = {
    name : 'banana',
    price : 1200,
    print : function () {
        console.log(`The price of ${this.name} is ${this.price} Korean Won.`);
    }
};

object.print();