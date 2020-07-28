/**
 * implement class Person with:
 * 1) properties firstName and lastName
 * 2) constructor that pass firstName and lastName to the object
 * 3) method getFullName
 */
//put your code here

/**
 * implement class Student that extends Person with:
 * 1) property grade
 * 2) constructor that pass grade to the object
 * 3) method getGrade that returns property grade
 */
//put your code here

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }

    getGrade() {
        return `${this.grade}`;
    }
}

const person = new Person('Tanya', 'Makarevich'); //create instance of class person
const student = new Student('Tanya', 'Makarevich', 'A'); //create instance of class student

console.log(student);
console.log(person.getFullName());
console.log(student.getGrade());



module.exports = {
    person,
    student
};