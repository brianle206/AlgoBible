/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the
length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100,200,300] is a maxSubarraySumof the original array, but [100, 300] is not.
*/

// maxSubarraySum([100,200,300,400], 2) 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20],4) 39\
// maxSubarraySum([-3,4,0,-2,6,-1], 2) 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) 5
// maxSubarraySum([2,3],3) null

function maxSubarraySum(arr, num){
  if(arr.length < num) return null;
  var start = 0;
  var slide = num-1;
  var max = 0;
  var temp =0;
  for(var i = start; i<=slide; i++){
    temp+=arr[i]
  }
  while(slide != arr.length){
    if(temp>max){
      max = temp;
    }
    temp -= arr[start];
    start++
    slide++
    temp += arr[slide]
  }
  return max;
}

// console.log(maxSubarraySum([100,200,300,400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));
