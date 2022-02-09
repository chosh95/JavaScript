const map = new Map();

for (let num of [1, 2, 3, 4, 5]) {
    map.set((value) => value * 2, num);
}

for (let [key, value] of map.entries()) {
    console.log(` ${key} : ${value}`);
    console.log(key(value));
}