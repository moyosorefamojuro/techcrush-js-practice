console.log("                    QUESTION_1: Substring & Slice          ");
const str = "Nigeria is awesome";
let Nigeria = (str.substring(0,7))
console.log("Nigeria: ", Nigeria);//extracts 'Nigeria' using substring
let awesome = (str.slice(-7));
console.log("awesome: ", awesome);//extracts 'awesome' using slice
let is = (str.slice(8,10));
console.log("is: ", is);//gets 'is' using slice
console.log(" ")
console.log("                    QUESTION_2: Split           ");
const names = "John,Jane,Doe";
console.log("Names splitted: ", names.split(','));
let namesArray = names.split(',');
console.log("Names joined with spaces: ", namesArray.join(' '));//joins names using space
const path = "/user/home/docs";
console.log("path splitted: ", path.split('/'));//splits path using /
let home_getter = (path.split('/')[2])
console.log("home extracted: ", home_getter);//gets home using index
console.log(" ")
console.log("                    QUESTION_3: Mix               ");
const email = "user@example.com";
let userName = (email.split('@'))
console.log("username splitted: ", userName);//gets username using split
let emailDomain = (email.endsWith(".com"))
console.log("Is email a '.com' domain type? ", emailDomain);//checks if email is a '.com' domain
let replacer = (email.replace('@','AT'))
console.log("@ replaced: ", replacer);//replaces @ with 'AT'
console.log(" ")