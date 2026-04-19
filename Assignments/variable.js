let x = 10
let y = 20
let z = x + y
console.log(z)
const pi = 3.14
console.log(y*pi)
let name = "Moyosore";
console.log("");
console.log("STRING METHODS")
console.log(name.length);
console.log(name.startsWith("Mo"));
console.log(name.indexOf("y"))
let userName = "   Oluwapelumi Moyosore ";
let userName2 = "  Deborah"
console.log(userName.trim() + userName2.trim());
console.log(userName.trimEnd() + userName2.trim());
console.log(userName.trim() + userName2.trimStart());
console.log(userName2.includes("y"));
console.log(userName.includes("y"));
console.log(userName.length + userName.indexOf("y"));
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
const myName = "Famojuro Moyosore Abiodun";
const girlFriend = "Alayo Oluwapelumi Aduragbemi";
const sepName = myName.split(" ") + " Weds " + girlFriend.split(" ");
console.log(sepName);
for (let i=1; i<=5; i++) {
    for (let j=1; j<=5; j++) {
        console.log(i," * ",j, " = ",i*j);
    }
}
let password = 3;
while (password > 0) {
    console.log("Log in successful");
    password--
}
console.log("");
console.log("FUNCIONS");
function myCalc(a,b,c) {
    sum = a + b + c;
    product = a * b * c;
    console.log("The sum of the three values is", sum);
    console.log("Their product is", product);
}
(myCalc(10,5,6))
let students = ['Oluwapelumi','Moyosore','Aduragbemi','Abiodun']
for (let student of students) {
    console.log("Welcome " + student + "!");
}
let student = "Priceless";
switch(student) {
    case "Priceless":
    console.log("You're loved!")
    break;
}
console.log(student.indexOf("e"));
console.log(students.includes("Moyosore"));
console.log(student.substring(5,9));
console.log(students[1].replace('Moyosore','MyBoo'));
console.log(students);

let triy = "Moyosore";
console.log(triy.padStart(13,"oluwa"));
console.log(triy.padEnd(13,'Oluwa'));
console.log(triy.repeat(3));

console.log("                    Practice                    ");
let girl_Friend = ["Alayo", "Oluwapelumi", "Aduragbemi", "Priceless", "Deborah"];
let checkgirlFriend = girl_Friend.forEach(function(name){
    console.log("I cherish " + name);
});
let checkgirl = girl_Friend.map(function(name){
    return ("I love " + name);
})
console.log(checkgirl);
let studentScore = [34,56,43,67,34,66];
let checkScore = studentScore.filter(function(score){
    return (score < 50);
})
console.log("Scores less than 50 are: " + checkScore);
console.log("")
console.log("Exercise");
const num = [1, 2, 3, 4, 5];
let answer = num.map((number) => {
    return number * 2;
});
console.log(answer);
console.log("");

const scores = [250, 300, 350, 200, 400, 180, 160];
let result = scores.filter((score) => {
    return score >= 300;
})
console.log(result);
console.log("");

const sum1 = [2000, 3000, 400, 100, 600];
let summation = sum1.reduce((summ, i) => {
    return summ + i;
})
console.log(summation);
console.log("")
colors = ["red", "blue", "green", "purple"];
removeColor = colors.pop()
console.log(removeColor);
colors.push("pink");
console.log(colors);
removeRed = colors.shift();
console.log(removeRed);
colors.unshift("grey");
console.log(colors);
console.log("")
let studen = {
    nam: "Ngozi Adeyemi",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
}
console.log(studen.nam)
let newName = studen.nam
let newRole = studen.role

const {nam, role, salary, city} = studen
console.log(role);
console.log(salary);
console.log(city);
let {role : job, city : town} = studen
console.log(job)
console.log(town)
console.log("");
let profile = {name: "Ada", age: 22}
let updatedProfile = {
    ...profile,
    city: "Abuja"
}
console.log(updatedProfile);
console.log("");
let newProfile = {
    ...studen,
    food: "beans"
}
console.log(newProfile);
console.log("");
const esther = {nombre, ...rest} = {
    nombre: "Emeka",
    age: 35,
    city: 'Sango'
}
console.log(esther);
console.log("");
let letters = [1,2,3,4,5];
let found = letters.find((x)=>{
    return x > 2;
});
console.log(found);
let names1 = 'Segun'
let change = names1.replace('e','a')
console.log(change);
console.log("")
console.log("                     OBJECTS");
console.log("")
const user = {
    name: "Esther",
    password: "12345",
    isFemale: true,
    city: "Lagos",
    age: 25
};
for (let key in user){
    console.log("these are the keys: " + key);
}
console.log("")
for (let values in user){
    console.log("these are the values: " + user[values]);
};
console.log("")
console.log(Object.keys(user));
console.log("")
console.log(Object.values(user));
console.log("")
console.log(Object.entries(user));
console.log("")
console.log("                Working on Error")
let age = 25;
console.log(age.toString().toUpperCase());
console.log("")
try {
    //code that might fail goes here 
    let result = 10/0;
    console.log(result);
    undefinedfunction(); //this will cause an error!;
    console.log("This line will NOT run");
} catch (error) {
    //This runs ONLY if something goes wrong
    console.log("An error occured: " + error.message);
}
console.log("The program continues here.");
console.log("");
try {
    //code that might fail goes here 
    let result = 10/2;
    console.log(result);
    console.log(myPet); //this will cause an error!;
    console.log("This line will NOT run");
} catch (error) {
    //This runs ONLY if something goes wrong
    console.log("An error occured: " + error.message);
};
console.log("Error details")
try {
    //code that might fail goes here 
    let result = 10/2;
    console.log(result);
    console.log(myPet); //this will cause an error!;
    console.log("This line will NOT run");
} catch (error) {
    //This runs ONLY if something goes wrong
    console.log(error.name);
    console.log("An error occured: " + error.message);
    console.log(error.stack)
}