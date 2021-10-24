// const for install variables
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

console.log('test to be sure its running')




// Runs when you run inquirer

const questions = [
    {
        type:"Input",
        name:"Title",
        message:"Title of project",
    },
    {
        type:"Input",
        name:"Description",
        message:"Short description of your project",
    },
    {
        type:"Input",
        name:"Installation",
        message:"Anything needed to install?",
        default:"inquirer"
    },
    {
        type:"input",
        name:"Usage",
        message:"What will this be used for",
    },
    {
        type:"confirm",
        name:"Contribution",
        message:"Do you have any contributors you would like to add?",
    },
    {
        type:"input",
        name:"Contributors",
        message:"Add any contributors if necessary",
    },
    {
        type:"Input",
        name:"Test",
        message:"What command runs the test?",
        default: "node app.js"
    },
    {
        type:"list",
        name:"License",
        message:"What license will you use?",
        choices:['MIT','idk','idk','idk']
    },{
        type:"Input",
        name:"Github",
        message:"Please enter your github Username",
    },
    {
        type:"Input",
        name:"Email",
        message:"Please enter your email",
    },
]



function writeToFile(fileName,data) {
    fs.writeFile(fileName,data, function(err){
        if (err){
            return console.log(err);
        } else{
            return console.log('saved');
        }
    });
}


function init(){
    inquirer.prompt(questions)
    .then((data)=>{
        writeToFile("readme.md", generateMarkdown(data));
        console.log(data);
    })

};

init();