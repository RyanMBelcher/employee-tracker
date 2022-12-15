const addEmployee =
    [
        {
            type: 'input',
            message: `What is the employee's first name?`,
            name: 'firstName'
        },
        {
            type: 'input',
            message: `What is the employee's last name?`,
            name: 'lastName'
        },
        {
            type: 'list',
            message: `What is the employee's role?`,
            choices: ['Regional Manager', 'Assistant to the Regional Manager', 'Sales Lead', 'Salesperson',
                'Junior Salesperson', 'Accountant', 'Customer Service Rep', 'QA Analyst', 'Customer Relations',
                'Warehouse Foreman', 'Warehouse Associate'],
            name: 'employeeRole'
        },
        {
            type: 'list',
            message: `Who is the employee's manager?`,
            choices: ['Michael Scott', 'Darryl Philbin', 'Null'],
            name: 'employeeManager'
        }
    ]

module.exports = addEmployee;