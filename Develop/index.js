// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const { writeFile, copyFile } = require('./utils/generate-site');


// TODO: Create an array of questions for user input
const questions = () => {
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
        choices: ['Apache 2.0', 'ISC', 'MIT']
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
  


  

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    false.writeFile('./produced-readme/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
// function init() {}
init();
questions()
  .then(readmeData => {
    return generateMarkdown(readmeData);
  })
  .catch(err => {
    console.log(err);
  });
