console.log('Starting app-promises...');

const users = [
    {
        id: 1,
        name: 'ami',
        schoolId: 101
    },
    {
        id: 2,
        name: 'sss',
        schoolId: 102
    }
];

const grades = [
    {
        id: 1,
        schoolId: 101,
        grade: 8.87
    },
    {
        id: 2,
        schoolId: 102,
        grade: 9.21
    },
    {
        id: 1,
        schoolId: 101,
        grade: 8.88
    }
];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id );
        if(user) {
            resolve(user);
        }
        else {
            reject(`unable to find the user with id ${id}`);
        }
    })
};

getUser(1).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
});

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    });
};

getGrades(101).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
});

const getStatus = (id) => {
    let user;
    return getUser(id).then((tempUser) => {
        user = tempUser;
        return getGrades(user.schoolId).then((grades) => {
            let average = 0;
            if(grades.length > 0) {
                average = grades.map((grade) => grade.grade).reduce((a,b) => (a + b)/grades.length);
            }
            return `${user.name} has ${average} in the class`;
        });
    });
};

getStatus(1).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
});