let arr = [1,2,3,"Nice", 2.3,{name: "Rakib"}, [2,3]];


//Length of an array
let arrLength = arr.length;
console.log(arrLength);


console.log(arr[5].name);


//access of first element and last element of an array

let firstElement = arr[0];
let lastElement = arr[arrLength-1];

console.log(firstElement, lastElement[0]);

//How to remove our last element of an array

const lastElement1 = arr.pop();

console.log(arr, lastElement1);

//How to add element in array

arr.push(300);
arr.push(23.3);
arr.push(10);

console.log(arr)