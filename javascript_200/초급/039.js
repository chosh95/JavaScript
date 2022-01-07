var a = 'global';

function print1() {
    console.log(a);
}

function print2() {
    var a = "local";
    print1();
    console.log(a);
}

print1();
print2();
