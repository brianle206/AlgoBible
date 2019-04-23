/*
Write a function called linearSearch which accepts an array and a value, and returns the index at which the vlaue exists. If the value does
not exist in the array, return -1.
*/

function linearSearch(arr,val){
  for(var i in arr){
    if(arr[i] === val) return i;

  }
  return -1;
}

console.log(linearSearch([10,15,20,25,30],15));
