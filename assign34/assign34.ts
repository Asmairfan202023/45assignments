// 34.Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

//  Store favorite pizza names in a array, and then use a for loop to print the name of each pizza.
const favoritepizza: string[] =["Fajita","Pepriconi","Supereme"];
console.log("My Favorite pizzas are:");
for(let i= 0; i<favoritepizza.length; i++){
    console.log(favoritepizza[i]);
}
// print a sentence for each pizza
console.log("\n I like these pizzas");
for(let i= 0; i<favoritepizza.length; i++){
    console.log("I like"+favoritepizza[i]+"Pizzas");
}
// print an additional sentence about how much i like pizza
console.log("\n I really fond of pizza!");
