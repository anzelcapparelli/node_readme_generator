// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
// util pkg diff from files in utils dir! an acutal package!

const generateMarkdown = require("./utils/generateMarkdown");


// const 

let data;
const fileName = "./output/README.md"     //location, name, and type of file made

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a description of your application",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide installation instructions (both for your app, and packages required for it to run",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide instructions on how to use",
        name: "usage",
    },
    // {
    //     type: "checkbox",
    //     message: "Please select any languages for which you would like to include code snippets (arrows to navigate)",
    //     name: "installation"
    // },

    {
        type: "input",
        message: "Please input which collaborators you wish to include into the contributions section (separate names by commas)",
        name: "contributing",
    },

    // ^^^ turn into bullets! 

    {
        type: "input",
        message: "Please input how to run tests with this code",
        name: "testing",
    },

    // ^^^ maybe check boolean if to include code snippets in tests 

    {
        type: "list",
        message: "Please select the appropriate license (navigate using arrow keys, select one",
        choices: ["Apache 2.0", "BDS-3", "GNU General Public License (GPL v3)", "MIT", "Mozilla Public License 2.0", "Common Development and Distribution License"],
        name: "license",
    },
    // reference: https://choosealicense.com/

    {
        type: "input",
        message: "Please enter your GitHub username",
        default: "anzelcapparelli",
        name: "username",
    },

    {
        type: "input",
        message: "Please enter your email",
        default: "anzelcapparelli@gmail.com",
        name: "email",
    },



    // Enhancements

    // when info is entered, it is placed in appropriate section in README file
    // IF NOTHING PROVIDED IN OPTIONAL, REMOVE SECTION (other than for necessary sections ie project title)
    // object destructure?

    // for (entries of object)
    // FUNCTION: Object.fromEntries(data)


    // type: "checkbox",
    // message: "Please input which contact methods you would like to include in your readme (includes placeholder)",
    // choices: ["email", "github template", "linkedIn template", "general href template (link addresses)"]

    // ^^^include input based on contact methods selected (if none, omit section)

    // type: "checkbox",
    // message: "Please input which contact methods you would like to include in your readme (includes placeholder)",
    // choices: ["email", "github template", "linkedIn template", "general href template (link addresses)"]

    // use boolean to determine if you want to include code snippet templates
    // ^^^ offer a checklist of which to include if so

    //  [//]: # (This may be the most platform independent comment)
    //  ^^^ this'll work like a comment in .md! MAKE SURE TO LEAVE EMPTY LINES AROUND!

    // md formatting!

    // change ternary condition into promise! util mod:     
    // const writeAsync = util.promisify(fs.writeFile());

    //read package.json for dependencies to help populate installation instructions!

];








// ======================================================================================================================================
// REST OF APP

// // TODO: Create a function to write README file

function writeToFile(fileName, data) {

    //using 'fileName' instead of hardcoding pathway name, for cleaner code & to ensure easy to 
    //ID place to change if ever want to change file made or pathway

    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("success!")
    })

}


// const writeAsync = util.promisify(writeToFile);

// // TODO: Create a function to initialize app

function init() {

    let prompt = inquirer.createPromptModule();
    prompt(questions).then(data => {

        console.log(data);
        const readme = generateMarkdown(data);

        // return readme;
        // }).then(data =>{

        writeToFile(fileName, readme);

    })
        .catch((err) => console.error(err));

}

// Function call to initialize app
init();