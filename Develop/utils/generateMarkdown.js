function generateMarkdown(data) {
  return `
  # ${data.name}
  # License
  !{badge}(https://img.shields.io/badge/license-${data.license}-blue)
  
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
    ${data.test}
  
  ## Licenses
  ![badge](https://img.shields.io/badge/license-${data.license}-blue)
  <br/>
  Licensed by ${data.license}

   
  ## Contact
  Created by ${data.name} - feel free to contact me ${data.email}!
`;
}

module.exports = generateMarkdown;
