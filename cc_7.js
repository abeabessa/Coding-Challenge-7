cc_7.js
// Defining the company object (departments&employees)
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: ' Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    suvordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

//Function calculating total salary of a department recursively
function calculateDepartmentSalary(department) {
    let totalSalary = 0;
    
    department.employees.forEach(employee => {
        totalSalary += employee.salary;
        
        if (employee.subordinates.length > 0) {
            // Recursively add salaries of subordinates
            totalSalary += calculateEmployeeSalary(employee.subordinates);
        }
    });

    return totalSalary;
}
// Helper function for recursion
function calculateEmployeeSalary(employee) {
    let salarySum = employee.salary;

    if (employee.subordinates.length > 0) {
        employee.subordinates.forEach(subordinate => {
            salarySum += calculateEmployeeSalary(subordinate);
        });
    }

    return salarySum;
}