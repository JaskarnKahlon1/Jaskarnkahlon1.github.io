// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
// Sam, Tech, Manager, 40000, true
// Mary, Finance, Trainee, 18500, true
// Bill, HR, Executive, 21200, false

//problem 1
let text = '{ "employees" : [' +
'{ "firstName" : "Sam" , "department" : "Tech" , "designation" : "Manager" , "salary" : 40000 , "raise eligible" : "true" },' +
'{ "firstName" : "Mary" , "department" : "Finance" , "designation" : "Trainee" , "salary" : 18500 , "raise eligible" : "true" },' +
'{ "firstName" : "Bill" , "department" : "HR" , "designation" : "Executive" , "salary" : 21200 , "raise eligible" : "false" } ]}';

const obj = JSON.parse(text);
console.log("problem 1");

console.log(text);

//problem 2
// Create JSON for the company with the following details (companyName, website, employees)
// Tech Stars, www.techstars.site, array of Employees

let company = '{ "company" : [' +
'{ "companyName" : "Tech Stars" , "website" : "www.techstars.site" } ]}';
console.log("problem 2");
console.log(company);

//problem 3
// Anna, Tech, Executive, 25600, false

obj["employees"][3] = { "firstName" : "Anna" , "department" : "Tech" , "designation" : "Executive" , "salary" : 25600 , "raise eligible" : "false"};
console.log("problem 3");

console.log(obj ["employees"][3]);

//problem 4 
//add the salaries
// console.log();
let totSalary = 0;
for(let i = 0; i < 4; i++) {
    // let totSalary += obj.salary[i];
    totSalary += obj ["employees"][i]["salary"];
    // console.log(totSalary);
}
console.log("problem 4");

console.log(totSalary);

//problem 5
// It's raise time. If an employee is raise eligible, increase their salary by 10%. 
// Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, 
// then set their eligibility to false.
let newSal = 0;
console.log("problem 5");

for(let i = 0; i < 4; i++) {
    if( obj ["employees"][i]["raise eligible"] === "true"){
        console.log( obj ["employees"][i]["salary"]);
       newSal = obj ["employees"][i]["salary"] * 1.1;
       obj ["employees"][i]["salary"] = newSal;
        console.log( obj ["employees"][i]["salary"]);
        obj ["employees"][i]["raise eligible"] = false;
        console.log( obj ["employees"][i]["raise eligible"]);
    }
    // console.log(totSalary);
}

//problem 6
console.log("got stuck on problem 6, did not complete fully");

// Working from home: ['Anna', 'Sam']
// const companyObj = JSON.parse(company);

// companyObj["employees"] = obj["employees"];
// console.log(companyObj);
// companyObj["wfh"];
// for(let i = 0; i < 4; i++) {
//     companyObj["employees"][i]["wfh"] = false;
// }

// for(let i = 0; i < 4; i++) {
//     // console.log(companyObj["employees"][i]["wfh"]);
//     console.log(["employees"][i]["firstName"]);
//     console.log(["employees"][i]["wfh"]);
//     if(companyObj ["employees"][i]["firstname"] === "Sam"){
//         companyObj["employees"][i]["wfh"] = true;
//         console.log(["employees"][i]["firstName"]);
//         console.log(["employees"][i]["wfh"]);
//     }
//     // else if(companyObj ["employees"][i]["firstname"] === "Sam"){
//     //     companyObj ["employees"][i]["wfh"] = true;
//     //     console.log(companyObj["employees"][i]["firstname"]);
//     //     console.log(companyObj["employees"][i]["wfh"]);
//     // } else {
//     //     companyObj ["employees"][i]["wfh"] = false;
//     //     console.log(companyObj["employees"][i]["firstname"]);
//     //     console.log(companyObj["employees"][i]["wfh"]);

//     // }
// }
