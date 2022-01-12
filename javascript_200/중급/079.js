const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

distributedArr.push('9');
distributedArr.unshift('0');
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, e1 => e1 * 2);
console.log(modifiedArr);

const capitals = `A,B
C,D
E,F
G,H`;

const arr = capitals.split('\n');
console.log(arr);
console.log(arr[0].split(',')[0] + ' ' + arr[1].split(',')[1]);

const arr1 = [1,2];
const arr2 = [3,4];
console.log(typeof (arr1 + arr2));

console.log(arr1.concat(arr2));
console.log(typeof arr1);