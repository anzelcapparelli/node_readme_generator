// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-informational)`;
  } else {
    return "";
  }
}

// ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


  if (license) {
    return `- [${license}](#${license})\n  `;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license) {
    return `This project is licensed under the ${license}`;
  } else {
    return "";
  }

}





// TODO: Create a function to generate markdown for README
// can add template literals to strings (probs also other template literals!)

function generateMarkdown(data) {
  return `
  # ${data.title}
  
${renderLicenseBadge(data.license)}

  ## Table of contents
  ​
  
  - [Description](#Descriptionn)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Testing](#Testing)
  ${renderLicenseLink(data.license)}- [Questions?](#Questions?)
  
  
  
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Testing
  
  ${data.testing}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Questions?
  
  If you have any questions or comments, please contact me using one or more of the following:
  
  Github Profile: [https://github.com/${data.username}](https://github.com/${data.username})

  Email: ${data.email}

`;

}

module.exports = generateMarkdown;
