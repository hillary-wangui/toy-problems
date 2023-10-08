function studentGradeGrade() {
   const userInput = prompt("Enter the student's mark (between 0 and 100):");
   const mark = parseFloat(userInput);

   let grade;

   if (mark > 79 && mark<=100) {
       grade = "A";
   } else if (mark >= 60) {
       grade = "B";
   } else if (mark >= 50) {
       grade = "C";
   } else if (mark >= 40) {
       grade = "D";
   } else if (mark>0 && mark<40){ 
       grade = "E";
   }
     else {
      return "This is not a valid input"
     }
   console.log(`The student's grade is: ${grade}`);
}

calculateGrade();
