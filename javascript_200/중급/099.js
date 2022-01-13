const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((sum, x) => {
    return sum + x;
});

const result = arr.concat(res);
console.log(result);

console.log(res)

var str1 = 'abc';
var str2 = 'def';
console.log(str1.concat(str2));

console.log(Object.keys(arr));
console.log(Object.values(arr));