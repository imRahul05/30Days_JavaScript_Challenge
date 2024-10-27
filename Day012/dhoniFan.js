function dhoniFan(N,arr){
    //write your code here
     count = 0; 
      for (let i = 0; i < N; i++) {
          let seven = false;
          for (let j = i; j < N; j++) {
              if (arr[j] === 7) {
                  seven = true; 
              }
              if (seven) {
                  count++; 
              }
          }
      }
      console.log(count);
  }