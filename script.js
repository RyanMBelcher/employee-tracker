const inquirer = require('inquirer');
const mysql = require('mysql2');
const chooseOption = require('./Prompts/choose_option');
const addEmployee = require('./Prompts/add_employee');
const addRole = require('./Prompts/add_role');
const addDepartmentPrompt = require('./Prompts/add_departments');
const updateEmployeeRolePrompt = require('./Prompts/update_employee');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ryanbelcher',
        database: 'roster_db'
    },
    console.log('Connected to the roster_db database.')
);

// const introduction = () => {
//     console.log()
// }

function init() {
    inquirer
        .prompt(chooseOption)
        .then((data) => {
            switch (data.action) {
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add Employee':
                    addEmployee();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'Add Role':
                    addRole();
                    break;
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
                case 'Quit':
                    quit();
                    break;
            }
        }
        )
};

const viewAllEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 1000)

};

const viewAllRoles = () => {
    db.query('SELECT * FROM roles', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 1000)
};

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 1000)
};

// const updateEmployeeRole = () => {
//     db.query('SELECT * FROM employee', function (err, results) {
//         err ? console.log(err) : console.log(results);
//         const employeeNames = results.map(value => `${value.first_name} ${value.last_name}`)
//         updateEmployeeRolePrompt[0].choices = employeeNames;
//         inquirer
//             .prompt(updateEmployeeRolePrompt)
//             .then(response => {
//                 db.query('UPDATE employee SET role_id = ? WHERE   = ? ')
//             })

//     });

// };

// const addEmployee = () => {
//     inquirer
//     .prompt(addEmployee)
//     .then
// };

// const addRole = () {
//     inquirer
//     .prompt(addRole)
// };

const addDepartment = () => {
    inquirer
        .prompt(addDepartmentPrompt)
        .then((data) => {
            db.query('INSERT INTO department (name) VALUES (?)', data.departmentName, function (err, results) {
                err ? console.log(err) : console.log(results);
            });
            setTimeout(() => {
                init();
            }, 1000)
        }
        )
};

init();