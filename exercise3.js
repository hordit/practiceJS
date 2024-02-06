/* 1.EXERCISE
Write a script that calculates the total amount of employee salaries.

* The number of employees is stored in the "employees" variable.
* The salary of each employee is a random number from 500 to 5000.
* Write the amount to the totalSalary variable and display it in the console.
*/

//1 make wares
const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;


// 2 loop through employees
for(let i = 1; i <= employees; i += 1) {

// 3 generate random salary
const salary = Math.round(
    (Math.random() * (maxSalary - minSalary) + minSalary)
);
// console.log(`Employee salary number ${i} - ${salary}`);

// 4 add to total
totalSalary += salary;
}

// 5 log
// console.log(totalSalary);

//-------------------------------------------------------------------------------

/* 2. EXERCISE 
Write a script that calculates the sum of all even numbers, which includes a range of numbers in variables from min to max.

For example, if min=0 and mах=5, then range 0-5, and there are two even numbers in it - 2 and 4 their sum 6.
*/

// 1 maker wares
const min = 6;
const max = 13;
let sumEven = 0;

// 2 loop even numbers
for(let i = min; i <= max; i += 1) {
    if(i % 2 === 0) {
        // console.log(`even number: ${i}`);

// 4 add all even numbers to the total
        sumEven += i;
    }
};
// console.log(sumEven);