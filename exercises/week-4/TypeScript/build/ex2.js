"use strict";
class Student {
    constructor(full_name, age, grades) {
        this.full_name = full_name;
        this.age = age;
        this.grades = grades;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getGradeAvg() {
        return this.grades.reduce((a, b) => a + b) / this.grades.length;
    }
}
const student1 = new Student("John Smith", 23, [77, 68, 99, 98]);
const student2 = new Student("Mike Johnson", 35, [84, 85, 75, 88]);
const student3 = new Student("Jeff Howard", 32, [79, 92, 94, 96]);
const students = [student1, student2, student3];
students.forEach(student => {
    console.log(`${student.full_name}: ${student.getGradeAvg()}`);
});
//# sourceMappingURL=ex2.js.map