var arr = [1, 2, 30, 44, 5];

var [b, c, ...rest] = arr;
console.log(`b : ${b} and c : ${c} and rest : ${rest}`);

var [a = 10, b = 8, tmp = 1999] = [1, 20, 19];
console.log(` a : ${a}, b : ${b}, tmp : ${tmp}`);

[a, b] = [b, a]
console.log(` a : ${a}, b : ${b}`);

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
[a, , , , f] = getArr();
console.log(`a : ${a}, f : ${f}`);