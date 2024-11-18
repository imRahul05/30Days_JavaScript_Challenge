class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        
        // Code Here
        //  let newArr=[];
    
        //  for(let i=0;i<arr.length;i++){
        //  let duplicate=false
        //   for(let j=0;j<newArr.length;j++){
        //   if(arr[i]===newArr[j]){
        //     duplicate=true
        //   break;
        //   }
       
        //  }
        //  if(!duplicate)
        // newArr.push(arr[i])
        //  }
        
        const newArr = Array.from(new Set(arr))
        //Main code of if-else
       if(newArr.length<2)
        return -1
       else if(newArr.length==2&&newArr[0]==newArr[1])
         return -1
        
        else {
             let max=newArr[0]
             for(let i=1;i<newArr.length;i++){
              if(max<newArr[i]){
                max=newArr[i]
                   }
             }
    
            let sMax= -Infinity
   
          for(let i=0;i<newArr.length;i++){
                  if(newArr[i]>sMax&&newArr[i]<max)
               sMax=newArr[i]
            }
            return sMax

                 }
        }
}