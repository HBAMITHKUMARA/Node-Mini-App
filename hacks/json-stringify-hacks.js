console.log('Starting json-stringify-hacks...');

// JSON.stringify(value[, replacer[, space]])

var temp =  JSON.stringify({});                  // '{}'
temp =  JSON.stringify(true);                // 'true'
temp =  JSON.stringify('foo');               // '"foo"'
temp =  JSON.stringify([1, 'false', false]); // '[1,"false",false]'
temp =  JSON.stringify({ x: 5 });            // '{"x":5}'

temp =  JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))
// '"2006-01-02T15:04:05.000Z"'

temp =  JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
temp =  JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

temp =  JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Symbols:
temp =  JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
temp =  JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
temp =  JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
temp =  JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
    if (typeof k === 'symbol') {
        return 'a symbol';
    }
});
// '{}'

// Non-enumerable properties:
temp =  JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'



// The replacer parameter example
function numberReplacer(key, value) {
    // Filtering out properties
    if (typeof value === 'number') {
        return undefined;
    }
    return value;
}

function stringReplacer(key, value) {
    // Filtering out properties
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};

temp =  JSON.stringify(foo, numberReplacer);
console.log(temp);
// {"foundation":"Mozilla","model":"box","transport":"car"}

temp =  JSON.stringify(foo, stringReplacer);
console.log(temp);
// {"week":45,"month":7}



// The space parameter example
temp =  JSON.stringify({ uno: 1, dos: 2 }, null);
console.log(temp);
// {"uno":1,"dos":2}

temp =  JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
console.log(temp);
// {
//     "uno": 1,
//     "dos": 2
// }
