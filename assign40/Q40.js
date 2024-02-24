"use strict";
function make_Album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums
const album1 = make_Album("The weekend", "star boy");
const album2 = make_Album("Subhan", "still rolling");
const album3 = make_Album("Talha anjum", "Open letter", 15);
// // Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
