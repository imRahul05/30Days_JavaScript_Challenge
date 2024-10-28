function vPattern(N){
    //write your code here
    let x = 2*N-2
    for(let i=0;i<N;i++){
      let res=""
      
      for(let j=0;j<i;j++){
        res = res + " "
      }
      res+="\\"
      for(j=1;j<=x;j++){
        res+=" "
      }
      res+="/"
      x=x-2
      console.log(res)
    }
  }
  
  
  