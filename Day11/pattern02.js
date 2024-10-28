function nestedReversePattern(num) {
    // Write code here
    let bag =""
    for(let j=1;j<=num;j++){
       for(let i=num;i>=1;i--){
      bag+= i +" "
    }
    console.log(bag)
    bag=""
    }
}
