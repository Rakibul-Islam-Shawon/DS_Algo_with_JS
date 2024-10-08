let arr = [1,2,3,"Nice", 2.3,{name: "Rakib"}, [2,3]];


//Length of an array
let arrLength = arr.length;
console.log(arrLength);


console.log(arr[2].name);


//access of first element and last element of an array

let firstElement = arr[0];
let lastElement = arr[arrLength-1]; // process of finding last element

console.log(firstElement, lastElement[0]);

//How to remove our last element of an array

const lastElement1 = arr.pop();

console.log(arr, lastElement1);

//How to add element in array

arr.push(300);
arr.push(23.3);
arr.push(2000);

arr.unshift(1000);
arr.shift();
arr.shift();


//foreach used for looping.

arr.forEach((x,i)=> {
    console.log(x,arr[i]);
})

// 

console.log(arr);


//Aother looping process

for(let x of arr){
    console.log(x);
}


//finding an element in Array

const findElement = (arr, target) => {
    for(let x of arr){
        if( x === target){
            return true;
        }
    }
    return false;
}

console.log(findElement(arr, "Hello"));
console.log(findElement(arr, "Nice"));


const findElementIndex = (arr, target) => {
    for(let i=0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findElementIndex(arr, "Nice"));
console.log(findElementIndex(arr, 2));


//How to add two array

const newArrA = [1, 2, 4, "Name"];
const newArrB = [5, 6, 7, "nine"];

const newArr = newArrA.concat(newArrB);
console.log(newArr);


// How can we check if two arrays are equal

const isArrayEqual = (ArrA, ArrB) => {
    // if (newArrA.length !== newArrB.length){
    //     return false;
    // }

    // for(let i = 0; i< newArrA.length; i++){
    //     if(newArrA[i] !== newArrB[i]){
    //         return false;
    //     }
    // }

    // return true;

    return ( ArrA.length === ArrB.length && ArrA.every((ele, i) => ArrA[i] === ArrB[i]))
}


console.log(isArrayEqual([1,2,3], [1,2,3]));