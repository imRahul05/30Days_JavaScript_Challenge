function maximumInArray(N,arr){
    //write code here
    let flag=0;
    let max = arr[0];
    for(let i=0;i<N;i++){
      if(arr[i]>max)
      max= arr[i]
    }
    console.log(max)
}