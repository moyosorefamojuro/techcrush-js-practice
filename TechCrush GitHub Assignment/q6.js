console.log("                    Question 6: Object - Storing Values");
console.log("");
const myProfile = {
    name: "Famojuro Moyosore", 
    age: 100, 
    country: "Nigeria", 
    hobby: "Playing games"
}
function displayProfile(person) {
    console.log("I am ", myProfile.name, ". A ", myProfile.age, 
        "years old guy just learning 'Backend' at TechCrush. I am from ", myProfile.country,
        "and I really enjoy ", myProfile.hobby);
}
displayProfile(myProfile);