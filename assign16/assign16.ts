// • Add one new guest to the beginning of your array.

let guestArr1: string[] = ["Haya", "Abiha", "Ifrah","Humna", "Minahil"];
let canNotattend1: string = "Ifrah";
let newGuest1: string = "Asiya";
guestArr1[guestArr1.indexOf(canNotattend1)] = newGuest1;
console.log(guestArr1);
guestArr1.map((item) =>
(console.log(`Dear ${item}, I found a big table`)));
let guestBegin:string = "Asna";
guestArr1.unshift(guestBegin);
console.log(guestArr1);
let middleGuest: string ="Nida";
let middleIndex = guestArr1.length/2;
guestArr1.splice(middleIndex,0, middleGuest);
console.log(guestArr1);
guestArr1.push("fatima");
console.log(guestArr1);