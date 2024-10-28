function applyBasicMaths(N,A){
    //write code here
   let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += A[i];
    }
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < N; i++) {
        let cur = A[i];
        let left = sum - cur; 
        if (left % 7 === 0) {
            if (cur < min) {
                min = cur; 
                minIndex = i;
            }
        }
    }
    console.log(minIndex);

}

