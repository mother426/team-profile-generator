// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testOffice = 13;
    const man = new Manager('John', 'test@email.com', 0, testOffice);

    expect(man.office).toBe(testOffice);
});

test('getRole() should return "Manager"', () => {
    const testRole = 'Manager';
    const man = new Manager('John', 'test@email.com', 0, 'office');

    expect(man.getRole()).toBe(testRole);

});

test("Can get office number via getOffice()", () => {
    const testOffice = 1;
    const man = new Manager('John', 'test@email.com', 0, testOffice);

    expect(man.getOffice()).toBe(testOffice);

});
