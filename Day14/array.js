const arr =[0,1,2,3,0]
let str=""
arr.forEach((i=>{
    if(arr[i])
    str+= i + " "
}))

console.log(str)