var store = { snack: 1000, gum: 500, coke: 1500 };

for (item in store) {
    if (!store.hasOwnProperty(item)) continue;
    console.log(item + "`s price is : " + store[item]);
}

