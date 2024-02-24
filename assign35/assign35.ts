//35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const animals:string[]=["cat","dog","goat"];
console.log("List of animals:");
// printing the name of each animal
for(const animal of animals){
console.log(animal);
}
// print out statement about each animal
console.log("\n Statement about each animal");
for(const animal of animals){
    switch(animal){
    
        case "dog":
            console.log("A dog is a faithful animal");
        break;
        case "goat":
            console.log("A goat is a cute animal ");
        break;
        default:
            console.log("This animalis not recognized");
            break;
    }
}
// Print out the common characteristic
console.log("\n Any of these animals would make a great pet:");

