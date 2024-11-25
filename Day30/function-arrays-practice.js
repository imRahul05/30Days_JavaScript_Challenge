// greet();
// const greet = function() {
//   console.log("Hello!");
// };
// function add(a, b) {
//     console.log(a + b);
//     return a + b;
//   }
//   add(5);
  
  
// function greet(name = "Guest") {
//     return "Hello, " + name;
//   }
//   console.log(greet());
  
// function multiply(x, y) {
//     return x * y;
//   }
//   console.log(multiply(3, 4));
  
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }
  
// function greetUser() {
//     return "Hello, User!";
//   }
//   let result = greetUser();
//   console.log(result);
  
  
// function printTriangle (n){
 
//     for(let i=1;i<=n;i++){
//            let bag=""
//         for(let j=1;j<=i;j++){
//           bag+=j 
//         }
//        console.log(bag)
//     }
// }

// // let n = prompt("Enter a number")

// printTriangle(4)

// const readline = require("readline");

// // Create an interface for user input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// // Function to print the triangle
// function printTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let bag = "";
//         for (let j = 1; j <= i; j++) {
//             bag += j;
//         }
//         console.log(bag);
//     }
// }

// // Ask for input
// rl.question("Enter a number: ", function (n) {
//     n = Number(n); // Convert input to a number
//     printTriangle(n);
//     rl.close(); // Close the readline interface
// });
// console.log(first)


// let counter = 1;
// while (counter <= 3) {
//   console.log(counter);
//   counter++;
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   console.log("*".repeat(i));
// }


// let animaList = []
// console.log(typeof animaList)


// let wildAnimals = ['tiger', 'lion', 'bear', 'fox','wolf']
// console.log(wildAnimals[0])
// console.log(wildAnimals[wildAnimals.length-1])
// console.log(wildAnimals[2])

// wildAnimals.push('hyena')
// wildAnimals.unshift('wolf')
// console.log(wildAnimals)


// wildAnimals.pop()
// wildAnimals.shift()
// console.log(wildAnimals)

// wildAnimals.pop()

// console.log( wildAnimals.length)

// let sum=[1,2,3,4,5,6]
// let total=0
// for(let i=1;i<sum.length;i=i+2){
//    if(sum[i]%2==0)
//    total +=sum[i]
// }
// console.log(total)

// let str ='racecar'
// let plaindrome = true


// function isPalindrome(str){
// for(let i=0;i<str.length;i++)
//   if(str[i]!==str[str.length-1-i]){
//       plaindrome  = false
//       break
//   }
       
// plaindrome===false ? console.log('not palindrome') :console.log('palindrome')
// }

// isPalindrome(str)


// function isPalindrome(string) {
// let res = "";
// for (let i = string.length - 1; i >= 0; i--) {
// res = res + stringlil;
// return res =
// = string ? "palindrome" : "Not palindrome";
// let out = isPalindrome ("masai");
// console. log (out);



function countChar(str,char){
    let count = 0
    for(let i=0;i<str.length;i++){
      if(str[i]===char){
        count++
      }
    }
    return count
  }
  
  
  let result = countChar("Hello World", "o")
  console.log(result)



let fruit = ['banana','apple','cherry','date']
let target = 'cherry'
function findIndex(fruit,target){
for(let i=0;i<fruit.length;i++){
  if(fruit[i]===target)
    return i
}

  return -1
}
console.log(findIndex(fruit,target))