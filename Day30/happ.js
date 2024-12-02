function checkHappy(n){
   
   

  let result = separate(n)
  function separate(n){
    let arr=[]
    while(n>0){
        
        let rem=n%10
        arr.unshift(rem)
        n=Math.floor(n/10)
    
    }
  //  console.log(n)
    return check(arr)
  }


function check(arr){
    
    let sum=0
    for(let i=0;i<arr.length;i++){
     sum+= arr[i]*arr[i]  
    }

    if(sum===1)
       return true
    else if(sum===4)
        return false
     
    
     return separate(sum)
}

if(result===true)
    console.log("Yes")

}


checkHappy(19)