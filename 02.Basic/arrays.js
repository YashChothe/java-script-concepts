// array

const myArray=[0,1,2,3,4,5];
const myHeros=["shaktiman","naagraj"];

const myArray2= new Array(1,2,3,4,5);
// console.log(myArray2[0]);


// array methods

myArray.push(6);
myArray.pop();
// console.log(myArray);

myArray.unshift(9);
myArray.shift();
// console.log(myArray);

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(5));


const newArry= myArray.join();
// console.log(newArry);

//slice , splice

console.log("A", myArray);


const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)
console.log("C ", myArray);
console.log(myn2);