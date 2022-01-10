const studentProtoType = {
    gainExp: function () {
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 20,
    __proto__: studentProtoType
};

harin.gainExp();
console.log(harin);