function alternatePrimeSum(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
      let flag = 1;
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          flag = 0; 
          break;
        }
      }
      if (flag === 1) {
        primes.push(i);
      }
    }
    let sum = 0;
    for (var i = 0; i < primes.length; i += 2) {
      sum += primes[i];
    }
  
    console.log(sum);
  }
  
  