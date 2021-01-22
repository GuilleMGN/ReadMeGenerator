const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {   // Ask for PROJECT TITLE
            type: 'input',
            name: 'title',
            message: "Please enter your project's title: ",
        },
        {   // Ask for DESCRIPTION
            type: 'input',
            name: 'description',
            message: "Please enter your project's description: ",
        },
        {   // Ask for INSTALLATION
            type: 'input',
            name: 'installation',
            message: "Please enter your project's installation instructions: ",
        },
        {   // Ask for USAGE
            type: 'input',
            name: 'usage',
            message: "Please enter your project's usage information: ",
        },
        {   // Ask for CONTRIBUTING
            type: 'input',
            name: 'contribution',
            message: "Please enter your project's contribution guidelines: ",
        },
        {   // Ask for TESTS
            type: 'input',
            name: 'tests',
            message: "Please enter your project's test insctructions: ",
        },
        {   // Ask for LICENSE TYPE
            type: 'list',
            message: 'Which license would you like to add?',
            name: 'license',
            choices: [
                'Apache License 2.0', 
                'GNU General Public License v3.0', 
                'MIT License', 
                'Eclipse Public License 2.0', 
                'Boost Software License 1.0', 
                'IBM Public License Version 1.0',
                'Mozilla Public License 2.0'
            ],
        },
        {   // Ask for GITHUB USERNAME
            type: 'input',
            name: 'github',
            message: "Please enter your GitHub username: ",
        },
        {   // Ask for EMAIL ADDRESS
            type: 'input',
            name: 'email',
            message: "Please enter your email address: ",
        },
    ])
    .then((data) => {
        const filename = generateReadMe(data);
        fs.writeFile("GeneratedREADME.md", filename, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
const generateReadMe = ({ title, description, installation, 
    usage, contribution, tests, license, github, email }) => {
    // License Badges
    switch (license) {
        case 'Apache License 2.0':
            license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'GNU General Public License v3.0':
            license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
        case 'MIT License':
            license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Eclipse Public License 2.0':
            license = '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
            break;
        case 'Boost Software License 1.0':
            license = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        case 'IBM Public License Version 1.0':
            license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
            break;
        case 'Mozilla Public License 2.0':
            license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;
        default: 
            license = "Couldn't load License badge. ";
    }
    // Generates README format
    const readme =
`# ${title}

## Description 
${description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#Tests)
* [License](#license)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${tests}

## License 
${license}

## Questions
Feel free to contact me: 
### GitHub: 
www.github.com/${github.trim()}
### Email: 
${email.trim()}`
    return readme;
}