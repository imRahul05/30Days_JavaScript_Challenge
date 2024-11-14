function firstBigger(n,arr,q,queries){
    //n -> size of arr
    //arr -> all n number given in the form of an array
    //q -> number of queries
    //queries -> value of k for each query in the form of an array
    // write your code here
    arr.sort((a,b)=>a-b)
  
    for(let i=0;i<queries.length;i++){
       let k = false;
      
      for (let j=0;j<arr.length;j++){
        if(arr[j]>queries[i])
        {
           console.log(arr[j])
            k=true;
            break;
        }
       
        
      }
       if(!k){
         console.log(-1)
  
        }
     
    }
    
  }
  
  