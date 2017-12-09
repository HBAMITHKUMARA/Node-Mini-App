console.log('Starting arrow-function-hacks...');


var square = (num) => {
    return num * num;
};
console.log(square(4));


var square1 = (num) => num * num;
console.log(square1(5));


var user = {
    name: 'ami',
    sayHi: () => {  // arrow function
        // console.log(arguments); // not bind to the values
        console.log(`Hi!!! ${this.name}`);  // this bind wont work
    },
    sayHiAlt () {   // regular function
        console.log(arguments); // bind to the values
        console.log(`Hi!!! ${this.name}`);  // this bind works
    }
};
user.sayHi(1,2);
user.sayHiAlt(1,2,3);
