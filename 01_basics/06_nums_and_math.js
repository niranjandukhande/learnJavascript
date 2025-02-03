const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString())

// to use a precision value
// console.log(balance.toFixed(2))

const otherNumber = 23.8966 // if number = 123.8966 => the answer will be 123
// console.log(otherNumber.toPrecision(3)) // 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'))

// +++++++++ Maths +++++++++++++++++++

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.2)) // 4

console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random()) // always between 0 and 1
console.log(Math.floor(Math.random()*10) + 1) // will be greater than one

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
