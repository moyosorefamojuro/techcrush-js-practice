console.log("                    Question 7: String Methods & Control Flow");
console.log("               Using string methods to format and manipulate texts")
console.log("A function hat trims extra spaces from both inputs and " +
    "returns the full name in this exact format: 'LASTNAME, Firstname'")
console.log("");
function formatName(firstName, lastName) {
    trimFirstname = firstName.trim();
    trimLastname = lastName.trim();
    formattedFirstName = trimFirstname.toLowerCase();
    firstNameedited = formattedFirstName.slice(0,1).toUpperCase() + formattedFirstName.slice(1,8);
    formattedLastName = trimLastname.toUpperCase();
    fullName = formattedLastName + ", " + firstNameedited;
    return fullName;
}
console.log(formatName(" ester        ", "         ogbu "));
console.log('');
console.log("Test with my name")
console.log(formatName("   moyosore  ","             famojuro          "));