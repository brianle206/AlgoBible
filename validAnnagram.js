function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1.length != str2.length) false
  var dic1 = {}

  for(let val in str1){
      if(dic1[str1[val]]){
          dic1[str1[val]] += 1;
      }else{
          dic1[str1[val]] = 1
      }
  }
  for(let val in str2){
      if(dic1[str2[val]]){
          dic1[str2[val]] -= 1;
      }else{
          return console.log(false)
      }
  }
  return console.log(true)
}

validAnagram('racss', 'cassr')
