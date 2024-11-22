// function substraction(num1, num2){
//     return num1-num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }
// function divide(num1, num2){
//     return num1/num2;
// }

// function greet(name){
//     return `Hello ${name}`;

// console.log(greet("Jose"));
// console.log(greet("Juan"));
// }

// function sumAll(...num){
//     let i=0;
//     let sum=0
//     console.log(num.length);
//     while(i<num.length){
//         sum+=num[i]
//         i++;
//     }
//     return sum;
// }

// function square(num){
//     var squareValue = num * num
//     return squareValue
// }

// const anonymous = function(name){
    
//     return `Namasakaram ${name}`
// }



// console.log(substraction(5,3));
// console.log(multiply(5,3));
// console.log(divide(5,3));
// console.log(greet("heman"));
// console.log(sumAll(1,2,3,4,5,6,7,8,9,10));
// console.log(square(543743437));
// // console.log(squareValue)

// console.log(anonymous('fffff'))


// // ( ()=>{
// //     console.log("Hello! World");
// // })();

// console.log(Math.sqrt(Math.sqrt(16)))


// function showDateTime(){
//     let date = new Date().getTime();
//     console.log(date)
// }
// showDateTime()

// const greet = (name)=>{
//     console.log(`Hello ${name}`)
// }

// greet("Rahul")
// greet("Shyam")


// function calculateAverage(num1,num2,num3){
//     let avg =( num1+num3+num2)/3
//     console.log(`Average of ${num1} , ${num2} and ${num3} is : ${avg}`)
// }


// calculateAverage(10,20,30)


// function generateBill(basePrice,tax=0.1,discount=0.05){
  
//     let billAmount = basePrice+(basePrice*tax)-(basePrice*discount)
//     console.log(billAmount)
// }
// generateBill()
// generateBill(400)
// generateBill(400,0.5,0.04)


// var calculateAverage = function (num1,num2,num3){
//     let avg =( num1+num3+num2)/3
//     console.log(`Average of ${num1} , ${num2} and ${num3} is : ${avg}`)
// }


// calculateAverage(10,20,30)

var compare = function(num1,num2){
    // if(num1>num2)
    //     return num1
    // else
    //   return num2

    return num1>num2?num1:num2
}

let res = compare(23,21)
console.log(res)



///Javascript ahs two pahese memory and execution pahess
