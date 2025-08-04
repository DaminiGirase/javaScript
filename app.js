//Q 01

// let num = 2;
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// Q 02

// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy > 0){

//     copy = Math.floor(copy/10); 
//     count++;
// }
// console.log(count);

// Q 03

//  let number = 287152;
// let sum = 0;
// let copy = number;
// while(copy > 0){
//          digit = copy % 10;
//          sum += digit;
//          copy = Math.floor(copy/10);
// }
// console.log(sum);

// Q 04

// let n = 4;
// let fact = 1
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(`factorial is ${fact}`);

// Q 05

let arr = [2, 4, 5, 6, 7, 9, 45];
let largest = 0;
for(let i=0; i<arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);