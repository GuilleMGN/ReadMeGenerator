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
        console.log(data.title);
        console.log(data.sections);
        console.log(data.additional);
        console.log(data.license);
        
        const filename = generateReadMe(data);
        fs.writeFile("README.md", filename, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
const generateReadMe = ({title, sections, additional, license}) => {
    // for (var i = 0; i < sections.length; i++) {
    //     sections[i] = sections[i].replace(',', '\n## ');
    //     return sections;
    // }
    // for (var i = 0; i < additional.length; i++) {
    //     additional[i] = additional[i].replace(',', '\n## ');
    //     return additional;
    // }
    // sections.replace(',', '\n## ');
    // additional.replace(',', '\n## ');
    const readme =
`# ${title}
## ${sections.toString().replace(',', '\n## ').replace(',', '\n## ').replace(',', '\n## ').replace(',', '\n## ')}
## ${additional.toString().replace(',', '\n## ').replace(',', '\n## ').replace(',', '\n## ').replace(',', '\n## ')}
## License: ${license}`
    return readme;
}