// // function inventory(products) {
// //   const low = products.filter(product => product.stock < 100);
  
// //   const rData = low.map(product => ({ name: product.name,category: product.category,
// //     reorderCost: product.pricePerUnit * (100 - product.stock),
// //   }));

// //   const rCost = rData.reduce((acc, product) => {
// //     if (!acc[product.category]) {
// //       acc[product.category] = 0;
// //     }
// //     acc[product.category] += product.reorderCost;
// //     return acc;
// //   }, {});

// //   const srCategry = Object.entries(rCost)
// //     .sort((a, b) => b[1] - a[1]) 
// //     .reduce((acc, [category, cost]) => {
// //       acc[category] = cost;
// //       return acc;
// //     }, {});

// //   return srCategry;
// // }
// // const products = [{ name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
// //   { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
// //   { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
// //   { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
// //   { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 },
// // ];

// // const result = inventory(products);
// // console.log(result);

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
let num =5
let myPromise = new Promise((resolve,reject)=>{
   // resolve("done complete")
   if(num%2!==0)
    reject("Odd Number")
   else
    resolve("Even number")
})//new instance

//let promise = new Promise(resolve,reject)
//console.log(myPromise)


//myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err));



function orderfood(cb){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve("food is ordered")
          },2000)
    })
  }

  function deliverfood(cb){
    setTimeout(()=>{
      console.log("delivered")
      cb();
  
    },8000)
  }
  
  
  function enjoyfood(cb){
    setTimeout(()=>{
      console.log('enjoy')
      cb();
  
    },7000)
  }
  
  function walk(){
    setTimeout(() => {
      console.log("walk for a while....")
    }, 5000);
  }
  
  // orderfood(function(){
  //   preparefood(function(){
  //     deliverfood(function(){
  //       enjoyfood(function(){
  //         walk()
  //       })
  //     })
  //   })
  // })
  
  
  console.log(orderfood( ))