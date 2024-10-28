function patternPrintingI(N) {
    // Write code here
    for(let row = 1;row<=N;row++){
      let str=""
      for(let col=1;col<=N;col++){
        if(row==1||col==1||row==N)
        str += "*" + " "
        
      }
      console.log(str)
    }
    
}
