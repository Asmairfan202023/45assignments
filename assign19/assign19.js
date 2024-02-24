"use strict";
// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestArr2 = ["Haya", "Abiha", "Ifrah", "Humna"];
console.log("I can invite only two people to Dinner");
while (guestArr2.length > 2) {
    let removGuest = guestArr2.pop();
    console.log(`Dear ${removGuest}, You are not invited to a dinner`);
}
guestArr2.map((item) => console.log(`Dear ${item}, you are still invited to a dinner`));
console.log("Be patience, Your stomach is your own");
