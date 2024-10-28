function newYorkSkylines(N,arr){
    //write your code here
    let score =[]
    for(let i =0;i<N;i++){
      if ((i === 0 && arr[i] > arr[i + 1]) || (i === N - 1 && arr[i] > arr[i - 1])) 
      score.push(1)
      
      else if (i > 0 && i < N - 1 && arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) 
      score.push(2)
      
      else if(i>0&&i<N-1&&arr[i]>arr[i-1]||arr[i]>arr[i+1])
      score.push(1)
      
      else if(i>0&&i<N-1&&arr[i]<arr[i-1]&&arr[i]<arr[i+1])
      score.push(0)
      
      else
      score.push(0)
    }
    console.log(score.join(" "))
  }