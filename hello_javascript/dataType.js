var obj1 = {
    name: 'hello',
    age: 12
};

var obj2 = obj1;
obj2.age=20

var arr = new Array(10);
arr.push(2);

document.write(arr);
document.write('<br>');
document.write(arr.length);
document.write('<br>'); 
document.write(typeof obj1);
document.write('<br>');
document.write(obj1.age);
document.write('<br>');
document.write(obj1==obj2);