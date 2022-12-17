const inquirer = require('inquirer');
const mysql = require('mysql2');
const ctable = require('console.table');
const chalk = require('chalk');
const chooseOption = require('./Prompts/choose_option');
const addEmployeePrompt = require('./Prompts/add_employee');
const addRolePrompt = require('./Prompts/add_role');
const addDepartmentPrompt = require('./Prompts/add_departments');
const updateEmployeePrompt = require('./Prompts/update_employee');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ryanbelcher',
        database: 'roster_db'
    },
    console.log(chalk.blue('Connected to the roster_db database.'))
);

const introduction = () => {
    console.log(chalk.greenBright(`

------------------------------------------------------------------------------

$$$$$$$$|                         $$|                                        
$$  _____|                        $$ |                                        
$$ |      $$$$$$|$$$$|   $$$$$$$  $$ | $$$$$$$  $$|  $$|  $$$$$$|   $$$$$$|  
$$$$$|    $$  _$$  _$$| $$  __$$| $$ |$$  __$$| $$ |  $$ |$$  __$$| $$  __$$| 
$$  __|   $$ / $$ / $$ |$$ /  $$ |$$ |$$ /  $$ |$$ |  $$ |$$$$$$$$ |$$$$$$$$ |
$$ |      $$ | $$ | $$ |$$ |  $$ |$$ |$$ |  $$ |$$ |  $$ |$$   ____|$$   ____|
$$$$$$$$$ $$ | $$ | $$ |$$$$$$$  |$$ ||$$$$$$  ||$$$$$$$ ||$$$$$$$$ |$$$$$$$$ 
|________||__| |__| |__|$$  ____/ |__| |______/  |____$$ | |_______| |_______|
                        $$ |                    $$$   $$ |                    
                        $$ |                    |$$$$$$  |                    
                        |__|                     |______/                     
$$$$$$$$| $$$$$$$|   $$$$$$|   $$$$$$|  $$$   $$| $$$$$$$$| $$$$$$$|          
|__$$  __|$$  __$$| $$  __$$| $$  __$$$ $$ | $$  |$$  _____|$$  __$$|         
   $$ |   $$ |  $$ |$$ /  $$ |$$ /  |__|$$ |$$  / $$ |      $$ |  $$ |        
   $$ |   $$$$$$$  |$$$$$$$$ |$$ |      $$$$$  /  $$$$$|    $$$$$$$  |        
   $$ |   $$  __$$< $$  __$$ |$$ |      $$  $$<   $$  __|   $$  __$$<         
   $$ |   $$ |  $$ |$$ |  $$ |$$ |  $$$ $$ ||$$|  $$ |      $$ |  $$ |        
   $$ |   $$ |  $$ |$$ |  $$ |$$$$$$$  |$$ | |$$| $$$$$$$$| $$ |  $$ |        
   |__|   |__|  |__||__|  |__| |______/ |__|  |__||________||__|  |__|   

-------------------------------------------------------------------------------   
   `))
}

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
                    updateEmployee();
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
    db.query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, IF(employee.manager_id IS NOT NULL, CONCAT(manager.first_name, " ",  manager.last_name ), NULL) AS manager_name FROM employee JOIN roles ON employee.role_id = roles.id JOIN department ON department.id = roles.department_id LEFT JOIN employee manager ON employee.manager_id = manager.id ORDER BY employee.id ', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 2000)

};

const viewAllRoles = () => {
    db.query('SELECT roles.id AS ID, roles.title as Title, department.name AS Department, roles.salary AS Salary FROM roles JOIN department ON roles.department_id = department.id ORDER BY roles.id', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 2000)
};

const viewAllDepartments = () => {
    db.query('SELECT * FROM department ORDER BY department.id', function (err, results) {
        err ? console.log(err) : console.table(results);
    });
    setTimeout(() => {
        init();
    }, 2000)
};

const updateEmployee = async () => {
    const results = await db.promise().query('SELECT * FROM employee')
    const employee = results[0]
    const resultsTwo = await db.promise().query('SELECT * FROM roles')
    const role = resultsTwo[0]
    console.log(results[0]);
    inquirer
        .prompt(updateEmployeePrompt(employee, role))
        .then(data => {
            console.log(data);
            db.query('UPDATE employee SET role_id = ? WHERE id = ?', [data.roleUpdate, data.employeeUpdate], function (err, results) {
                err ? console.table(err) : console.table(results)
            });
            setTimeout(() => {
                init()
            }, 2000)
        });
};

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
                    err ? console.table(err) : console.table(results)
                });
            setTimeout(() => {
                init()
            }, 2000)
        });
};


const addRole = async () => {
    const results = await db.promise().query('SELECT * FROM department')
    const departments = results[0];
    // console.log(results[0]);
    inquirer
        .prompt(addRolePrompt(departments))
        .then((data) => {
            // console.log(data);
            db.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
                [data.roleName, data.roleSalary, data.roleDepartment], function (err, results) {
                    err ? console.log(err) : console.table(results);
                });
            setTimeout(() => {
                init()
            }, 2000)
        });
};

const addDepartment = () => {
    inquirer
        .prompt(addDepartmentPrompt)
        .then((data) => {
            db.query('INSERT INTO department (name) VALUES (?)', data.departmentName, function (err, results) {
                err ? console.log(err) : console.table(results);
            });
            setTimeout(() => {
                init();
            }, 2000)
        }
        )
};

introduction();
init();