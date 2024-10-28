function divisibilityAndLoops(a,b,x){
    //write your code here
    let sum=0;
    for(let i=a;i<=b;i++){
      if(i%x===0)
      sum+=i
    }
    console.log(sum)
  }