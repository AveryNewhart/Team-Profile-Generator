function generateManager(manager) {
    return `<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
        </div>
        <div class="card-body">
            <p>ID: ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.office}</p>
        </div>
    </div>
</div>`
}

function generateEngineer(engineer) {
    return `<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p>ID: ${engineer.id}</p>
            <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>`
}

function generateIntern(intern) {
    return `<div class="col-4 mt-4 wholeCard">
    <div class="card h-100">
        <div class="card-header text-bg-primary">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
</div>`
}

function generateHTML(data) {
    const emptySpot = [];

    for (let x = 0; x < data.length; x++) {
        const employee = data[x];
        const emptyRole = employee.getRole();

        if (emptyRole === 'Manager') {
            const managerCard = generateManager(employee);
            emptySpot.push(managerCard);
        } else if(emptyRole == 'Engineer') {
            const engineerCard = generateEngineer(employee);
            emptySpot.push(engineerCard);
        } else if(emptyRole == 'Intern') {
            const internCard = generateIntern(employee);
            emptySpot.push(internCard);
        }
    }

    const emptyCards = emptySpot.join('')

    const createTeam = generateTeamFile(emptyCards);
    return createTeam;
}



function generateTeamFile(emptyCards) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="../html/style.css" rel="stylesheet">
    <title>Team Generator</title>
    </head>
<body>

<header>
    <h1 class="headTxt">My Team</h1>
</header>

<section class="container">
    <div class="row">
        ${emptyCards}
    </div>    
</section>  

</body>
</html>`

}

module.exports = generateHTML;
