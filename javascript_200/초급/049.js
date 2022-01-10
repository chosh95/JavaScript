function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
        console.log(student + '에게' + this.subject + '를 가르친다.');
    };
}

const jay2 = new Teacher('jay', 30, 'Js');
console.log(jay2);
jay2.teach('harin');