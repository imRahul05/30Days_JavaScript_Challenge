function patternPrinting(N){
    //write your code here
     for(let r =0;r<N;r++){
       let str=""
       for(let c=0;c<N;c++){
         if(c<(N-r))
         str+= "*" 
         else
         str+= " "
         if(c<(N-1))
         str+=" "
       }
       console.log(str)
     }
    }