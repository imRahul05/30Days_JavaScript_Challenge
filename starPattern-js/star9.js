function star(n){

    for(let i=1;i<=n;i++){
      temp=''

      for(let j=i;j<=n-1;j++){
          temp+=" "
      }

      for(let j=1;j<=i;j++){

        if(j!=i)
        temp+="* "
      }
      temp=temp+'*'
     console.log(temp)
    }
  
  }
  
  
  
  star(9)