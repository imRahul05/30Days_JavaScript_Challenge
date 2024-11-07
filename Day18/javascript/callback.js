const numbers =[1,4,9]
function processingNumbers(numbers,callback){
  
  callback(numbers)
  
}

function callback(x){
  for(let i=0;i<x.length;i++)
  console.log(x[i])
}

processingNumbers(numbers,callback)