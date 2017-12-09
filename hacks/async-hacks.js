console.log('Starting async-hacks...');

setTimeout(() => {
    console.log('Inside the block');
}, 5000);

setTimeout(() => {
    console.log('Inside the block 2');
}, 500);

console.log('The end');