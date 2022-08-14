






const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

console.log(`program started`)

// Prompts asking for Title, Description, Table of contents, Installation, Usage , License, Contributing, Tests and Questions
promptQuestions = () => {
    return inquirer.prompt([
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
    
])}



generateTemplate = (data) => {
    return`
# ${data.title}     
    ${data.description}
        
## Table of Contents
        
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)
        
# Installation
    ${data.installation}
# Usage
    ${data.usage}
# Contribution
    ${data.contribution}
# Test
    ${data.test}
# Questions
    If you have any questions or would like to contact me feel free to reach me at:
    - Email: ${data.email}
    - Github: [${data.github}](https://github.com/${data.github})
## License
    `
}




promptQuestions()
.then ((data) => {
    console.log(data);  
    const readme = generateTemplate(data);
    console.log(readme);

    return fs.writeFile('README.md', readme, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

   
})
.catch(function(err) {
        console.log(err);
});
 
