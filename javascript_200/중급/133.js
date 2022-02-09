const arr = ['a', 'b', 'c', 'b', 'c', 'd'];
const s = new Set(arr);
console.log(s);
console.log(s.keys());
console.log(s.values());
console.log(s.entries());

for (let [key, value] of s.entries()) {
    console.log(`${key} : ${value}`);
}

s.forEach((value, key) => {
    console.log(`${key} : ${value}`);
})