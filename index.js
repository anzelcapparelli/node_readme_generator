// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// util pkg diff from files in utils dir! an acutal package!

const generateMarkdown = require("./utils/generateMarkdown")

// const 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your application",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide installation instructions (both for your app, and packages required for it to run",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide instructions on how to use",
        // might be good depending on which code snippet ``` dividers to use (mult choice)
        // then can included selected, or none if none selected 
        name: "instructions"
    },
    // {
    //     type: "checkbox",
    //     message: "Please select any languages for which you would like to include code snippets (arrows to navigate)",
    //     name: "installation"
    // },
    {
        type: "list",
        message: "Please select the appropriate license (navigate using arrow keys, select one",
        choices: ["BDS-2 License", "GNU General Public License (GPL)", "MIT License", "Mozilla Public License 2.0", "Common Development and Distribution License"],
        name: "installation"
    },
    // is there a list of common licenses? Would like to use that

    {
        type: "input",
        message: "Please input which collaborators you wish to include into the contributions section (separate names by commas)",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please input which collaborators you wish to include into the contributions section (separate names by commas)",
        name: "contributing"
    },

    // {
    //     type: "checkbox",
    //     message: "Please input which contact methods you would like to include in your readme (includes placeholder)",
    choices: ["email", "github template", "linkedIn template", "general href template (link addresses)"]
    
    // //
    //     name: "questions"
    // }

    ^^^ depending

    // may want to just generate a section  



    // https://opensource.org/licenses  is a very comprehensive 

    // Need: 

    // 'Usage', 'License', 'Contributing', 'Tests', and 'Questions'
    //  'table of contents',


    // when info is entered, it is placed in appropriate section in README file
    // IF NOTHING PROVIDED IN OPTIONAL, REMOVE SECTION (other than for necessary sections ie project title)

];

inquirer.prompt(questions).then(answers => {
    console.log(answers)
})





// ======================================================================================================================================
// REST OF APP

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }



// // need to make input into a string for fs.writeFile(`./output/${fileName}.md`, JSON.stringify(data, null, 2), (err) => {
// // err ? console.error(err) : console.log ("success!")
// // }).then              or something similar (maybe async/await or try/catch)  )

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();