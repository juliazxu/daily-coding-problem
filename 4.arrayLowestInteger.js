// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space. 
// In other words, find the lowest positive integer that does not exist in the array. 
// The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

// Approach 1 (O(nlogn + n) time)
// Sort the array (this is nlogn time)
// Start where the array value is 1 (if it exists), then iterate through the array
// if there is a missing value, return missing value
// if you reach the end of the array, then return last item + 1
// if 1 does not exist, then return 1

// Approach 2 (linear time, constant space)
// iterate through the array
// check if it is a negative number. if not, assign arr[x] = x
// check if it overrides an existing number. If so, take that existing number and assign arr[x] = x
// continue until there are no more overrides, then iterate till end of array
// after done, then check to see if !arr[x] from beginning of array
// if none, then add + 1 to last item in array