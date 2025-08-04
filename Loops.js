// for(let i = 1; i<=5; i++){
//     console.log(i);
// }

// for(let i = 5; i >= 1; i--){
//     console.log(i);
// }

// odd numbers

// for(let i = 1; i <= 10; i += 2){
//         console.log(i);
// }

// even number

// for(let i=2; i<=10; i += 2){
//     console.log(i);
// }

// 5 table

// for(let i = 5; i <= 50; i += 5){
//     console.log(i);
// }

// console.log("5 table");

// let n = 5; 
// for(let i = 1; i <= 10; i++){
//     console.log(n*i);
// }

// let table = prompt("Enter a number of table you want print: ");

// table = parseInt(table);

// // for(let i=table; i<=table*10; i+=table){
// //     console.log(i);
// // }
// for(let i=1; i<=10; i++){
//     console.log(table*i);
// }

// nested for loop

// for(let i=1; i<=3; i++){
//     console.log(`outer loop: ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }

// while loop

// let i = 0;

// while( i<=20 ){
//     console.log(i);
//     i++;
// }

// Movie Game

// let favurite = "Dangal";
// let guess = prompt("Guess my favurite moive: ");

// while (favurite != guess) {
//     if(guess == "quit"){
//         console.log("Sorry! i am out.");
//         break;
//     }
//     guess = prompt("Wrong guess! Please try again.");
// }

// if (guess == favurite) {
//     console.log("Congrats! You guess it correct!");
// }

// Break Keyword

// let h = 1;
// while(h <= 5){
//     if(h == 3){
//         break;
//     }
//     console.log(h);
//     h++;
// }

// Loop with Array

// let array = ["mango", "banana", "papaya", "orange", "apple", "pinapple"];
// for(let i=0; i<array.length; i++){
//     console.log(i, array[i]);
// }


// Arrays with nested loop

// let array = [ ["mango", "banana", "papaya"], ["apple", "lichi", "pinapple"]];
// for(let i=0; i<array.length; i++){
//     console.log(`List #${i} = ${array[i]}`);
//     for(let j=0; j<array[i].length; j++){
//         console.log(`j = ${j}, ${array[i][j]}`);
//     }
// }

// For of Loop

// let fruits = ["mango", "banana", "apple", "orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Damini Girase"){
//     console.log(char);
// }

// nested for of loop

let array = [ ["mango", "banana", "papaya"], ["apple", "lichi", "pinapple"] ];

for(list of array){
    for(fruits of list){
        console.log(fruits);
    }
}

     