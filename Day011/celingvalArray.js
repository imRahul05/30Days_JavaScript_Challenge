function averageOfAll(n, arr){
    //write code here
    let sum=0
    let avg=0
     for(let i=0;i<n;i++){
      sum+=arr[i]
    }
    avg=sum/n;
    console.log(Math.ceil(avg))
}
