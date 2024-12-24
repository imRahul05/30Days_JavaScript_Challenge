function smartConsumer(n,x,y,arr){
    // Write your code here!
     let sum1=0
     let sum2=0
      for(let i=0;i<n;i++){
         sum1+=arr[i]
        if(arr[i]>y){
          arr[i]-=y
        }else{
          arr[i]=0
        }
         sum2+=arr[i]
      }
      if(sum2+x<sum1)
      console.log("YES")
      else
      console.log("NO")
      
    }