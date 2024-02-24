"use strict";
// 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
const city_country = (city, country) => {
    return `${city}, ${country}`;
};
console.log(city_country("Lahore", "PaKistan"));
console.log(city_country("Newyork", "USA"));
console.log(city_country("Tokyo", "Japan"));
