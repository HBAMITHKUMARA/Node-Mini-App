console.log('Starting promise-hacks...');

// example - 1
var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey!!! it worked.');
        // reject('Oops!!! something went wrong');
    }, 2000);
});

p.then((responseMessage) => {
    console.log('Success:   ' + responseMessage);
    },
    (errorMessage) => {
        console.log('Error: ' + errorMessage);
    }
);



// example - 2
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }else {
                reject('wrong input');
            }
        }, 3000);
    });
};

var p1 = asyncAdd(2, 6);

p1.then((responseMessage) => {
        console.log('Success:   ' + responseMessage);
    },
    (errorMessage) => {
        console.log('Error: ' + errorMessage);
    }
);

asyncAdd(2, '6').then((responseMessage) => {
        console.log('Success:   ' + responseMessage);
    },
    (errorMessage) => {
        console.log('Error: ' + errorMessage);
    }
);




// example - 3
