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
  }s