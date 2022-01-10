if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);
// console.log(blockScopeValue); // 에러

let value = "outside";
if (true) {
    // console.log(value); // inside value의 호이스팅으로 에러 발생
    let value = "inside";
}


let val = 'oldValue';
val = 'newValue';

const val2 = 'oldValue';
// val2 = 'newValue'; // 에러 발생