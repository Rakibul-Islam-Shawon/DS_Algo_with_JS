// ES6 Arrow Function
const jumpSearch = (arr, x) => {
    let n = arr.length;
    // block size
    let block = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Finding the block
    while (arr[Math.min(block, n) - 1] < x) {
        prev = block;
        block += Math.sqrt(n);
        if (prev >= n) return -1;
    }

    // Linear Search in the block
    while (arr[prev] < x) {
        prev++;
        if (prev == Math.min(block, n)) return -1;
    }
    
    if (arr[prev] == x) return prev;
    return -1;
}

let testArray = [1, 2, 3, 4, 5, 6];
let x = 3;
console.log(jumpSearch(testArray, x));
// output => 2;