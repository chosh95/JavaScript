const map = new Map();
map.set('key1', 'value1');

map.set([1, 2, 3], 'Three Values');

const arr = [1, 2, 3];
map.set(arr, 'arr value');

map.set(function () {
}, 'function value');

console.log(map.get([1, 2, 3])); // undefined 출력
console.log(map.get(arr)); // arr value 출력

console.log('map size : ' + map.size);
console.log(map.keys())
console.log("========================")
console.log(map.values())
console.log("========================")
console.log(map.entries())

console.log("========================")
for (let key of map.keys()) {
    console.log(key);
}

console.log("========================")
for (let [key, value] of map.entries()) {
    console.log(`${key} : ${value}`);
}