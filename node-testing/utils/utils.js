console.log('Starting utils...');

let add = (a, b) => a + b;

let asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

let square = (a) => a * a;

let setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};



module.exports = {
    add,
    asyncAdd,
    square,
    setName
};