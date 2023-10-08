const basicSalary = Number(prompt("24500"));
const benefits = Number(prompt("8900"));

const grossSalary = basicSalary + benefits;

let payee;
if (grossSalary <=24000){
    payee = 0;
}
else if (grossSalary <= 40000){
     payee = (grossSalary - 24000)* 0.1;
}
else if (grossSalary <= 60000){
    payee =  1600+(grossSalary - 40000)*0.15;
}
else {
    payee = 4600+ (grossSalary - 60000)*0.2;
}

let nhifDeductions;
if (grossSalary <= 5999){
    nhifDeductions = 150;
}
else if (grossSalary <= 7999){
    nhifDeductions = 300;
}
else if (grossSalary <= 11999){
    nhifDeductions = 400;
}
else if (grossSalary <= 14999){
    nhifDeductions = 500;
}
else if (grossSalary <= 15999){
    nhifDeductions = 600;
}

else if (grossSalary <= 19999){
    nhifDeductions = 700;
}
else if (grossSalary <= 24999){
    nhifDeductions = 800;
}
else if (grossSalary <= 29999){
    nhifDeductions = 900;
}
else if (grossSalary <= 34999){
    nhifDeductions = 1000;
}
else if (grossSalary <= 39999){
    nhifDeductions = 1100;
}
else if (grossSalary <= 44999){
    nhifDeductions = 1200;
}
else if (grossSalary <= 49999){
    nhifDeductions = 1300;
}
else if (grossSalary <= 59999){
    nhifDeductions = 1400;
}
else if (grossSalary <= 69999){
    nhifDeductions = 1500;
}
else if (grossSalary <= 79999){
    nhifDeductions = 1600;
}
else if (grossSalary <= 89999){
    nhifDeductions = 1700;
}
else if (grossSalary <= 99999){
    nhifDeductions = 1800;
}
else{
    nhifDeductions = 1900
}

const nssfDeductions = Math.min (grossSalary * 0.06,2400);

const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

console.log(`Gross salary : ${grossSalary}`);
console.log(`Payee (tax): ${payee}`);
concole.log(`NHIF deductions: ${nhifDeductions}`);
console.log(`NSSF deductions: ${nssfDeductions}`);
console.log(`Net Salary: ${netSalary}`);

