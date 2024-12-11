
function pair(arr,target){

    count =0
    
    for(let i=0;i<arr.length;i++){
      for(let j=i+1;j<arr.length;j++){
        if(target == arr[i]+arr[j]){
          count++
        }
      }
    }
    console.log(count)
    }
    
    
    let arr = [3,0,6,2,7]
    
    pair(arr,9)