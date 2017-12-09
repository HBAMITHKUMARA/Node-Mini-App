console.log('Starting callbacks...');

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