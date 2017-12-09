console.log('Starting async-hacks...');


// example
setTimeout(() => {
    console.log('Inside the block');
}, 5000);

setTimeout(() => {
    console.log('Inside the block 2');
}, 500);

console.log('The end');




// example
var getUser = (id, callback) => {
    user = {
        id: id,
        name: 'ami'
    };
    setTimeout(() => {
        callback(user);
    }, 5000);
};

getUser(21, (userObj) => {
    console.log(userObj);
});