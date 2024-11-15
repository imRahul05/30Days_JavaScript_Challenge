// function patternPrinting(N){
// //write your code here
//   for(let i=1;i<=N;i++){
//     let bag=""
//     let bag2=""
//     for(let j=0;j<i;j++){
     
//         bag += "*";
//       if (j < i - 1) { 
//         bag += "_";
//       }
//     }
//     // console.log(bag)
//     if (i < N) {
//       bag += "_";
//     }
//     for(let x=i;x<N;x++){
//       bag+="#"
//       if(x<N-1)
//       bag+="_"
       
//     }
    
//     console.log(bag)
//   }
// }


function patternPrinting(N){
  
    for(let i=N;i>0;i--){
      
      let bag=""
      for(let j=0;j<i;j++){
        bag+="*"
        
        if(j<N-1)
        bag+=" "
      }
      
      for(let x=i;x<N;x++){
        bag+=" "
        
        if(x<N-1)
         bag+=" "
      }
      
      console.log(bag)
    }
  //write your code here
  }
  
  patternPrinting(5)