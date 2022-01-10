const double = x => x + x;
const add = (a, b) => {
    a + b;
}

const printArguments = (...args) => {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    return args.length;
}
console.log(printArguments(1, 2, 3));