class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {

        const bonus = this.salary * 0.1;
        return super.calculateAnnualSalary() + bonus;
    }
}

const manager1 = new Manager("John", 50000, "Sales");
const manager2 = new Manager("Alice", 60000, "Marketing");

const manager1Salary = manager1.calculateAnnualSalary();
const manager2Salary = manager2.calculateAnnualSalary();

console.log(`${manager1.name}'s annual salary: $${manager1Salary}`);
console.log(`${manager2.name}'s annual salary: $${manager2Salary}`);
