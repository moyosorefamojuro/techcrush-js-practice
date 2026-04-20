console.log("                    Question 10: Array continues");
console.log("                Storing Students' scores in an array")
function gradeScore(score) {
    if (score >= 70) {
        return "A";
    } 
    else if (score >= 60) {
        return "B";
    } 
    else if (score >= 50) {
        return "C";
    }
    else if (score >= 40) {
        return "D";
    }
    else {
        return "F";
    }
}

let students = [
{
    name: "Amara",
    score: 88
},
{
    name: "Moyosore",
    score: 90
},
{
    name: "Esther",
    score: 20
}
{
    name: ""
}
]

function summarizeStudent(students) {
    let result = students.map(function(student) {
        let grade = gradeScore(student.score);
        return student.name + " scored " + student.score + " grade - " + grade;
    })
    return result;
}

console.log(summarizeStudent(students));