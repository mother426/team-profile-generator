// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(emp instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
    const name = 'John';
    const emp = new Employee(name);

    expect(emp.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testId = 13;
    const emp = new Employee('test', 1, testId);

    expect(emp.id).toBe(testId);
});

test("Can set email via constructor argument", () => {
    const tEmail = 'john@john.com';
    const emp = new Employee('test', tEmail);
    
    expect(emp.email).toBe(tEmail);
});

test("Can get name via getName()", () => {
    const name = 'John';
    const emp = new Employee(name);
    
    expect(emp.getName()).toBe(name);
});

test("Can get id via getId()", () => {
    const id = 13;
    const emp = new Employee('john', 0, id);

    expect(emp.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
    const testEmail = 'john@john.com';
    const emp = new Employee('john', testEmail);

    expect(emp.getEmail()).toBe(testEmail);
});

test("getRole() should return \"Employee\"", () => {
    const testRole = 'Employee';
    const emp = new Employee('John', 0, '')

    expect(emp.getRole()).toBe(testRole);
});
