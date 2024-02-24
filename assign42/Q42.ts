//42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


const magicians:string[]=["Aalto", "Simo·Abbot", "David·Baker", "Al·Balducci", "Alessandro"];
function show_magicians(magicians:string[]):void{
    for(const magician of magicians){
        console.log(magician);
    }
}
function make_Greate(magicine:string[]):string[]
{
    const greatMagicians:string[] = magicians.map(magicians=>`The Great ${magicians}`);
    return greatMagicians;

}
const greatMagicianNames:string[] = make_Greate(magicians);
console.log("Original Megicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);