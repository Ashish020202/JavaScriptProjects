let movie = "spider man";
let hero ="tom holand";

console.log(hero.length);
console.log('escap\'e sequence');
console.log(hero.toUpperCase());
console.log(hero.slice(3));
console.log(movie.trim());
console.log(movie.replace("spider","king"));
console.log(movie.concat(" hero is" + hero));
console.log(movie[4]);
console.log(movie.includes("spider"));
console.log(movie.endsWith("man"));
// suppose i have to print tom holand is hero of movie spiderman

// templete literals 
// with templete literal it is possoble to use both 
// single as well as double quotes
// here string literals comes in picture 
let title = `${hero} is hero of movie ${movie}`;
console.log(title);