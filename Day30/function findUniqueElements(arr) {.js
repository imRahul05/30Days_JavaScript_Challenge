function findUniqueElements(arr) {
    const freq = {};  
    const unq = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];        
       if (freq[element]) {
           freq[element]++;
        } else {
            freq[element] = 1;
        }
    }
    for (let key in freq) {
        if (freq[key] === 1) {
            unq.push(Number(key));
        }
    }

    return unq;
}
const arr = [1, 2, 3, 2, 4, 5, 1, 6, 1];
console.log(findUniqueElements(arr)); 


function blueRedBoard(grid){
    // Write code here
    let lastColor='';
    for(let i=0;i<8;i++){
      if(grid[i].filter(cell=>cell!=='R').length===0){ 
        lastColor = 'R';
      }
    }
    for(let j=0;j<8;j++){
      if(grid.filter(i=>i[j]!=='B').length===0){ 
        lastColor = 'B';
      }
    }
    console.log(lastColor) ;
  }

  const grid1 = [
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
    ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
  ];
  
  const grid2 = [
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
    ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
  ];
  
  console.log(blueRedBoard(grid1)); // Output: 'R'
  console.log(blueRedBoard(grid2)); // Output: 'B'





  function frequencyDrome(str) {
    const len = str.length;
    const mid = Math.floor(len / 2);
  
    // Handle odd length strings
    const firstHalf = str.slice(0, mid);
    const secondHalf = str.slice(len % 2 === 0 ? mid : mid + 1);
  
    // Create frequency maps for both halves
    const firstHalfFreq = {};
    const secondHalfFreq = {};
  
    for (const char of firstHalf) {
      firstHalfFreq[char] = (firstHalfFreq[char] || 0) + 1;
    }
  
    for (const char of secondHalf) {
      secondHalfFreq[char] = (secondHalfFreq[char] || 0) + 1;
    }
  
    // Compare frequencies
    for (const char in firstHalfFreq) {
      if (firstHalfFreq[char] !== secondHalfFreq[char]) {
        return "No";
      }
    }
  
    for (const char in secondHalfFreq) {
      if (secondHalfFreq[char] !== firstHalfFreq[char]) {
        return "No";
      }
    }
  
    return "Yes";
  }