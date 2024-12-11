function checkBasket(N,B){
    // write code here
    let same= B[0]
    let bool = false
    for(let i=1;i<N;i++){
      if(same!==B[i])
      bool = true
    }
    if(bool===true)
    console.log("Mixed Basket")
    else
    console.log("Single Type")
}
