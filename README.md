# Team Profile Generator 

This application takes user inputs from the command-line to generate an HTML document that will display a 'team-profile'. 

![Team Profile Example](/assets/teamprofileexample.png)

## Installation and Usage

This application requires Node.js and the inquirer dependency to function. To download you can follow [this link.](https://nodejs.org/en/)

This application is not deployed live on Github pages, to use this program you can fork this repository to a Github account of your choosing and run it locally on your machine. The 'fork' button is located near the top-right of this repository. 

![Fork Button](/assets/forkbutton.png)

Before you can use this program you must have the 'inquirer' dependency set up in this repository. To do this, simply run the command 'npm i inquirer' in the terminal at the root of this directory. 

![Inquirer Installation Command](/assets/inquirerinstall.png)

After the inquirer dependency is installed into this directory, the main program can be invoked with the command 'node app.js' (or 'node app') in the command line. 

![Command to invoke program](/assets/programinvoke.png)

After the program is invoked, the user is prompted through the command line asking for team member information.

![Command-line Questions](/assets/commandlinequestions.gif)

When the user selects 'no' to adding another team member, the application will take the data from user command-line inputs to create an HTML page containing all of the team member information filled out in the prompt. 

The final html is titled 'final.html' and will appear in the generatedHTML folder of this directory. 

![final.html Location](/assets/htmlfinallocation.png)

## Development Testing

This project was developed using Jest testing. Tests for each 'Employee' class are located in the /test folder of this directory. 

If you would like to run the tests for this program yourself, install the 'Jest' dependency with the command 'npm i jest' 

![Command to install Jest](/assets/jestinstallcommand.png)

With the Jest dependency installed, all tests in the /test folder can be run using the command 'npm test'

![npm test Demo](/assets/npmtestdemo.gif)

## Technologies Used for this Project

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)

## Full GIF Demo
 

![GIF demo of program](/assets/programdemogif.gif)

### Note: a sample HTML file using this program is included inside the /generatedHTML folder of this repository. 