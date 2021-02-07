const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}
const renderLicenseBadge = license => {
  if(!license) {
    return '';
  }
  return 
    '[![License: MIT](https://img.shields.io/badge/License-${data.license}-blue.svg)]'
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
const renderLicenseLink = license => {
  if(!license) {
    return '';
  }
  return '(https://opensource.org/licenses/${data.license})'
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
const renderLicenseSection = license => {
  if(!license) {
    return '';
  }
  return '--- license section here ---'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}
  # License
    ${data.licenseBadge}
  
  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Contact](#contact)
  
  ## Description
    ${data.description}
  
  
  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}
  
  ## Contributing
    ${data.contributing}
  
  ## Tests
    ${data.tests}
  
  ## Licenses
    ${data.licenseLink}
   
  ## Contact
  Created by [@${username}] - feel free to contact me (@${data.email})!
`;
}

module.exports = generateMarkdown;
