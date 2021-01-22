const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project's name?",
        },
        {
            type: 'checkbox',
            message: 'Which sections would you like to include?',
            name: 'sections',
            choices: ['Description', 'Table of Contents', 'Installation', 'Usage']
        },
        {
            type: 'checkbox',
            message: 'Would you like to include these sections too?',
            name: 'additional',
            choices: ['License', 'Contributing', 'Tests', 'Questions']
        },
        {
            type: 'list',
            message: 'Which license would you like to add?',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Eclipse Public License 2.0', 'Boost Software License 1.0'],
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
## ${sections.toString().replace(',', '\n## ')}
## ${additional.toString().replace(',', '\n## ')}
## License: ${license}`
    return readme;
}