// Primitive
// call by value
// 7 types : String, Number,, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 123123123123123123123n

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagrag", "doga"]

let myObj = {
  name: "prog",
  age: 22,
}

const myFunction = function () {
  console.log("Hello world")
}

console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "progsolos"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "prog@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
