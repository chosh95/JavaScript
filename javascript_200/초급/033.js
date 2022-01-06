const obj = {};

const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');
const sym4 = Symbol.for('foo');

console.log(sym1 == sym2);
console.log(sym2 == sym3);
console.log(sym2 == sym4);

obj[sym1] = '원하는 값1';
obj[sym2] = '원하는 값2';
obj[sym3] = '원하는 값3';
obj[sym4] = '원하는 값4';

console.log(obj);

console.log(obj[sym1]);
console.log(obj[sym2]);
console.log(obj[sym3]);
console.log(obj[sym4]);