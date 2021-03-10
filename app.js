// Imports needed for this application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// Pathing to access HTML templates
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// HTML rendering function imported
const render = require("./lib/htmlRenderer");
// questions array that will be passed to render
var allAnswers = [];
// Function that starts questions prompt
function startPrompt() {
  inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role on this team?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(answers => {
      if (answers.role === "Manager") {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is your ID?",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          },
          {
            type: "input",
            name: "office",
            message: "What is your office number?",
          },
        ])
        .then((answers) => {
          const manager = new Manager(answers.name, answers.email, answers.id, answers.office);
          allAnswers.push(manager);
          addMoreUsers(allAnswers);
        });
      } if (answers.role === "Engineer") {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is your ID?",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          },
          {
            type: "input",
            name: "git",
            message: "What is your Github Username?",
          },
        ]).then((answers) => {
          const engineer = new Engineer(answers.name, answers.email, answers.id, answers.git);
          allAnswers.push(engineer);
          addMoreUsers(allAnswers);
        });
      } if (answers.role === "Intern") {
        inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is your name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is your ID?",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          },
          {
            type: "input",
            name: "school",
            message: "What school do/did you attend?",
          }
        ]).then((answers) => {
          const intern = new Intern(answers.name, answers.email, answers.id, answers.school);
          allAnswers.push(intern);
          addMoreUsers(allAnswers);
        });
      }
    });
};
// Asks users if they want to add more team members, if not render HTML
function addMoreUsers() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: "addMoreUsers",
        message: "Add another team member?",
        choices: ['Yes', 'No']
      },
    ])
    .then(function (yesNo) {
      if(yesNo.addMoreUsers === 'Yes'){
          startPrompt();
      } else {
          const finishedHTML = render(allAnswers);
          fs.writeFile('./generatedHTML/final.html', finishedHTML, err => {
            if (err) return console.error(err);
          });
      }
    })
};
// Initiate prompt when program is invoked
startPrompt();