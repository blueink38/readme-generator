// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateMarkdown = require('./util/gnerateMarkdown.js');
// const { writeFile, copyFile } = require('./utils/generate-site');


// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
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
        type: 'confirm',
        name: 'confirmScreenshot',
        message: 'Would you like to upload a screenshot?',
        default: true
      },
      {
        type: 'input',
        name: 'screenshot',
        message: 'Please upload an image for your screenshot',
        when: ({ confirmScreenshot }) => confirmScreenshot
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },

    ]);
  };
  


  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
