// const for install variables
const inquirer = require('inquirer');
const fs = require('fs');

console.log('test to be sure its running')




// Runs when you run inquirer
const promptUser = () => {
    return inquirer.prompt([
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
            name:"Installation Instructions",
            message:"Anything needed to install?",
            default:"inquirer"
        },
        {
            type:"input",
            name:"Usage Information",
            message:"",
        },
        {
            type:"confirm",
            name:"Contribution guidelines",
            message:"Do you have any contributors you would like to add?",
        },
        {
            type:"input",
            name:"add contributors if needed",
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
            name:"liscense",
            message:"What license will you use?",
            choices:['MIT','idk','idk','idk']
        },{
            type:"Input",
            name:"Github username",
            message:"Please enter your github Username",
        },
        {
            type:"Input",
            name:"Email",
            message:"Please enter your email",
        },
    ])

}


function writeReadMe() {
    fs.writeFile("index.html","SOMETHING ELSE GOES HERE", function(err){
        if (err){
            return console.log(err);
        } else{
        
        }
    });
}

promptUser()
    .then(writeReadMe)
    .then(console.log("test .then "))