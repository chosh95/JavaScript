const obj = {
    name: 'david'
};

Object.seal(obj);

obj.name = 'nike';
obj.age = 39;

console.log(obj);

var min = 10;
var max = 100;
console.log(Math.random() * (max - min + 1) + min);

const date = new Date();
console.log(new Date());
console.log(date.getFullYear() + ' ' + (date.getMonth()+1) + ' ' + (date.getDate()));