const inquirer = require("inquirer")

console.log(`program started`)
// Prompts asking for Title, Description, Table of contents, Installation, Usage , License, Contributing, Tests and Questions
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'name',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter the title of your application: ',
        name: 'title',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter a description of your application: ',
        name: 'description',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Create a table of contents: ',
        name: 'table',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your application: ',
        name: 'installation',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter instructions on how to use the application: ',
        name: 'usage',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contribution',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'test',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
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
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email',
        validate: (value) => {
            if (value) {
                return true
            } else {return `Please enter a response`}
        }
    },
    
])
.then ((data) => {
    console.log(data)
    console.log(`program complete`)
    console.log(answers)
} )

