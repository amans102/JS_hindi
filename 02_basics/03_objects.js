// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aman",
    "full name": "Aman Singh",
    [mySym]: "myKey1",
    age: 23,
    location: "Jaipur",
    email: "maskjwfw@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "akdjd@gmail.com"
Object.freeze(JsUser)
