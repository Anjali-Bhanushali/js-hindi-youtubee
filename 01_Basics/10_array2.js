const name = ["anjli", "saniya" , "shubham"]
const subject = ["hindi", "sanskrit", "sst"]

// name.push(subject)
// console.log(name)
// console.log(name[3][1])

const nameandsubject = name.concat(subject)
console.log(nameandsubject)

const interest = ["singing","dancing","cricket"]
const all = [...name,...subject,...interest] // this is known as spreading the values(can add multiple array)
console.log(all)

const age = [1,2,3,[1,2,3],7,[6,7,8]]
const rightage = age.flat(Infinity)
console.log(rightage)

console.log(Array.isArray("anjali"))
console.log(Array.from("anjali"))
console.log(Array.from({name: "anjali"}))// here you have to mention to form array from all keys

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))