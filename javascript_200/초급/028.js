var family = {
    'address': 'seoul',
    members: {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount: function () {
        return Object.keys(this.members).length;
    }
}

console.log(family.address);

family.addFamily(30, 'david', 'father');
family.addFamily(28, 'Nancy', 'mother');
family.addFamily(4, 'white', 'dog');
console.log(family.getHeadcount());

var printMembers = function () {
    var members = family.members;
    for (role in members) {
        console.log('role => ' + role + ', name : ' +
            members[role].name + ', age = ' + members[role].age);
    }
}

var members = family.members;
members['nephew'] = { age: 3, name: 'hyun' };
// delete members['dog'];
delete members.dog;
printMembers();