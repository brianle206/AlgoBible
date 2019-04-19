/*
write a function called minSubArrayLen which accepts twp parameters - an array of positive integers and a positive interger.
This function should return the minimal length of contiguous subarray of which the sum is greater than or equal to the integer passed
to the function. If there isn't one , return 0 instead.
*/

//minSubArrayLen([2,3,1,2,4,3], 7) 2
//minSubArrayLen([2,1,6,5,4], 9) 2
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) 1
//minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) 5
//minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) 0

/*
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
*/

function minSubArrayLen(arr, num){
  var start = 0;
  var pointer = 1;
  var temp = arr[start]+arr[pointer];
  var counter = 2;
  while(pointer != arr.length){
    console.log(start, pointer)
    if(arr[pointer] > num){
      return 1;
    }
    if(temp < num && counter == arr.length-1){
      return 0;
    }
    if(temp < num){
      pointer++;
      counter++;

      temp+=arr[pointer];
      console.log(temp)
      temp-=arr[start];
      console.log(temp)
      start++
      counter--
    }
    if(temp >= num){
      return counter;
    }

  }
  return counter;
}

console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
