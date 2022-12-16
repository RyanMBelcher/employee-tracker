const addEmployee = (roles, managers) =>
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
            choices: roles.map((role) => ({ name: role.title, value: role.id })),
            name: 'employeeRole'
        },
        {
            type: 'list',
            message: `Who is the employee's manager?`,
            choices: managers.map((manager) => ({ name: manager.first_name, value: manager.id })),
            name: 'employeeManager'
        }
    ]

module.exports = addEmployee;