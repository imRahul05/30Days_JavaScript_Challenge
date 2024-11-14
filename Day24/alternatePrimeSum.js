function alternatePrimeSum(num){
	// Write your code here
	let arr = []; 

for (let number = 1; number <= num; number++) {
    if (number > 1) { 
        let isPrime = true;

        for (let i = 2; i <= number / 2; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            arr.push(number);
        }
    }
}

// console.log(arr);
let sum=0;
for(let i=0; i<arr.length;i=i+2){
  sum= sum+ arr[i]
}


console.log(sum)

	  
	
}
