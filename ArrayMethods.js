//  forEach Array of elements

// let arr = [1, 2, 3, 4, 5];

// let print = function (el){
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function (el){
//     console.log(el);
// })

// arr.forEach((el) => {
//     console.log(el);
// });

// Array of objects

// let arr = [
//     {
//         name: "Damini",
//         marks: 95,
//     },
//      {
//         name: "ashwini",
//         marks: 92,
//     },
    
//      {
//         name: "mukta",
//         marks: 91,
//     },
 
// ];

// arr.forEach((students) =>{
//     console.log(students.marks);
// });

// Map

// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => { 
//     return el * 2;
// });

// console.log(double);

// let student = [
//     {
//         name: "Damini",
//         marks: 95,
//     },
//      {
//         name: "ashwini",
//         marks: 92,
//     },
    
//      {
//         name: "mukta",
//         marks: 91,
//     },
 
// ];

// let gpa = student.map((el) => {
//     return el.marks / 10;
// })

// console.log(gpa);

// Filter

// let num = [1, 3, 2, 4, 5, 6, 7, 8, 9];

// let even = num.filter((num) => (num % 2 == 0));
// console.log(even);

// Every

// let num = [2, 3, 5, 8];

// let Every = num.every((el) => {
//     return el % 2 == 0;
// });
// console.log(Every);

// Some 

// let Some = num.some((el) => {
//     return el % 2 != 0;
// });
// console.log(Some);

// Reduce

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let Reduce = arr.reduce((re, el) => {
//     console.log(re);
//     return el+re;
// });

// console.log(Reduce);

// let num = [2, 3, 4, 5, 6, 2, 5, 7, 8, 9, 100, 909];
// let result = num.reduce((max, el) => {
//     if(el > max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });

// console.log(result);

// Practice Question

// let num = [10, 20, 30, 40, 99];

// let multipal = num.every((el) => {
//     return el % 10 == 0;
// });

// console.log(multipal);

// let minimum = num.reduce((res, el) => {
//     if(el < res){
//         return el;
//     }
//     else{
//         return res;
//     }
// });
// console.log(minimum);

// Default Parameter

// function sum(a, b = 5){
//     return a + b;
// };
// console.log(sum(3));

// Spread 

// let num = [2, 4, 5, 6, 7, 8, 9, 0];
// console.log(Math.min(...num));
// console.log(...num);
// console.log(..."daminigirase")

// Spread with Array literals

// let arr = [2, 4, 5, 6, 7];
// let newArray = [...arr];
// console.log(newArray);

// let charArr = [..."daminigirase"];
// console.log(charArr);

// let arr1 = [1, 3, 4, 5, 6];
// let arr2 = [1, 2, 4, 5, 8, 9];
// let nums = [...arr1, ...arr2];
// console.log(nums);

// Spread with object literals

// const data = {
//     email: "girase.damini234@gmail.com",
//     password: "damini@234",
// };

// let newObj = {...data, id: 234, Name: "damini"};
// console.log(newObj);

// let num = [2, 3, 4, 5, 7];
// let newArray = {...num};
// num.push(90);
// console.log(num);
// console.log(newArray);

// Rest

// function sum(...arr){
//    for(let i=0; i<arr.length; i++){
//     console.log("you give us", arr[i]);
//    }
// } 
// sum(2, 3, 4);

// function sum(...arr){
//     return arr.reduce((sum, el) => sum + el);
// };
// console.log(sum(2, 3, 4, 5));

// Destructuring

// let names = ["tony", "bruce", "steve", "peter", "juany", "done"];

// ward work
// let winner = names[0];
// let runnerup = names[1];

// smart work

// let [winner, runnerup, ...others] = names;
// console.log(others);

// Destructuring in objects

// let students = {
//     // name: "karan",
//     age: 12,
//     class: 9,
//     subjects: ["math", "chemistry", "bee", "physics"],
//     username: "damini@9932",
//     password: "abcd"
// };

// let {username: user, password: secreat, city = "pune", name: m1 = "damini", subjects: sub} = students;
// console.log(user, secreat, city, m1, sub[4]);

// Q 01

// let nums = [1, 1, 1];

// let square = nums.map((num) => num*num);
// let sum = square.reduce((num, el) => num+el);
// let avg = sum/nums.length;
// console.log(avg);

// Q 02

// let elements = [2, 3, 4, 5];
// let creat = elements.map((el) => {
//     return el+5;
// });
// console.log(creat);

// Q 03

// let arr = ["damini", "girase"];
// let newArray = arr.map((str) => str.toUpperCase());
// console.log(newArray);

// Q 04

const doubleAndReturn = (num, ...arr) => [ ...num, ...arr.map((v) => v*2),];

console.log(doubleAndReturn([1, 2, 3], 2, 4));
// Q 05

// let obj1 = [2, 3, 4, 6];
// let obj2 = [7, 8, 9, 6];
// let newObj = [...obj1, ...obj2];
// console.log(newObj);