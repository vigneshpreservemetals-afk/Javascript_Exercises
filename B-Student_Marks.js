

 // Example 

 const welcomeMessage = () => {

    return "Welcome to Employee Salary Details";
 }

 const salaryCalculator =(employeeName, basicSalary, noOfDaysPresent) => {

 const hra = basicSalary* 0.20;

 const ta = basicSalary* 0.12;

 const pf = basicSalary* 0.08;

 let attendance;

 if(noOfDaysPresent >= 26){
    attendance = "Best Employee";
 } else if (noOfDaysPresent >= 22){
    attendance = "Good Employee";
 } else {
    attendance = "Worst Employee";
 }

//  const bonus = noOfDaysPresent> 26 ? basicSalary *0.10: 0; 

 let bonus;

 if(noOfDaysPresent >= 26){
    bonus = basicSalary*0.10;
 } else if (noOfDaysPresent >= 22){
     bonus = basicSalary*0.08;
 } else {
    bonus = basicSalary*0;
 }

const grossSalary = basicSalary+ hra + ta;

const netSalary = grossSalary -pf +bonus;

return{
    employeeName,
    basicSalary,
    hra,
    ta,
    pf,
    noOfDaysPresent,
    attendance,
    bonus,
    grossSalary,
    netSalary
};

};

const employees = [
    {name:"Vignesh", basicSalary:50000, noOfDaysPresent:20},
    {name:"Kiruba", basicSalary:60000, noOfDaysPresent:19},
    {name:"Abi", basicSalary:70000, noOfDaysPresent:26},
    {name:"Gopi", basicSalary:80000, noOfDaysPresent:15}
]

console.log(welcomeMessage());

for(let i=0; i < employees.length; i++){
    const emp = employees[i];
    const result = salaryCalculator(emp.name, emp.basicSalary, emp.noOfDaysPresent)


    console.log("---------");
    console.log(result);
}

