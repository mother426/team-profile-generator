// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
    const testGit = 'Github';
    const eng = new Engineer('John', 'test@email.com' , 0 , testGit);
    
    expect(eng.github).toBe(testGit);
});

test("getRole() should return \"Engineer\"", () => {
    const testRole = 'Engineer';
    const eng = new Engineer('John', 'test@email.com', 0, 'github')

    expect(eng.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
    const testGit = 'github';
    const eng = new Engineer('John', 'test@email.com', 0, testGit);

    expect(eng.github).toBe(testGit);
});
