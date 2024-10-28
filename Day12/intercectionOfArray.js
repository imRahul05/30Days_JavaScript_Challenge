function intersectionOfArray(N, arr1, arr2){
    let com = []; 
    let str="";
       for (let i = 0; i < N; i++) {
           for (let j = 0; j < N; j++) {
               if (arr1[i] === arr2[j]) {
                   let copy = false;
                   for (let k = 0; k < com.length; k++) {
                       if (com[k] === arr1[i]) {
                           copy = true; 
                           break; 
                       }
                   }
                   if (!copy) {
                       com.push(arr1[i]); 
                       str=arr1[i]
                   }
               }
           }
       }
       console.log(str)
   }
   ``