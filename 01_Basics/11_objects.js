//singleton
//object.create

//==============

//object literals

const user = {
    name:"anjali",
    "full name": "anjali kumari",
    age:18,
    email: "hello@123.com",
    location: "bihar",
    isloggedin: false,
    lastloggedin: ["monday","tuesday"]
}

console.log(user.email)
console.log(user["email"])

console.log(user["full name"])// this is the only way to access this

