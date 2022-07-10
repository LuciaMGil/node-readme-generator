const inquirer = require("inquirer")

console.log(`program started`)
// Prompts asking for Title, Description, Table of contents, Installation, Usage , License, Contributing, Tests and Questions
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the title of your application: ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your application: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Create a table of contents: ',
        name: 'table',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your application: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter instructions on how to use the application: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select your license: ',
        name: 'license',
        choices: [ "Apache License 2.0", 'Creative Commons Zero v1.0 Universal', "BSD 2-Clause 'Simplified' License",
             'Boost Software License 1.0', 'Eclipse Public License 2.0',"GNU General Public License v3.0", 'GNU Affero General Public License v3.0',
             "MIT License", 'BSD 3-Clause "New" or "Revised" License','GNU General Public License v2.0', 'GNU Lesser General Public License v2.1'
        ],
    },
    {
        type: 'input',
        message: 'Enter GitHub username: ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email',
    },
    
])
.then ((data) => {
    console.log(data)
    console.log(`program complete`)
} )