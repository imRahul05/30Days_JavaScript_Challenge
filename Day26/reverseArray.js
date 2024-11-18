class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // your code here
       
        let x=0;
        for(let i=0;i<arr.length;i++){
            x=arr[i]
            arr[i]=arr[arr.length-1-i]
            arr[arr.length-1-i]=x
            
        }
        
        return arr
    }
}
// Output will be [4, 0, 0, 5, 3]

// Test the function
let solution = new Solution();
let arr = [3, 5, 0, 0, 4];
console.log(solution.reverseArray(arr));  // Output will be [4, 0, 0, 5, 3]
