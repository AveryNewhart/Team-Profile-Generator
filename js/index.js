const inquirer = require('inquirer');
const fs = require('fs');

// manager questions
const managerQuestions = () => {
    return inquirer.prompt
([
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'managername',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("input value to move on")
        }
    }
    },
    {
        type: 'input',
        message: 'Enter Employee ID:',
        name: 'managerid',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'input',
        message: 'Enter E-Mail Address:',
        name: 'manageremail',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Office Number:',
        name: 'office',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
])
    .then (managerContent => {
        const {managername, managerid, manageremail, office} = managerContent;
        const manager = new Manager (managername, managerid, manageremail, office);
        theTeam.push(manager);
    })
}
// menu to add members or end
const menu = 
[
    {
        type: 'list',
        message: 'Would you like to add an Enginner, Intern, or would you like to finish?',
        name: 'question',
        choices: ['Engineer', 'Intern', 'none'],
        validate: (value) => { 
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
]

//engineer questions
const engineerQuestions =
[
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'engineername',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("input value to move on")
        }
    }
    },
    {
        type: 'input',
        message: 'Enter Employee ID:',
        name: 'engineerid',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'input',
        message: 'Enter E-Mail Address:',
        name: 'engineeremail',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Github Username:',
        name: 'github',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'list',
        message: 'Would you like to add any more team members?',
        name: 'engineercontinue',
        choices: ['yes', 'no'],
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
]

// intern questions
const internQuestions =
[
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'internname',
      validate: (value) => { 
        if(value){
            return true;
        } else {
            console.log("input value to move on")
        }
    }
    },
    {
        type: 'input',
        message: 'Enter Employee ID:',
        name: 'internid',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'input',
        message: 'Enter E-Mail Address:',
        name: 'internemail',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Your School:',
        name: 'school',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        type: 'list',
        message: 'Would you like to add any more team members?',
        name: 'interncontinue',
        choices: ['yes', 'no'],
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
]

const writeFile = data => {
    fs.writeFile("../html/index.html", data, err=> {
        if(err) {
            console.log(err)
        } else {
            console.log("Team info has been logged!")
        }
    })
};

managerQuestions()
    .then()