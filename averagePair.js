/*
Write a function called averagePair. \
Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.

*/
function averagePair(arr, avg){
  let boolean = false;
  let start = 0;
  let pointer = arr.length-1;
  if(arr.length < avg){
      return false;
  }
  while(start != arr.length-1){
    var math = (arr[start]+arr[pointer])/2;
    console.log(math);
    if(math == avg){
      boolean =  true;
    }
    if(math > avg){
      pointer --
    }else{
      start++
    }
  }

  return boolean;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 6.5));
