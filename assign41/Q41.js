"use strict";
//41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magicians = ["Aalto", "Simo·Abbot", "David·Baker", "Al·Balducci", "Alessandro"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
