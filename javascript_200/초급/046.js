let user = {};
Object.defineProperty(user, "age", {
    get: function () {
        return this._age;
    },
    set: function (age) {
        if (age < 0) {
            console.log('age should be bigger than 0');
        } else {
            this._age = age;
        }
    },
    enumerable: true
});

user.age = 10;
console.log(user.age);
user.age = -1;