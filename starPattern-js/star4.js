function star(n){
    for(let i=1;i<=n;i++){
    temp =''
    for(let j=1;j<=i;j++){
      temp+="*"
    }
    console.log(temp)
    }

    for(let i=1;i<n;i++){
        temp=''
        for(let j=i;j<n;j++){
            temp+="*"
        }

        console.log(temp)
    }
  }
  
  
  
  star(8)