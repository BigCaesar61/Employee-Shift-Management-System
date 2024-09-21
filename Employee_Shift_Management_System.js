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


//Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
const employee = employees.find( emp=> emp.name === employeeName)// allows us to find the employee by name
const shiftExists = employee.shifts.some(shift => shift.day === day);

if (shiftExists) {

    console.log(`Error: ${employeeName} is already assigned a shift on ${day}.`); //checks if the employee already has a shift on the day we try and assign them to
} else {
    
    employee.shifts.push({day: day, hours: hours});
    console.log(`New shift assigned: ${employeeName} is now working on ${day} for ${hours}`);
}

}

//using the assignShift function

assignShift('John', 'Thursday', 5); //gives john a 5 hour shift on thursday
assignShift('Emily', 'Friday', 8); //this will give us an error as emily already has a friday shift

//Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    const employee = employees.find(emp => emp.name === employeeName); //finds employee name

    const totalHoursWorked = employee.shifts.reduce((total, shift) => total + shift.hours, 0);

    console.log( `${employeeName} works a total of ${totalHoursWorked} hours.`); //logs total hours of an employee
    
}

//using calculateTotalHours function

calculateTotalHours('John');
calculateTotalHours('Sara');
calculateTotalHours('David');
calculateTotalHours('Emily');