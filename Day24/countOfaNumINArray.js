function countOfX(N,X,A) {
    // Write code here
    let count=0;
    for(let i=0;i<N;i++){
      if(X==A[i])
      count++;
    }
    if(count==0)
    console.log(-1)
    else{
      console.log(count)
    }
}
