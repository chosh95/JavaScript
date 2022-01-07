function checkVal(val) {
    if (typeof val !== "number") {
        throw 'type cast Exception';
    }
    console.log(val);
}

checkVal(10);

try {
    checkVal('10');
} catch (e) {
    console.log(`checkVal error ${e}`);
} finally {
    console.log('완료');
}
