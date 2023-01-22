const inquirer = require('inquirer');
const fs = require('fs');

// impoting the staff
const Employee = require('./class/employee');
const Intern = require('./class/intern');
const Manager = require('./class/manager');
const Engineer = require('./class/engineer');

const generateHTML = require("./newCon/generateHTML");


theTeam = [];

// manager questions
const managerQuestions = () => {
    return inquirer.prompt
([
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'name',
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
        name: 'id',
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
        name: 'email',
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
        const {name, id, email, office} = managerContent;
        const manager = new Manager (name, id, email, office);
        theTeam.push(manager);
    })
}
//engineer questions
const newEmployeeQuestions = () => {
    return inquirer.prompt
([
    {
        type: 'list',
        message: 'Would you like to add an Enginner, Intern, or would you like to finish?',
        name: 'role',
        choices: ['Engineer', 'Intern', 'None'],
    },
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'name',
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
        name: 'id',
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
        name: 'email',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        when: (input) => input.role === "Engineer",
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
        when: (input) => input.role === "Intern",
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
        type: "confirm",
        name:"more",
        message:"Would you like to add more team members?",
    }
])
.then(function(employeeData) {
    let {name, id, email, role, github, school, more} = employeeData;
    let employee;

        if (role == "Engineer"){
            employee = new Engineer (name, id, email, github);
        } else if (role == "Intern") {
            employee = new Intern (name, id, email, school);
        } else if (role == "None"){
            console.log("Team info has been logged!")
        }

        theTeam.push(employee);

        if (more) {
        return newEmployeeQuestions(theTeam);
        } else {
        return theTeam;
        }
    })
}




const writeFile = data => {
    fs.writeFile("./html/index.html", data, err=> {
        if(err) {
            console.log(err)
        } else {
            console.log("Team info has been logged!")
        }
    })
};

managerQuestions()
    .then(newEmployeeQuestions)
    .then(function(theTeam) {
        return generateHTML(theTeam);
    })
    .then(function(HTML) {
        return writeFile(HTML);
    })
    .catch(function(err) {
        console.log(err);
    })

