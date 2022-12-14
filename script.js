const inquirer = require('inquirer');
const mysql = require('mysql2');
const addEmployee = require('./add_employee');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ryanbelcher',
        database: 'roster_db'
    },
    console.log('Connect to the roster_db database.')
);

const introduction = () => {
    console.log()
}

const chooseOption = () => {
    inquirer.prompt(
        [
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
                name: 'optionList'
            }
        ]
    )
        .then(

    )
};



introduction();
chooseOption();