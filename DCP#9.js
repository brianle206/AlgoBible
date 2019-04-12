/*
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

function sum(arr){
  let sum = 0
  if(arr.length/2 > 1){
    for(var i = 0; i< arr.length; i++){
      sum+= arr[i];
      i++;
    }
  }else{
    for(var i = 0; i <arr.length; i++){
      sum+= arr[i];
      i+=2
    }
  }

  return sum;
}

let arr = [2,4,6,2,5]
let arr2 = [5,1,1,5]

console.log(sum(arr2))
