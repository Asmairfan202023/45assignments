"use strict";
//42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicians = ["Aalto", "Simo·Abbot", "David·Baker", "Al·Balducci", "Alessandro"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_Greate(magicine) {
    const greatMagicians = magicians.map(magicians => `The Great ${magicians}`);
    return greatMagicians;
}
const greatMagicianNames = make_Greate(magicians);
console.log("Original Megicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
