console.log("                    Question 8: Function continues");
console.log("                Outputting grades by calling a function")
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
console.log("Testing the function with given scores");
console.log("Student's grade --> ", gradeScore(80));
console.log("Student's grade --> ", gradeScore(62));
console.log("Student's grade --> ", gradeScore(45));
console.log("Student's grade --> ", gradeScore(30));