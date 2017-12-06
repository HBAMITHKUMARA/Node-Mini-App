console.log('Starting notes...');

console.log(module);

module.exports.addNote = () => {
    console.log('addNote');
    console.log(module);
    return 'New note';
}

module.exports.add = (a, b) => {
    console.log(a + b);
    console.log(module);
    return 'sum=' + (a + b);
}

