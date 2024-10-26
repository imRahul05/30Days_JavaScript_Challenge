function patternPrinting(N) {
    // Write code here
    let str =""
    for(let i=1;i<=N;i++){
     for(let j=1;j<=i;j++){
     str+="*"
     }
    console.log(str)
    str=""
    }
}
