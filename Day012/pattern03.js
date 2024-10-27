function patternPrinting(N){
    //write your code here
     for(let row = 1;row<=N;row++){
       let str=""
       for(let col=1;col<=N;col++){
         if(row==1||col==1||col==N)
         str+= "*" + " "
         else
         str+= " " + " "
       }
       console.log(str)
     }
    
    }