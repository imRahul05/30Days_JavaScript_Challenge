function smallerThanLargest(N,arr){
    //write your code here
      let flag=0;
      let max = arr[0];
      for(let i=1;i<N;i++){
        if(arr[i]>max){
        max= arr[i]
        }
      }
      for(i = 0;i<N;i++){
        if(arr[i]<max){
          arr[i]=-1
        }
      }
      console.log(arr.join(" "))
    
  }