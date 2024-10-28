function identifyPrime(num) {
    // Write code here
    let flag = 1; 
    for (let j = 2; j * j <= num; j++) {
      if (num % j === 0)
        flag = 0; 
    }
    if (flag === 1) 
     console.log("Yes");
    else
    console.log("No")
}
