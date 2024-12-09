function countOccurrences(arr) {
    const frequency = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }
     let max=0
     let sum=arr.length
     for(let keys in frequency ){
       if(frequency[keys]>max)
       max = frequency[keys]
      
     }
    
     console.log(max)
     if (max>sum-max)
     return console.log("YES")
     else
     return  console.log("NO")
    
}

// Example Usage
const arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4,4,];
console.log(countOccurrences(arr)); // Output: { 1: 2, 2: 2, 3: 3, 4: 3 }


