const inquirer = require('inquirer');
const mysql = require('mysql2');
const ctable = require('console.table');
const chooseOption = require('./Prompts/choose_option');
const addEmployeePrompt = require('./Prompts/add_employee');
const addRolePrompt = require('./Prompts/add_role');
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
    db.query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name, roles.salary, employee.manager_id FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON department.id = roles.department_id', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 2000)

};

const viewAllRoles = () => {
    db.query('SELECT roles.id AS ID, roles.title as Title, department.name AS Department, roles.salary AS Salary FROM roles JOIN department ON roles.department_id = department.id', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 2000)
};

const viewAllDepartments = () => {
    db.query('SELECT * FROM department', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 2000)
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
//     db.query('SELECT * FROM role', (err, results) => {
//         if (err) {
//             console.log(err)
//             return err
//         } console.table(results);
//     })
//     inquirer
//         .prompt(addEmployeePrompt)
//         .then((data) => {
//             db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)'), data.firstName, data.lastName, data.employeeRole, data.employeeManager, function (err, results) {
//                 err ? console.log(err) : console.log(results);
//             };
//             setTimeout(() => {
//                 init();
//             }, 1000)
//     )}
// };

const addEmployee = async () => {
    const results = await db.promise().query('SELECT * FROM roles')
    // console.log(results[0]);
    const roles = results[0];
    const resultsTwo = await db.promise().query('SELECT * FROM employee WHERE manager_id IS NULL')
    const managers = resultsTwo[0];
    inquirer
        .prompt(addEmployeePrompt(roles, managers))
        .then((data) => {
            console.log(data)
            db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                [data.firstName, data.lastName, data.employeeRole, data.employeeManager], function (err, results) {
                    err ? console.table(err) : console.log(results)
                });
        });
};


// const addRole = () => {

//     inquirer
//     .prompt(addRolePrompt)
//     .then()
// db.query('INSERT INTO (role title, salary, department_id) VALUES (?, ?, ?)')
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
            }, 2000)
        }
        )
};

init();