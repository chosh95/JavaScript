const util = require('util');

const name = 'Tony';
const greetings = util.format('hello %s', name);
console.log(greetings);
