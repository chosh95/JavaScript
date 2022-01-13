const obj = {
    name: 'david',
    age: 20,
    sth: {
        a: 'a',
        b: 'b'
    }
};
const json = JSON.stringify(obj, null, 4)
console.log(json);
console.log(JSON.stringify('hi, hello'));

const obj1 = JSON.parse(json)
console.log(obj1.age + ' ' + obj1.name);

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const jsonstrfy = JSON.stringify(arr);
console.log(jsonstrfy);

console.log(JSON.parse(jsonstrfy));

console.log(JSON.parse("{\"obj\":\"Hey\"}"));