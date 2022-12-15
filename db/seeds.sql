INSERT INTO department (id, name)
VALUES (001, 'Management'),
(002, 'Sales'),
(003, 'Accounting'),
(004, 'Customer Service'),
(005, 'Quality Assurance'),
(006, 'Customer Relations'),
(007, 'Warehouse');

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, 'Regional Manager', 90000, 001),
(002, 'Assistant to the Regional Manager', 80000, 002),
(003, 'Sales Lead', 87500, 002),
(004, 'Salesperson', 75000, 002),
(005, 'Junior Salesperson', 60000, 002),
(006, 'Accountant', 70000, 003),
(007, 'Customer Service Rep', 65000, 004),
(008, 'QA Analyst', 70000, 005),
(009, 'Customer Relations Associate', 67500, 006),
(010, 'Warehouse Foreman', 95000, 007),
(011, 'Warehouse Associate', 60000, 007);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Michael', 'Scott', 001, NULL),
(002, 'Dwight', 'Schrute', 002, 001),
(003, 'James', 'Halpert', 003, 001),
(004, 'Stanley', 'Hudson', 004, 001),
(005, 'Phyllis', 'Lapin-Vance', 004, 001),
(006, 'Andrew', 'Bernard', 004, 001),
(007, 'Pamela', 'Beasley-Halpert', 005, 001),
(008, 'Oscar', 'Martinez', 006, 001),
(009, 'Angela', 'Martin', 006, 001),
(010, 'Kevin', 'Malone', 006, 001),
(011, 'Kelly', 'Kapoor', 007, 001),
(012, 'Creed', 'Bratton', 008, 001),
(013, 'Meredith', 'Palmer', 009, 001),
(014, 'Darryl', 'Philbin', 010, NULL),
(015, 'Roy', 'Anderson', 011, 014),
(016, 'Lonny', 'Collins', 011, 014),
(017, 'Hidetoshi', 'Hasagawa', 011, 014),
(018, 'Madge', 'Madsen', 011, 014)