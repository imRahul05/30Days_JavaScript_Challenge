function reverseOdds(N, A){
    //write code here
    let temp=[]
    let count=0
    for(let i=N-1;i>=0;i--){
      if(A[i]%2!==0){
      temp[count]=A[i]
      count++
      }
    }
    console.log(count)
    console.log(temp.join(" "))
}
