// object literals

const mySym = Symbol("key1")

const JSUser = {
  name: "Prog",
  "full name": "ProgSolos",
  [mySym]: "mykey1",
  age: 18,
  location: "Mumbai",
  email: "Progsolos@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JSUser.email)
// console.log(JSUser["email"])

// console.log(JSUser["full name"]) //cannot acces this value w/o using the [], cant use the dot[.] syntax

// console.log(JSUser[mySym])

JSUser.email = "changed@email.com"
// Object.freeze(JSUser) // cannot change the properties of these

JSUser.greeting = function () {
  console.log("Hello JSUser")
}

console.log(JSUser.greeting())

JSUser.greetingTwo = function () {
  console.log(`Hello JSUser, ${this.name}`)
}

console.log(JSUser.greetingTwo())
