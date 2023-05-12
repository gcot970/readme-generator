// TODO: Include packages needed for this application
const fs = require('fs');
const genMark = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = ["What is the project title?", "What is the description of the project?", "How would you install your project?", "How do you use the project?", "What are the contributing guidelines to this project?", "Please provide some coding examples...", "List some frequently asked questions and their answers...", "What is the license?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, `${data}\n`, (err) =>
        err ? console.error(err) : console.log('ReadMe created!')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'desc',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'install',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contrib',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'faq',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'license',
            },
        ])
        .then((data) => {
            writeToFile("readme.md", genMark(data))
        }
            
        );



};

// Function call to initialize app
init();