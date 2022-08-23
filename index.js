const inquirer = require("inquirer");
const fs = require("fs");


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
        choices: [ 'Artistic license 2.0', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0'
             , 'Do What The F*ck You Want To Public License', 'Eclipse Public License 2.0',"GNU General Public License v3.0", 'GNU Affero General Public License v3.0',
             "MIT License",'GNU General Public License v2.0', 'GNU General Public License v3.0','GNU Lesser General Public License v3.0', 'ISC'
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

const selectedLicense = (data) => {
    // Switch case to return corresponding badge of selected license
    switch(data.license){
        case 'Artistic license 2.0':
            return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
        case 'Boost Software License 1.0':
            return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        case 'Creative Commons Zero v1.0 Universal':
            return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
        case 'Creative Commons Attribution 4.0':
            return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
        case 'Do What The F*ck You Want To Public License':
            return '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
        case 'Eclipse Public License 1.0':
            return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        case 'GNU Affero General Public License v3.0':
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        case 'GNU General Public License v2.0':
            return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        case 'GNU General Public License v3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'GNU Lesser General Public License v3.0':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    }
};
const selectedLicenseInfo = (data) => {
    // Switch case to return corresponding license info
    switch(data.license){
        case 'Artistic license 2.0':
            return `
            Licenced under Artistic license 2.0 
            Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
            `;
        case 'Boost Software License 1.0':
            return `
            Boost Software License - Version 1.0 - August 17th, 2003
            Permission is hereby granted, free of charge, to any person or organization
            obtaining a copy of the software and accompanying documentation covered by
            this license (the "Software") to use, reproduce, display, distribute,
            execute, and transmit the Software, and to prepare derivative works of the
            Software, and to permit third-parties to whom the Software is furnished to
            do so, all subject to the following:
            The copyright notices in the Software and this entire statement, including
            the above license grant, this restriction and the following disclaimer,
            must be included in all copies of the Software, in whole or in part, and
            all derivative works of the Software, unless such copies or derivative
            works are solely in the form of machine-executable object code generated by
            a source language processor.
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
            SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
            FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
            DEALINGS IN THE SOFTWARE.`;
        case 'Creative Commons Zero v1.0 Universal':
            return `
            No Copyright
            The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.
            You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission. See Other Information below.
            `;
        case 'Creative Commons Attribution 4.0':
            return `
            You are free to:
            Share — copy and redistribute the material in any medium or format
            Adapt — remix, transform, and build upon the material for any purpose, even commercially.
            `;
        case 'Do What The F*ck You Want To Public License':
            return `
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
            Version 2, December 2004 
            Copyright (C) 2022 ${data.name} 
            Everyone is permitted to copy and distribute verbatim or modified 
            copies of this license document, and changing it is allowed as long 
            as the name is changed. 
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
            TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 0. You just DO WHAT THE FUCK YOU WANT TO.`;
        case 'Eclipse Public License 1.0':
            return `
            Eclipse Public License, Version 1.0 (EPL-1.0)
            THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.`;
        case 'GNU Affero General Public License v3.0':
            return `
            Copyright (C) 2022 ${data.name}
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU Affero General Public License as
            published by the Free Software Foundation, either version 3 of the
            License, or (at your option) any later version.
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU Affero General Public License for more details.
            You should have received a copy of the GNU Affero General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        case 'GNU General Public License v2.0':
            return `
                Copyright (C) 2022  ${data.name}
            This program is free software; you can redistribute it and/or
            modify it under the terms of the GNU General Public License
            as published by the Free Software Foundation; either version 2
            of the License, or (at your option) any later version.
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
            You should have received a copy of the GNU General Public License
            along with this program; if not, write to the Free Software
            Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
        `;
        case 'GNU General Public License v3.0':
            return `
            Copyright (C) 2022  ${data.name}
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
            You should have received a copy of the GNU General Public License
            along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        case 'GNU Lesser General Public License v3.0':
            return `
            Licenced under GNU Lesser General Public License v3.0 
             Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
        case 'ISC':
            return `
                Copyright 2022  ${data.name}
    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.`;
        case 'MIT':
            return `
                Copyright 2022  ${data.name}
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
`;
}
}

generateTemplate = (data) => {
    return`
# ${data.title}     ${selectedLicense(data)} 
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
    ${selectedLicenseInfo(data)}
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
 
