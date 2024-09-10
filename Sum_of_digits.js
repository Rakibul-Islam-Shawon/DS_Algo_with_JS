/*
Quetion 2 : Sum of digits of a Number

1287:1+2+8+7

1287%10, R=7+8+2+1,Q=128%10,
*/

function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(sumOfDigits(100));