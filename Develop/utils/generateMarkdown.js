function generateMarkdown(data) {
  return `
  # ${data.name}
  # License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
  
  ## Table of contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Licenses](#licenses)
  * [Contact/Questions](#contact)
  
  ## Description
    ${data.description}
  
  
  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}
  
  ## Contributing
    ${data.contributing}
  
  ## Tests
    ${data.test}
  
  ## Licenses
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
  <br/>
  Licensed by ${data.license}

   
  ## Contact/Questions
  Created by https://github.com/${data.github}/ <br/>
  Feel free to email me ${data.email} with any questions
`;
}

module.exports = generateMarkdown;
