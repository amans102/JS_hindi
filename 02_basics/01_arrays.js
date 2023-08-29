//array
const myArray = [0, 1, 2, 3, 4, 5]

// array of js are resizeable

console.log(myArray[0]);

//shallow (share the same reference point)and deep copy

const myHeros = ["shaktiman", "naagraj"]

const myArray2 = new Array(1, 2, 3, 4)

myArray.push(6)
console.log(myArray)
myArray.pop()

console.log(myArray)

myArray.unshift(8)
myArray.shift()

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

//slice , splice
const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);
console.log("C", myArray)