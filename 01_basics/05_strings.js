const name = "prog"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("prog-solos-com")
console.log(gameName.__proto__)

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf("r"))

const newString = gameName.substring(0, 5)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    prog    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://prog.com/prog%20solos"

console.log(url.replace("%20", "-"))

console.log(url.includes("prog"))

console.log(gameName.split("-"))
