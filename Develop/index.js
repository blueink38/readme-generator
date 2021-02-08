// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
function questions() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a brief description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is this used?',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please let us know how to use this!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What contributed to this application?',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('Please list contributers');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What licence(s) would you like listed?',
        choices: ['Apache%202.0', 'ISC', 'MIT']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How to install this application',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please give installation instructions');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'How to test this application?',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Try <npm test>');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub user name?',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please give your GitHub user name');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please give your email address');
            return false;
          }
        }
      },
    ]);
  };
  
async function init() {
  try {
    const data = await questions();
    const generateContent = generateMarkdown(data);

    await writeFileAsync('./produced-readme/README.md', generateContent);
    console.log('README.md was written to produced-readme directory');
  }
  catch(err) {
    console.log(err);
  }
}

init();