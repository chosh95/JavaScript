let user = {
    name: 'jeado',
    toString() {
        return this.name;
    }
};

Object.defineProperty(user, 'toString', {
    enumerable: false
});
for (let key in user) {
    console.log(key); // name만 보이고 toString은 안보임.
}