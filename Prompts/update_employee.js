const updateEmployee =
    [
        {
            type: 'list',
            message: 'Which employee would you like to update?',
            choices: [],
            name: 'employeeUpdate'
        },
        {
            type: 'list',
            message: 'Which role do you want to assign to the selected employee?',
            choices: ['Regional Manager', 'Assistant to the Regional Manager', 'Sales Lead', 'Salesperson', 'Junior Salesperson',
                'Accountant', 'Customer Service Rep', 'QA Analyst', 'Customer Relations Associate', 'Warehouse Foreman', 'Warehouse Associate'],
            name: 'roleUpdate'
        }
    ]

module.exports = updateEmployee;