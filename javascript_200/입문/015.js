var hometown = [
    { name: 'name1', city: 'cityA' },
    { name: 'name2', city: 'cityB', place: 'placeB' },
    { name: 'name3', city: 'cityC', place: 'placeC' },
    { name: 'name4', city: 'cityD', place: 'placeD' },
]

var isHometown = function (hometownObj, name) {
    console.log(`function executed. find ${name} in ${hometownObj.city}`);

    if (hometownObj.name === name) {
        console.log(`found person!! ${hometownObj.name} was in ${hometownObj.place}`);
        return true;
    }
    return false;
}

var person;
while (person = hometown.shift()) {
    if (!person.name || !person.place || !person.city) continue;

    var result = isHometown(person, 'name3');
    if (result) break;
}



var newNames = ['A', 'B', 'C', 'D'];
var newCities = ['A1', 'B1', 'C1', 'D1'];

var i = 0;
do {
    hometown[i + 1] = { name: newNames[i], city: newCities[i] };
    i++;
} while (i < 4);

console.log(hometown);