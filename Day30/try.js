// function inventory(products) {
//   const low = products.filter(product => product.stock < 100);
  
//   const rData = low.map(product => ({ name: product.name,category: product.category,
//     reorderCost: product.pricePerUnit * (100 - product.stock),
//   }));

//   const rCost = rData.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = 0;
//     }
//     acc[product.category] += product.reorderCost;
//     return acc;
//   }, {});

//   const srCategry = Object.entries(rCost)
//     .sort((a, b) => b[1] - a[1]) 
//     .reduce((acc, [category, cost]) => {
//       acc[category] = cost;
//       return acc;
//     }, {});

//   return srCategry;
// }
// const products = [{ name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
//   { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
//   { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
//   { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
//   { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 },
// ];

// const result = inventory(products);
// console.log(result);

// function orderfood(cb){
//   setTimeout(()=>{
//     console.log("ordred")
//     cb()
//   },2000)
// }
// function preparefood(cb){
//   setTimeout(()=>{
//     console.log("preparing..")
//     cb();

//   },3000)
// }

// function deliverfood(cb){
//   setTimeout(()=>{
//     console.log("delivered")
//     cb();

//   },8000)
// }


// function enjoyfood(cb){
//   setTimeout(()=>{
//     console.log('enjoy')
//     cb();

//   },7000)
// }

// function walk(){
//   setTimeout(() => {
//     console.log("walk for a while....")
//   }, 5000);
// }

// orderfood(function(){
//   preparefood(function(){
//     deliverfood(function(){
//       enjoyfood(function(){
//         walk()
//       })
//     })
//   })
// })


//using promises

//promises - pending , fullfilled , rejected

///promise - default or intial value pending , after that it will get fillfilled or rejected.

//promise is a constructor function or object we can say

let myPromise = new Promise()//new instance




let str = 'malayalam'


function palindromeString(str){
  for(let i=0;i<str.length/2;i++)
    if(str[i]!==str[str.length-(1+i)])
      return false
  
   return true

}

console.log(palindromeString("malayalam")); // true
console.log(palindromeString("hello"));     // false
console.log(palindromeString(""));          // true
console.log(palindromeString("a"));         // true
console.log(palindromeString("abba"));      // true
console.log(palindromeString("abcba"));     // true


const person = {
  greet() {
      console.log(`Hello, my name is ${this.name}`);
  }
};

const individual = Object.create(person, {
  name: {
      value: "Rahul",
      writable: false, // Name cannot be changed
      configurable: true,
      enumerable: true
  },
  age: {
      value: 25,
      writable: true,
      configurable: true,
      enumerable: true
  }
});

individual.greet(); // Output: Hello, my name is Rahul
console.log(individual.age); // Output: 25

function equi(arr){
  let n = arr.length
  
  if(n<=2)
  return console.log("No Equi")
   
  for(let i=0;i<n-2;i++){
    ls=0
    for(let j=i-1;J>=0;j--){
      ls=ls+arr[j]
    rs=0
    for(j=i+1;j<n;j++)
      rs=rs+a[j]
    
    if(ls===rs)
    console.log(i)
  }
}
let arr=[6,3,7,2,4,9,9]
equi(arr)
}

// function countChar(str){
//   let obj={}
// for (let char of str) {
//   if(obj[char])
//   obj[char]++
//   else
//   obj[char]=1
// }
 
// console.log(obj)
// }

// const input = "aaaaabbccdd";
// const result = countChar(input);
// console.log(result);


// function countChar(str){
  
//   let count=1
//   let temp=''
//   for(let i=0;i<str.length;i++){
//     if(str[i]===str[i+1])
//     count++
//     else{
//     temp+=str[i]+count
//     count=1
//     }
//   }
  
//   console.log(temp)
// }
// const input ="aaabbcaabbbcca";
// const result =countChar(input);

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumOfSpecialPairs(N, A) {
  let totalSum = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const diff = j - i;
      if (isPrime(diff)) {
        totalSum += Math.abs(A[i] - A[j]);
      }
    }
  }

  console.log(totalSum);
}

// Example Usage:
const N = 6;
const A = [1, 2, 3, 5, 7, 12];
sumOfSpecialPairs(N, A); // Output the result


// function Person(name) {
//   this.name = name;
// }

// Person.prototype.describe = function() {
//   return `This is ${this.name}`;
// };

// const person = new Person("Alice");
// console.log(person)

// console.log(person.__proto__hasOwnProperty("describe"))


// function countChar(str){
//   let obj={}
// for (let char of str) {
//   if(obj[char])
//   obj[char]++
//   else
//   obj[char]=1
// }
 
// let max=0
// let char=''
// for(let keys in obj ){
//   if(obj[keys]>max){
//     max=obj[keys]
//     char=keys
//   }
   
// }
 
// console.log(max)
// console.log(char)
// }

// const input = "aaaaabbccdd";
// const result = countChar(input);

// function countChar(str){
//   let obj={}
// for (let char of str) {
//   if(obj[char])
//   obj[char]++
//   else
//   obj[char]=1
// }
// let alpha = 'abcdefghijklmnopqrstuvwxyz'
// let res=''
// for(let i=0;i<26;i++){
//   if(obj[alpha[i]])
//   res+=alpha[i] +" "+ obj[alpha[i]] +"\n"
//   else 
//   res+=alpha[i] +" "+ 0 +"\n"
  
// }
 
// console.log(res)
// //console.log(char)
// }

// const input = "aaaaabbccddzzgg";
// const result = countChar(input);

function minLengthSubstr(s) {
  let N=s.length;
  let minLength = Infinity;
  let maxDistinctCount = -1;
  let result = "";

  for (let i=0;i<N;i++) {
      for (let j=i+1;j<=N;j++) {
          let substr = s.slice(i, j);
          let distinctSub=new Set(substr);
          let distinctSize=distinctSub.size;

          if (distinctSize>maxDistinctCount) {
              maxDistinctCount = distinctSize;
              minLength = substr.length;
              result = substr;
          } else if (distinctSize===maxDistinctCount&&substr.length< minLength) {
              minLength=substr.length;
              result=substr; // Corrected: Use substr, not subStr
          }
      }
  }

  if (maxDistinctCount === -1) {
      console.log("No substrings found");
      return "";
  }

  console.log(result.length);
  return result;
}

minLengthSubstr('zoomsessionmooz')




function solve(N, A) {
  for(let i=1;i<N-1;i++){
      let leftSum = 0;
      for(let j=0;j<i;j++){
          leftSum+=A[j];
      }
      let rightSum=0;
      for(let j=i+1;j<N;j++){
          rightSum+=A[j];
      }
      if(leftSum===rightSum) {
          return console.log(i + 1);  
      }
  }
  console.log(-1);
}
function runProgram(input) {
  let lines = input.split("\n"); 
  let T = parseInt(lines[0], 10);
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
  let result = []; 

  for (let i = 1; i <= T; i++) {
      let str = lines[i];
      let count = new Array(26).fill(0); 
      for (let j = 0; j < str.length; j++) {
          let char = str[j];
          let index = alphabet.indexOf(char);
          if (index !== -1) {
              count[index]++;
          }
      }
      result.push(count.join(" "));
  }
  console.log(result.join("\n"));
}
let input = `2
aeiou
aaeiou`;
runProgram(input);
