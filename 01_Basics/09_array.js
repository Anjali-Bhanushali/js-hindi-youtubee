const myarray = [1,2,3,4]
console.log(myarray)

const myarray2 = new Array("anjali" , "saniya")
console.log(myarray2)

console.log(myarray2[1])

myarray.push(5)
console.log(myarray)
myarray2.pop()
console.log(myarray2)

myarray.unshift(1)
console.log(myarray)

myarray.shift()
console.log(myarray)

console.log(myarray.includes(9))
console.log(myarray.indexOf(2))

const newarray = myarray.join()
console.log(myarray)
console.log(newarray)
console.log(typeof(newarray))

// slice and splice
 
console.log("A" , myarray)

const myn1 = myarray.slice(1,3)
console.log(myn1)
console.log(myarray)

const myn2 = myarray.splice(1,3)
console.log(myn2)
console.log(myarray)
