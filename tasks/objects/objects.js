/**
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
let person = {
    firstName: 'firstName',
    lastName: 'lastName',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
    grade: 'A',
    getGrade: function () {
        return this.grade;
    }
};
Object.setPrototypeOf(student, person);

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);

module.exports = {
    person,
    student,
    student2
};