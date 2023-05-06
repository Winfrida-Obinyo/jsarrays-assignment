// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

// Given an array of objects, each object representing a person with a name and age property, write a function that returns the sum of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function sumAgeUnder18(people) {
    return people.filter(person => person.age < 18)
                .reduce((sum, person) => sum + person.age, 0);
  }
const totalAgeUnder18 = sumAgeUnder18(people);
console.log(totalAgeUnder18);
// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function checkArray(arr) {
    const result = arr.map(num => {
      if (num > 0) {
        return "positive";
      } else if (num < 0) {
        return "negative";
      } else {
        return 0;
      }
    });
    
    if (result.includes("positive")) {
      return "positive";
    } else if (result.includes("negative")) {
      return "negative";
    } else {
      return "zero";
    }
  }
  
  const arrayb = [-1, -2, -3, -4, -5];
  console.log(checkArray(arrayb));
//   Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
const employees = [
  { id: 1, name: "Alice", salary: 50000 },
  { id: 2, name: "Bob", salary: 60000 },
  { id: 3, name: "Charlie", salary: 40000 },
  { id: 4, name: "David", salary: 55000 }
];
function sortEmployeesBySalary(employees) {
    return employees.map(emp => emp)
      .sort((a, b) => a.salary - b.salary);
  } 
  const sortedEmployees = sortEmployeesBySalary(employees);
  console.log(sortedEmployees); 