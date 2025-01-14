// function star(n) {
//     const container = document.getElementById('star-container');
//     let temp = '';

//     for (let i = 1; i <= n - 1; i++) {
//         temp = '';
//         for (let j = 1; j <= i; j++) temp += '*';
//         for (let j = 1; j <= (n - i) * 2 - 1; j++) temp += ' ';
//         for (let j = 1; j <= i; j++) temp += '*';
//         container.innerHTML += temp + '\n';
//     }

//     temp = '';
//     for (let j = 1; j <= 2 * n - 1; j++) temp += '*';
//     container.innerHTML += temp + '\n';

//     for (let i = n - 1; i >= 1; i--) {
//         temp = '';
//         for (let j = 1; j <= i; j++) temp += '*';
//         for (let j = 1; j <= (n - i) * 2 - 1; j++) temp += ' ';
//         for (let j = 1; j <= i; j++) temp += '*';
//         container.innerHTML += temp + '\n';
//     }
// }

// star(5);

function findCommonElements(arr1, arr2) {
    let i=0;                 
    let j=arr2.length-1;   
    const result=[];        
  
    while(i<arr1.length&&j>= 0){
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);  
        i++;
        j--;
      } else if (arr1[i] < arr2[j]) {
        i++;                   
      } else {
        j--;                   
      }
    }
  
    return result;
  }