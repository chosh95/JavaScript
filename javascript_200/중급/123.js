const items = ['j', 'a', 'v', 'a'];
const seq = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                const value = items[i];
                i++;
                const done = i > items.length;
                return {value, done};
            }
        }
    }
};

for (let s of seq) {
    console.log(s);
}
const [a, b, c, ...arr] = seq;
console.log('a : ' + a);
console.log('b : ' + b);
console.log('c : ' + c);
console.log('arr : ' + arr);

const str = "hello world";
for (const i in str) {
    console.log(i, str[i]);
}
for (const i of str) {
    console.log(i);
}