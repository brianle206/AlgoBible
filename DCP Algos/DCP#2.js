/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/
function uber(arr){
  var getback = [];
  for(var i = 0; i< arr.length; i++){
    for(var x = 0; x < arr.length; x++ ){
      if(x==i){
        continue;
      }
      else if(!getback[i]){
        getback.push(arr[x]);
      }
      else{
        getback[i] = getback[i] * arr[x];
      }
    }
  }
  return console.log(getback);
}

function uber2(arr){
  var getback= [];
  for(var i = 0; i<arr.length; i++){
    getback.push(arr.reduce((total, amount) => total = total * amount)/arr[i])
  }
  return console.log(getback);
}


var arr = [1,2,3,4,5];
var arr2 = [3,2,1]
console.log(arr.reduce((total, amount) => total = total * amount))
uber(arr2);
uber2(arr2);
