function star(n){
    
    for(let i=n;i>=1;i--){
       temp=''

       for(let j=i;j>1;j--){
          temp+=" "
       }

       for(let j=1;j<=2*(n-i)+1;j++){
        temp+="*"
       }
       console.log(temp)
    }
     


    for(let i=1;i<=n;i++){
        temp=''
 
        for(let j=1;j<i;j++){
           temp+=" "
        }
 
        for(let j=1;j<=2*(n-i)+1;j++){
         temp+="*"
        }
        console.log(temp)
     }
}



star(10)