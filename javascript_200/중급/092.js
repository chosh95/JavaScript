const arr1 = [2, 0, 3, 4, 1];
const arr2 = [2, 0, 3, 4, 1];
const objArr = [
    { id: 2, name: 'ABC' },
    { id: 0, name: 'CDE' },
    { id: 2, name: 'ACB' },
    { id: 3, name: 'EFS' },
    { id: 1, name: 'GHF' }
];

arr1.sort(function (a, b) {
    return a - b;
});

arr2.sort(function (a, b) {
    return b - a;
});
objArr.sort(function (a, b) {
    if (a.id > b.id) {
        return 1;
    } else if (a.id == b.id) {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    }
    else return -1;
});

console.log(arr1);
console.log(arr2);
console.log(objArr);