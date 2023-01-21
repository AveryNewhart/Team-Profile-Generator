const inquirer = require('inquirer');
const fs = require('fs');

// impoting the staff
const Employee = require('../class/employee');
const Intern = require('../class/intern');
const Manager = require('../class/manager');
const Engineer = require('../class/engineer');

const generateHTML = require("../newCon/generateHTML");


theTeam = [];

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
//engineer questions
const newEmployeeQuestions = () => {
    return inquirer.prompt
([
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
    {
        type: 'input',
      message: 'Enter Name:',
      name: 'ename',
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
        name: 'eid',
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
        name: 'eemail',
        validate: (value) => {
            if(value){
                return true;
            } else {
                console.log("input value to move on")
            }
        }
    },
    {
        when: (input) => input.question === "Engineer",
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
        when: (input) => input.question === "Intern",
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
    let {ename, eid, eemail, github, school, more} = employeeData;
    let employee;

        if (question == "Engineer"){
            employee = new Engineer (ename, eid, eemail, github);
        } else if (question == "Intern") {
            employee = new Intern (ename, eid, eemail, school);
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
    fs.writeFile("../html/index.html", data, err=> {
        if(err) {
            console.log(err)
        } else {
            console.log("Team info has been logged!")
        }
    })
};

managerQuestions()
    .then(newEmployeeQuestions)


// if (continue) {
//     return newEmployeeQuestions()
// }
    

    // async function callInquirers() {
    //     const inq1 = await inquirer.prompt([...]);
    //     const inq2 = await inquirer.prompt([...]);
    
    //     // do stuff with results inq1 and inq2
    // }

    // https://www.npmjs.com/package/multi-prompt