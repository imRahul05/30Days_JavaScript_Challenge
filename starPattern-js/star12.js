

function star(n){
    for(let i=1;i<=n-1;i++){
      temp=''
      
      for(let j=1;j<=i;j++)
      temp=temp+"*"
      
      for(let j=1;j<=(n-i)*2-1;j++)
       temp = temp+" "
      
      
      
      for(let j=1;j<=i;j++)
      temp=temp+"*"
      
      console.log(temp)
    }
  //---------------------
      temp=''
      for(let j=1;j<=2*n-1;j++)
      temp=temp+"*"
      
      console.log(temp)
      
    //--------------------------
    
     for(let i=n-1;i>=1;i--){
      temp=''
      
      for(let j=i;j>=1;j--)
      temp=temp+"*"
      
      for(let j=(n-i)*2-1;j>=1;j--)
       temp = temp+" "
      
       for(let j=i;j>=1;j--)
       temp=temp+"*"
      console.log(temp)
    }
  
      
  }
  
  
  star(9)