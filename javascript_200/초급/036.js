function sum(a, ...rest) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);

    var restTotal = 0;
    for (var i = 0; i < rest.length; i++) {
        restTotal += rest[i];
    }
    console.log(restTotal);
    return restTotal;
}

sum(1, 2, 3);