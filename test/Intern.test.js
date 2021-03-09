// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testSchool = 'school';
    const int = new Intern('john', 'test@email.com', 0, testSchool)
    expect(int.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
    const testRole = 'Intern';
    const int = new Intern('John', 'test@email.com', 0, 'school')

    expect(int.getRole()).toBe(testRole);

});

test("Can get school via getSchool()", () => {
    const testSchool = 'school';
    const int = new Intern('John', 'test@email.com', 0, 'school')

    expect(int.getSchool()).toBe(testSchool);
});
