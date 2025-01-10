var countPrimes = function(n) {
    let count = 0;
    let iterations=0
    function isPrime(num) {
        if (num < 2)
        return false;
        for (let i = 2; i<=Math.sqrt(num); i++) {
           iterations++
            if (num % i === 0) {
                return false;
            }
           
        }
        return true;
    }

    for (let j = 2; j < n; j++) {
        if (isPrime(j)) {
            count++; 
        }
    }
  console.log(iterations)
    return count;
}

console.log(countPrimes(10000))


var countPrime = function(n) {
    let count = 0;
    let iterations=0
    function isPrime(num) {
        if (num < 2)
        return false;
        for (let i = 2; i<=Math.floor(num/2); i++) {
           iterations++
            if (num % i === 0) {
                return false;
            }
           
        }
        return true;
    }

    for (let j = 2; j < n; j++) {
        if (isPrime(j)) {
            count++; 
        }
    }
  console.log(iterations)
    return count;
}

console.log(countPrime(10000))
