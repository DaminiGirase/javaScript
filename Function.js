// function number(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// number();

// function isAdult(){
//     let age = 18;
//     if(age >= 18){
//         console.log("Adult");
//     }
//     else{
//         console.log("Not Adult");
//     }
// }
// isAdult();

// function poem(){
//     console.log("Found a Pinut, Found a Pinut, Found a Pinut ");
//     console.log("Just now, Just now i found a pinut, Found a Pinut Just now ");
// }
// poem();

// function dice(){
//     let num = Math.floor(Math.random() * 6) + 1;
//     console.log(`I get ${num}`);
// }
// dice();

// function sutdInfo(name, age){
//     console.log(`${name}'s age is ${age}.`);
// }
// sutdInfo("Damini", 18);
// sutdInfo(18);

// function average(a, b, c){
//     console.log((a+b+c)/3);
// }
// average(1, 2, 3);
// average(9.65, 9.36, 9.80);

// function table(n){
//     for(let i = n; i <= n*10; i += n){
//         console.log(i);
//     }
// }
// table(90);

// Return

// function sum(a, b) {
//     console.log("Hello Damini");
//     console.log("Hello Damini");
//     return a + b;
//     console.log("Hello Damini");
//     console.log("Hello Damini");
// }
// console.log(sum(2, 3));

// function sumOfN(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//      return sum;
// }
// console.log(sumOfN(5));

// function Concates(str1, str2){
//         let result = str1.concat(str2);
//         return result;
// }
// console.log(Concates(["Damini", "Yara", "Shivani"], ["Radhika", "Radha", "Gairi"]));

// function Concates(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }
// console.log(Concates(["hi", "Damini", "!"]));

// Scopes

// let greet = "hello";

// function changGreet(){
//     let greet = "namaste";
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }
// console.log(greet);
// changGreet();

// function Expression

// let name = function(){
//     return "Damini Girase.";
// }
// console.log(name());

// name = function(){
//     return "Shradha Khapara.";
// }
// console.log(name());

// Highter order Function

// let greet = function(){
//     console.log("namaste!");
// }

//  function loopGreet(func, n){

//     for(let i=0; i<n; i++){
//         func();
//     }
// }
//  loopGreet(greet, 5);

// function evenOrOdd(requset) {
//     if (requset == "even") {
//         return function(n) {
//             console.log(n % 2 == 0);
//         }
//     }

//     else if (requset == "odd") {
//         return function(n) {
//             console.log(!(n % 2 == 0));
//         }

//     }
//     else {
//         console.log("Invalid Requist!");
//     }
// }
// let requset = "even";
// let func = evenOrOdd(requset);
// func(3);

// methods

// let calCulator = {
//     add: function(a, b){
//         return a+b;
//     },
//      sub: function(a, b){
//         return a-b;
//     },
//      mul: function(a, b){
//         return a*b;
//     } 
// };

// also possible

// let calCulator1 = {
//     add(a, b){
//         return a+b;
//     },
//      sub(a, b){
//         return a-b;
//     },
//      mul(a, b){
//         return a*b;
//     } 
// };

// console.log(calCulator1.add(2, 3));
// console.log(calCulator1.sub(10, 4));
// console.log(calCulator1.mul(2, 8));

// Assenment Part 06

// Q 05

// function random(start, end){
//     let num = Math.floor(Math.random() * end) + start;
//     console.log(num);
// }
// random(2, 99);

// Q 04

// function countVowel(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//        let ch = str.charAt(i);
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
//                count++;
//         }
//     }
//     return count;
// }
// console.log(countVowel("damini girase"));

// Q 03

// function longCity(arr){
//     let larg = arr[0];
//     for(let i=0; i<arr.length; i++){
//        if(larg < arr[i]){
//         larg = arr[i];
//        }
//     }
//     return larg;
// }

// console.log(longCity(["india", "japan", "united kingdom", "united state of america"]));

// Q 02

// function unique(str){
// let store = "";
//     for(let i=0; i<str.length; i++){
//         let ch = str.charAt(i);
//         if(store.indexOf(ch) == -1){
//            store += ch;
//         }
//     }
//     return store;
// }
// console.log(unique("aabbccdd"));

// Q 01


// function largeArray(arr, n) {

//     for (let i = 0; i < arr.length; i++) {
//         if (n < arr[i]) {
//             console.log(arr[i]);
//         }
//     }

// }
// let arr = [2, 3, 5, 6, 7, 8, 9, 7];
// let n = 3;
// largeArray(arr, n);

let sum = function(a, b){
    console.log(a+b);
}
sum(2, 4)