function maximumInArray(N,arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
      if(max<arr[i])
        max=arr[i]
    }
    console.log(max)
}
