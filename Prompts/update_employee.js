const updateEmployee = (employees, roles) =>
    [
        {
            type: 'list',
            message: 'Which employee would you like to update?',
            choices: employees.map((employee) => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id })),
            name: 'employeeUpdate'
        },
        {
            type: 'list',
            message: 'Which role do you want to assign to the selected employee?',
            choices: roles.map((role) => ({ name: role.title, value: role.id })),
            name: 'roleUpdate'
        }
    ]

module.exports = updateEmployee;