const addRole =
    [
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'roleName'
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'roleSalary'
        },
        {
            type: 'list',
            message: 'What department does the role belong to?',
            choices: ['Management', 'Sales', 'Accounting', 'Customer Service', 'Quality Assurance', 'Customer Relations', 'Warehouse'],
            name: 'roleDepartment'
        }
    ]

module.exports = addRole;
