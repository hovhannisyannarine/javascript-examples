console.log('Classes');
// 1
class Person {
    constructor(){
        this.name = 'Leo';
        this.age = 18;
        this.country = 'Georgia';
    }
    show(){
        return`Name: ${this.name} Age: ${this.age} Country: ${this.country}`
    }
}
let person = new Person();
console.log(person.show());
//2
class Employee {
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
  sumYearFullSalary(){
      return this.salary * 12;
  }
}

const employee = new Employee('Leo',30);
console.log('Employee Annual Salary:', employee.sumYearFullSalary());

class Manager extends Employee{
    constructor(name, salary, department) {
        super(name, salary); // Call the parent class constructor to set name and salary
        this.department = department;
    }
    bonusSalary() {
        const annualSalary = super.sumYearFullSalary();
        const bonus = annualSalary * 0.1; // bonus of 10% for managers
        return annualSalary + bonus;
    }
    getManagerInfo() {
        return `Name: ${this.name}, Department: ${this.department}`;
    }
}

let manager = new Manager('Leo',30,'Manager');
console.log(manager.getManagerInfo());
console.log('Manager Annual Salary:',manager.bonusSalary());