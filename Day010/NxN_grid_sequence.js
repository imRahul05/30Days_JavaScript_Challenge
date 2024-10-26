function patternOfN(N) {
    // Write code here
    let str=""
    let count =1;
    for(let i =1;i<=N;i++){
      for(let j=1;j<=N;j++){
        str+= count + " ";
        count++;
      }
      console.log(str)
      str = ""
    }
}