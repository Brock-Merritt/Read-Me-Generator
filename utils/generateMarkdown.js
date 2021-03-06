// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![Github License](https://shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;

    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
    This project is license under ${license} license.
    `;
    }
    return '';
}

function generateMarkdown(data) {
    return `# ${data.Title}

    ${renderLicenseBadge(data.license)};





    ## Table of Contents
    * [Description](#Description)

    * [Installation](#Installation)

    * [Usage](#Usage)
    ${renderLicenseLink(data.license)}

    * [Contributors](#Contributors)

    * [Input Commands](#Test)

    * [License](#License)

    * [Personal Info](#Github)


    ## Description 
        ${data.Description}

    ## Installation 
        ${data.Installation}

    ## Usage 
        ${data.Usage}
        ${renderLicenseSection(data.license)}

    ## Contributors 
        ${data.Contributors}

    ## Input Commands 
        ${data.Test}

    ## License
        ${data.License}

    ## Personal Information
        *Please contact at:
        ${data.Github}
        ${data.Email}
    `;


}


module.exports = generateMarkdown;