// console.log(Array.isArray("Omkar"))
// console.log(Array.from("Omkar")) //make a  array 
// console.log(Array.from({name:"omkar"}))//gives an empty array

let score1 =100;
let score2=200;
let score3=300;

// console.log(Array.of(score1,score2,score3)) //converts into an array


//concat the a arrary by using spread opreator

let marvelHeroes =["Ironman","Spiderman","Hulk","Thor"]
let dcHeroes= ["Superman","Flash","Blackadam","Batman"]

let allHeroes =[...marvelHeroes,...dcHeroes]
console.log(allHeroes)
