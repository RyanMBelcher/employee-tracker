INSERT INTO department (name)
VALUES ('Management'),
('Sales'),
('Accounting'),
('Customer Service'),
('Quality Assurance'),
('Customer Relations'),
('Warehouse');

INSERT INTO roles (title, salary, department_id)
VALUES ('Regional Manager', 90000, 001),
('Assistant to the Regional Manager', 80000, 002),
('Sales Lead', 87500, 002),
('Salesperson', 75000, 002),
('Junior Salesperson', 60000, 002),
('Accountant', 70000, 003),
('Customer Service Rep', 65000, 004),
('QA Analyst', 70000, 005),
('Customer Relations Associate', 67500, 006),
('Warehouse Foreman', 95000, 007),
('Warehouse Associate', 60000, 007);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 001, NULL),
('Dwight', 'Schrute', 002, 001),
('James', 'Halpert', 003, 001),
('Stanley', 'Hudson', 004, 001),
('Phyllis', 'Lapin-Vance', 004, 001),
('Andrew', 'Bernard', 004, 001),
('Pamela', 'Beasley-Halpert', 005, 001),
('Oscar', 'Martinez', 006, 001),
('Angela', 'Martin', 006, 001),
('Kevin', 'Malone', 006, 001),
('Kelly', 'Kapoor', 007, 001),
('Creed', 'Bratton', 008, 001),
('Meredith', 'Palmer', 009, 001),
('Darryl', 'Philbin', 010, NULL),
('Roy', 'Anderson', 011, 014),
('Lonny', 'Collins', 011, 014),
('Hidetoshi', 'Hasagawa', 011, 014),
('Madge', 'Madsen', 011, 014)