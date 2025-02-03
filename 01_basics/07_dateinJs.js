// Dates
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())
// year, month, date * the month here starts from 0, i.e. JAN = 0
// can also be written in DD-MM-YY format

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString())

// can be used in polls, or to keep track of who registered when
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString("default", {
  weekday: "long",
})
