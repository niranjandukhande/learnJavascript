const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] // to spreadout values
// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, , 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array)

console.log(Array.isArray("Prog")) // false
console.log(Array.from("Prog")) // [ 'P', 'r', 'o', 'g' ]
console.log(Array.from({ name: "prog" })) // interesting, can't make array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
