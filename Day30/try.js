// function printNatural(n1,n2){
//     // for(let i=n1;i<=n2;i++)
//     //     console.log(i)
// let i =n1
//     while(i<=n2){
//         console.log(i)
//         i++
//     }
// }

// printNatural(10,20)

//factors of a number

// let n=12
// let count=0
// function findFactors(n){
//     for(let i=1;i<=n;i++){
//         if(n%i==0)
//             count++
//     }

// }

// findFactors(12)
// console.log(count)



// let n=12
// let count=0
// function CheckPrime(n){
//     for(let i=2;i<n;i++){
//         if(n%i==0)
//             count++
//     }

// }

// CheckPrime(12)
// if(count>0)
//     console.log('Not prime')
// else
// console.log(' prime')


// let n1=12
// let n2 = 25

// function CheckPrime(n){
//     for(let i=n1;i<n2;i++){
//         if(n%i==0)
//             count++
//     }

// }

// CheckPrime(12)
// if(count>0)
//     console.log('Not prime')
// else
// console.log(' prime')


// function Divison(n){

//     if(n===0)
//         return -1
//     else if(n>0){
//          let val = 32/n
//          return val.toFixed(2)
//     }
//     else 
//       return n
// }

// console.log(Divison(12))


// function check(num){
//     if(num%35===0){
//         console.log("Masai School");
//     }
//     else if(n%5===0)
//         console.log("School")
//     else if (n%7===0)
//         console.log("Masai")
//     else
//          console.log("Hurray!")
// }


// check(35)

function unitsPrice(num){

    let price = 0
    let rem =0
    if(num>=151){
        rem = num
        price+= 50*3
        rem  = num-50
    
        if(rem<=100)
          price+=rem*5
        else{
            price+=100*5
            rem=rem-100
            price+=rem*10
        
        }
    }

     else if(num>=51 && num<=150){

        rem = num
        price+=50*3
        rem = num-50

        price+=rem*5
     }
     else if(num>0&&num<=50)
       price+=num*3

        return price+80
    }
  
  

console.log(unitsPrice(50))

console.log(unitsPrice(152))


console.log(unitsPrice(170))