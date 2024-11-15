function threeMaxThreeMin(N,arr){
    arr.sort((a,b)=>a-b)
    console.log(arr)
    
    let newArr=[];
    
    for(let i=0;i<arr.length;i++){
     let duplicate=false
     for(let j=0;j<newArr.length;j++){
       if(arr[i]===newArr[j]){
         duplicate=true
         break;
       }
       
     }
     if(!duplicate)
     newArr.push(arr[i])
    }
    
     console.log(newArr)
    
    if(newArr.length<3){
     console.log("Not Possible")
     console.log("Not Possible")
    }
    else if(newArr.length===5){
      console.log(newArr.slice(0,3).join(" "))
      console.log(newArr.slice(-3).join(" "))
    }
    else if(newArr.length>=3&&newArr.length<6){
    console.log(newArr.slice(0,3).join(" "))
     console.log("Not Possible")
    }
    else{
      console.log(newArr.slice(0,3).join(" "))
      console.log(newArr.slice(-3).join(" "))
    }
}
threeMaxThreeMin(6,[51,0,0,11,-11,23])