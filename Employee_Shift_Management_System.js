//Task 1: Create an Employees Array of Employee Objects
const employees = [
    {name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    {name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }]},
    {name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    {name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

//Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employees) {
    employees.forEach(employee => {
        console.log(`Employee Name: ${employee.name}`);

        if (employee.shifts && employee.shifts.length > 0 ) {
            console.log('Assigned Shifts:'); //ensures employees actually have shifts and hours

            employee.shifts.forEach(shifts => {
                console.log(`Day: ${shifts.day}`); 
                console.log(`Hours: ${shifts.hours}`);
                //displays what days and hours employees are working
            });
        } else {
            console.log(`No assigned Shifts for ${employees.name}`); //displays if an employee doesn't have hours assigned
        }
    });

}

//displays displayEmployeeShifts function
displayEmployeeShifts(employees);