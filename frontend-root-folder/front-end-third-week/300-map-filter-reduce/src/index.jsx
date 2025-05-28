var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double (x){
//     return x * 2;
// }
// var newNumbers = [];
// function double(x){
//     newNumbers.push(x*2);
// }
// numbers.forEach(function (x){
//     newNumbers.push(x*2);
// });

// const newNumbers = numbers.map(function double(x){
//     newNumbers.push(x*2);
// });
// console.log(newNumbers);


//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num){
//     return num < 10
// });

// var newNumbers = [];
// numbers.forEach(function (x){
//     if(x < 10){
//         newNumbers.push(x);
//     }
// })
// console.log(newNumbers);



//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = 0;
// numbers.forEach(function (currentNumber){
//     newNumbers += currentNumber
// });

// var newNumbers = numbers.reduce(function (accumulator, currentNumber){
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })


// console.log(newNumbers);

//Find - find the first item that matches from an array.
// const newNumbers = numbers.find(function (num){
//     return num > 10;
// })

// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(function (num){
//     return num > 10;
// })

// console.log(newNumbers);


// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia";
const newEmojipedia = emojipedia.map(function (emojiEntry){
    return emojiEntry.meaning.substring(0, 100)
});

console.log(newEmojipedia);
