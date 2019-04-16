function uniqueValues(arr){
  let map = {};
  for(let val in arr){
    if(map[arr[val]]){
      map[arr[val]] += 1
    }else{
      map[arr[val]] = 1
    }
  }
  let count =0;
  Object.keys(map).forEach(function(item){
    count+=1
  });
  console.log(map)
  return console.log(count)
}

var stuff = [-1,1,2,2,2,4,5,6,7,12]

uniqueValues(stuff);
