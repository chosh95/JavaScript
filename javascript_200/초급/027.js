var a = [, , ,];
var b = [1, 2, 'A', true, { name: 'abc' }];

console.log(a[0], a[1], a[2], a.length);
for (tmp in b) {
    console.log(b[tmp]);
}