function SmallestandLargestofall(N, A) {
    // Write code here
    let max=A[0]
    let min=A[0]
    for(let i=1;i<N;i++){
      if(A[i]>max)
      max=A[i]
      
      if(A[i]<min)
      min=A[i]
      
    }
    
    console.log(min)
    console.log(max)
    
}