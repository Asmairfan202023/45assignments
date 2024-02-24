"use strict";
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let GirlsName = ["Tina", "Mina", "Shina", "Sina"];
console.log(GirlsName);
let GirlsName3 = "Tina";
console.log(GirlsName3 + " is busy with her family. S0, she can't join us");
let delItem = GirlsName.slice(1);
console.log("New invitition list is..." + delItem);
