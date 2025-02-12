// const tinderUser = new Object() //singleton
// const tinderUser1 = {} // non singleton

// console.log(tinderUser)
// console.log(tinderUser1)

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "prog",
      lastname: "solos",
    },
  },
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

const users = [{}, {}]

users[1].email

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // to get all keys
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser)) // key-value

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // to check if a property exists or not

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "prog",
}

// course.courseInstructor

const { courseInstructor } = course // object destructuring
console.log(courseInstructor)

// {
//   "name" : "prog",
//  " courseName" : "js in hindi",
//   "price" : "free"
// }
