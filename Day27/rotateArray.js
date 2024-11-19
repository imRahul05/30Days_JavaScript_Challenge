class Solution {
    rotateArr(arr, d) {
        // Handle empty array case
        if (arr.length === 0) return;
        
        // Ensure d is within array bounds and is non-negative
        d = ((d % arr.length) + arr.length) % arr.length;
        
        // Reverse the first d elements
        this.reverse(arr, 0, d - 1);
        
        // Reverse the remaining elements from d to the end
        this.reverse(arr, d, arr.length - 1);
        
        // Reverse the entire array
        this.reverse(arr, 0, arr.length - 1);
    }
    
    reverse(arr, start, end) {
        while (start < end) {
            // Swap elements at start and end
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}
