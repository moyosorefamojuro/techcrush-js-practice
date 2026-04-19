console.log("               JavaScript Assignment: Array Methods");
console.log("              Topic:  forEach(), map(), and filter()");
console.log("  ");
console.log("                    Section_A: Using forEach()");
console.log(" ")
console.log("                           Question_1");
const numbers = [2, 4, 6, 8, 10];
console.log("The result of each value in the array multiplied by 2 is seen below:");
console.log("[2, 4, 6, 8, 10]")//displays the numbers in the given array
let multiple = numbers.forEach(function(multiply){
    console.log(multiply, "* 2 = " + multiply * 2);//outputs each value in the array * 2 = result of the multiplication
});
console.log(" ");
console.log("                           Question_2");
const names = ["Esther", "John", "Ada", "Mike"];
console.log("Greeting to each person in the array is given below:");
console.log("[Esther, John, Ada, Mike]")//displays the names in the given array
let message = names.forEach(function(person){
    console.log("Hello " + person + "!");//displays the greetings
})
console.log(" ");
console.log("                     Section_B: Using map()");
console.log(" ");
console.log("                           Question_3");
const numbers2 = [1, 2, 3, 4, 5]; //using numbers2 cos 'numbers' has already been declared previously
console.log("Result of the square of each number in the array is given below:")
console.log("     [1, 2, 3, 4, 5]");//shows the number in the array as contained in the question
let square = numbers2.map(function(sqr){ 
    return sqr * sqr; //multiplies each number in the array by itself
})
console.log(square)
console.log(" ");
console.log("                           Question_4");
const prices = [100, 200, 300];
console.log("Discount on each price is given below:")
console.log("   [100, 200, 300]");//shows the prices given in the array
let discount = prices.map(function(amount){
    return amount * 0.1;
})
console.log(discount);//displays the discount to be applied to each price
console.log("New amount after discount is applied");
let newPrice = prices.map(function(price, discount2){//index represents each value in the discount array 
    return price - discount[discount2];//subtracts the calculated discount from each price
})
console.log(newPrice);//displays the new price after discount is applied
console.log("")
console.log("                     Section_C: Using filter()");
console.log(" ");
console.log("                           Question_5");
const numbers3 = [5, 12, 8, 20, 3]; //using numbers3 cos 'numbers' has already been declared previously
console.log("Result showing numbers greater than 10 is given below:")
console.log("[5, 12, 8, 20, 3]");//shows the number in the array as contained in the question
console.log("Values > 10 are:")
let greater10 = numbers3.filter(function(great){ 
    return great > 10; //checks if each value is greater than 10
})
console.log(greater10);
console.log(" ");
console.log(" ");
console.log("                           Question_6");
const ages = [15, 22, 17, 30, 18]; 
console.log("Result showing ages 18 and above");
console.log("[15, 22, 17, 30, 18]");//shows the ages in the array as contained in the question
console.log("Ages >= 18 are:")
let adults = ages.filter((adult) => { 
    return adult >= 18; //checks if each value is greater than or equal to 18
})
console.log(adults);
console.log(" ");
console.log(" ");
console.log("                           Question_7");
const numbers4 = [10, 15, 20, 25, 30]; 
console.log("Result showing numbers greater than 20");
console.log("[10, 15, 20, 25, 30]");//shows the ages in the array as contained in the question
console.log("Numbers > 20 are:")
let greater20 = numbers4.filter((g20) => { 
    return g20 > 20; //checks if each value is greater than 20
})
console.log(greater20);
console.log(" ");
console.log("Numbers remaining after filtering out numbers > 20 are those <= 20");
console.log("[10, 15, 20, 25, 30]");//shows the ages in the array as contained in the question
console.log("The numbers left are:")
let lesser20 = numbers4.filter((l20) => { 
    return l20 <= 20; //checks if each value is lesser than or equal to 20
})
console.log(lesser20);
console.log("")
console.log("Doubling the numbers left after filtering");
let double = lesser20.map((doubler)=>{
    return doubler * 2; //doubles the remaining numbers (i.e numbers <= 20)
})
console.log(double);
console.log("")
console.log("Showing final result (filtered values + doubled remaining numbers) in a single array:");
let final = [double + "," + greater20];//adding both arrays into a final array
console.log(final)//displays final result as a new array 
console.log("")
console.log("                   Assignment done. Thank you for the teachings");