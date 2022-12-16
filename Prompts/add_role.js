const addRole = (departments) =>
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
            choices: departments.map((department) => ({ name: department.name, value: department.id })),
            name: 'roleDepartment'
        }
    ]

module.exports = addRole;
