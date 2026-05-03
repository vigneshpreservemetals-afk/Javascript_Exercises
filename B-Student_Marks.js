
const welcomeMessage = () => {

    return "welcome to Student Marklist";

}

const markCalculator =(studentName,m1,m2,m3) => {

    const total= m1+m2+m3;
    const average = total/3;
    const result = m1 >=35 && m2 >=35 && m3 >=35 ? "Pass": "Fail" ;

    let grade;

    if(result == "Fail") {
        grade = "No Grade";
    } else if (average >= 90){
        grade = "A-Grade";
    } else if(average >= 70){
        grade = "B-Grade";
    } else {
        grade= "C-Grade";
    }

    return{
        studentName,
        m1,
        m2,
        m3,
        total,
        average,
        result,
        grade
    };
};

const students =[
    {name:"vignesh", m1:80, m2:45, m3:60 },
    { name:"Kiruba", m1:30, m2:45, m3:60 },
    { name:"Abi", m1:45, m2:35, m3:20 }
]

for(let i=0; i<students.length; i++){
    const student = students[i];
    const result = markCalculator(student.name,student.m1,student.m2,student.m3);

    console.log("----------")
    console.log(result)
}