function countSuchPair(N,arr){
    //write your code here
    let count = 0; 
      for (let i = 0; i < N; i++) {
          for (let j = i + 1; j < N; j++) {
              let sum = arr[i] + arr[j]; 
              let flag = 1; 
              if (sum < 2) {
                  flag = 0; 
              }
              else {
                  for (let k = 2; k * k <= sum; k++) {
                      if (sum % k === 0) {
                          flag = 0;
                          break; 
                      }
                  }
              }
              if (flag === 1) {
                  count++; 
              }
          }
      }
      console.log(count);
  }