// const welcomeMessage = () => {
//     return "Welcome to Salary Calculator";
// };

// const calculateSalary = (employeeName, basicSalary) => {

//     // allowances
//     const hra = basicSalary * 0.20;        // 20%
//     const ta = basicSalary * 0.10;         // 10%
//     const bonus = basicSalary * 0.05;      // 5%

//     // deductions
//     const pf = basicSalary * 0.12;         // 12%
//     const tax = basicSalary > 50000 ? basicSalary * 0.10 : 0;

//     // totals
//     const grossSalary = basicSalary + hra + ta + bonus;
//     const netSalary = grossSalary - pf - tax;

//     // salary grade
//     let grade;

//     if (netSalary >= 70000) {
//         grade = "A Grade";
//     } else if (netSalary >= 40000) {
//         grade = "B Grade";
//     } else {
//         grade = "C Grade";
//     }

//     return {
//         employeeName,
//         basicSalary,
//         hra,
//         ta,
//         bonus,
//         pf,
//         tax,
//         grossSalary,
//         netSalary,
//         grade
//     };
// };

// // employee list (array of objects)
// const employees = [
//     { name: "Vignesh", salary: 60000 },
//     { name: "Arun", salary: 35000 },
//     { name: "Priya", salary: 80000 }
// ];

// console.log(welcomeMessage());

// // loop through employees
// for (let i = 0; i < employees.length; i++) {
//     const emp = employees[i];
//     const result = calculateSalary(emp.name, emp.salary);

//     console.log("--------------");
//     console.log(result);
// }


/* -- What is input?
↓
What process happens?
↓
What output should return?
↓
Do I have multiple items? → array + loop
Do I need decision? → if / ternary
Do I need reusable logic? → function */





// const welcomeMessage = () => {

//     return "Welcome to Employee Salary"

// };


// const calculateSalary = (employeeName,basicSalary) => {

//     // Allowances

//     const hra =   basicSalary * 0.20;         // 20 %

//     const ta  =   basicSalary * 0.10          // 10 %

//     const bonus = basicSalary * 0.05          //  5 %
    
//     // Deductions

//     const pf = basicSalary * 0.12             // 12 %

//     const tax = basicSalary > 50000 ? basicSalary * 0.10 : 0;

//     const grossSalary = basicSalary+ hra + ta + bonus;

//     const netSalary = grossSalary - pf - tax;

//     let grade;

//         if (netSalary > 70000){
//             grade = "Good Salary";
//         } else if (netSalary > 40000){
//             grade = "Average Salary";
//         } else {
//             grade = "Poor Salary";
//         }
    
//     return{

//         employeeName,
//         netSalary,
//         grossSalary,
//         ta,
//         hra,
//         bonus,
//         pf,
//         tax,
//         grade
//     };

// };

// console.log (welcomeMessage())

// const employees = [
//     { name:"Vignesh", basicSalary: 50000 },
//     { name: "Kiruba", basicSalary: 80000 },
//     { name: "Gopi", basicSalary: 20000 }
// ]

// for (let i=0 ; i < employees.length; i++ ){
//     const emp = employees [i];
//     const result    = calculateSalary(emp.name,emp.basicSalary);

//     console.log("------")
//     console.log(result)

// }



// const welcomeMessage = () => {

//     return "Welcome to Salary calculation";

// }

// const calculateSalary = (employeeName,basicSalary) => {

//     const hra   = basicSalary * 0.20;

//     const ta    = basicSalary * 0.10;

//     const bonus = basicSalary * 0.05;

//     const pf    = basicSalary * 0.12;

//     const tax   = basicSalary > 50000 ? basicSalary*0.15 : 0;

//     const grossSalary = basicSalary + hra + ta + bonus;

//     const netSalary = grossSalary - pf - tax;

//     let grade;

//     if(grossSalary > 70000){
//         grade = "Best Salary";
//     } else if(grossSalary > 40000){
//         grade = "Average Salary";
//     } else {
//         grade ="Poor Salary"
//     }


// return {
//     hra,
//     pf,
//     netSalary,
//     grossSalary,
//     tax,
//     ta,
//     grade
// };

// };

// const employees = [
//     { name: "Vignesh", basicSalary: 50000},
//     { name: "Kiruba", basicSalary: 70000},
//     { name: "Abi", basicSalary: 30000},
// ]

// console.log(welcomeMessage());

// for(let i=0; i<employees.length; i++) {
//     const emp = employees[i];
//     const result = calculateSalary(emp.Name,emp.basicSalary);

// console.log("--------")
// console.log(result)

// }




// const welcomeMessage = () => {

//     return "Welcome to Employee Salary Calculation";

// }

// const calculateSalary = (employeeName,basicSalary) => {

//     const hra = basicSalary *0.20;
//     const ta = basicSalary *0.10;
//     const bonus = basicSalary *0.5;

//     const pf = basicSalary *0.12;
//     const tax = basicSalary > 50000 ? basicSalary*0.05 : 0;

//     const grossSalary = basicSalary + hra + ta + bonus;
//     const netSalary = grossSalary - pf - tax;

//     let grade;

//     if (netSalary> 70000){
//         grade= "Great Salary";
//     } else if (netSalary > 50000){
//         grade= "Average Salary";
//     } else{
//         grade= "Poor Salary";
//     }

//     return{
//         employeeName,
//         basicSalary,
//         hra,
//         ta,
//         bonus,
//         pf,
//         tax,
//         grossSalary,
//         netSalary,
//         grade
//     };
// };

// const employees = [
//     {name: "Vignesh", basicSalary:30000},
//     {name: "kiruba", basicSalary:50000},
//     {name: "Abi", basicSalary:70000}]

// for(let i=0 ; i<employees.length ; i++){
//     const emp = employees [i];
//     const result = calculateSalary(emp.name,emp.basicSalary);

//     console.log(welcomeMessage())
//     console.log("------")
//     console.log(result)
// }





const welcomeMessage =() => {

return "Welcome to Credo Employee Salary Calculation Sheet";

}

const salaryCalculator = (employeeName, basicSalary) => {

    const hra = basicSalary*0.10;
    const ta  = basicSalary*0.12;
    const bonus = basicSalary*0.5;
    const pf    = basicSalary*0.10;
    const tax = basicSalary > 50000 ? basicSalary*0.5:0;

    const grossSalary = basicSalary+hra+ta+bonus;
    const netSalary   = grossSalary-pf-tax;

    let grade;

    if(netSalary>70000){
        grade="Great Salary";
    } else if(netSalary>50000){
        grade="Average Salary";
    } else {
        grade="Poor Salary"
    }

    return{
        employeeName,
        basicSalary,
        hra,
        ta,
        bonus,
        pf,
        tax,
        grossSalary,
        netSalary,
        grade
    }:
}:

const employees = [
    {name: "Vignesh", basicSalary:70000},
    {name: "Kiruba", basicSalary:70000},
    {name: "Abi", basicSalary:70000},
]

console.log(welcomeMessage())

for(let i=0; i<employees.length; i++){

    const emp = employees[i];
    const result = salaryCalculator(emp.name, basicSalary);

    console.log("-------------")
    console.log(result)
}



















