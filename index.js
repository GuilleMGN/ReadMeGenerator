const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "Please enter your project's title: ",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please enter your project's description: ",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please enter your project's installation instructions: ",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please enter your project's usage information: ",
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Please enter your project's contribution guidelines: ",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please enter your project's test insctructions: ",
        },
        {
            type: 'list',
            message: 'Which license would you like to add?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Eclipse Public License 2.0', 'Boost Software License 1.0'],
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your GitHub username: ",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address: ",
        },
    ])
    .then((data) => {      
        const filename = generateReadMe(data);
        fs.writeFile("README.md", filename, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
const generateReadMe = ({title, description, installation, usage, contribution, tests, license, github, email}) => {
    const readme =
`# ${title}

## ${description}

## ${installation}

## ${usage}

## ${contribution}

## ${tests}

## License: ${license}

## ${github}

## ${email}`
    return readme;
}