// TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     if (!license){
//         return '';
//     }
// };

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (!license){
//         return '';

// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (!license){
//         return '';
// }

function generateMarkdown(data){
// const badge = renderLicenseBadge(data.license);
return `# ${data.Title}



## Table of Content
1.[Description](#Description)

2.[Installation](#Installation)

3.[Usage](#Usage)

4.[Contributors](#Contributors)

5.[Input Commands](#Test)

6.[License](#License)

7.[Personal Info](#Github)


## Description 
    ${data.Description}

## Installation 
    ${data.Installation}

## Usage 
    ${data.Usage}

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