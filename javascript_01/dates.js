
// const myDate = new Date();

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

const myCreatedDate =new Date("01-22-2024");

let timeSpan = Date.now()


console.log(timeSpan) //the current time span in milesec from 1970
console.log(myCreatedDate.getTime()); //the date i want to compare in milesec

console.log(Math.floor(Date.now()/1000)) //convert the value in sec 