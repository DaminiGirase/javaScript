
 // this keyword

// const marks = {
//     math: 98,
//     physics: 99,
//     chem: 96,
//     java: 94,
//     getAverage(){
//         let ave = Math.floor((this.math + this.chem + this.physics + this.java) / 4);
//         console.log(ave);
//     }
// }
// marks.getAverage();

// Try Catch

// try{
//     console.log(a);
// }
// catch(e){
//     console.log("Error Occures!");
//     console.log(e);
// }

// Arrow Function

// const power = (a, b) => {
//     return Math.pow(a, b);
// }
// console.log(power(2, 5));

// const empty = () => {
//     console.log("Hello i am Damini!");
// }
// empty();

// setTimeout function

// console.log("Hi there!");

// setTimeout(() => {
//     console.log("Apna COllege");
// }, 1000);

// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");
// console.log("Welcome to");

// setInterval function

// let id = setInterval(() => {
//     console.log("Hello how are you");
// }, 2000);

// let id2 = setInterval(() => {
//     console.log("i am fine");
// }, 4000);

// on console
//clearInterval(id); to stop

// const square = n => n*n;
// console.log(square(7));

// let id = setInterval(() => {  
//          console.log("Helloc World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);

// Assenment part 07

// Q 01

// const arrayAverage = (arr) => {
//     let avg = 0;
//     for(let i=0; i<arr.length; i++){
//         avg += arr[i];
//     }
//     return avg / arr.length;
// }
// let arr = [2, 3, 4, 5, 6, 7];
// console.log(arrayAverage(arr));

// Q 02

const isEven = (n) => {
    if(n%2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(isEven(34));