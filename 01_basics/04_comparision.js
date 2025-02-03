// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

// equality check == and comparisons > < >= <= work differently
// comparision convert null to a number, treating it as 0
// that's why null >= 0 is true and null > 0 is false.
// Strick check ===

console.log("2" === 2) //false
console.log("2" == 2) // true
