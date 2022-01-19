const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;

console.log(numRegExp.test("test"));
console.log(numRegExp.test("1234"));
console.log(numRegExp.test(1234));
console.log(phoneRegExp.test("010-1234-1133"));
console.log(phoneRegExp.test("02-1234-1133"));

const result1 = /java/ig.exec("java is not Javascript");
console.log("=================================");
console.log(result1[0]);
console.log(result1[1]);
console.log(result1.index);
console.log(result1.input);

console.log("=================================");
const name = "March Amy";
console.log(name.replace(/(March) (Amy)/, "$2 $1"));
console.log(name.replace(/(March) (Amy)/, (str, first, second, offset, s) => {
    console.log(`${second} is name, ${first} is first name`);
    return `${second} ${first} ${offset} ${s}`
}));