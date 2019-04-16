function sameFrequency(num1, num2){
    num1 = num1.toString().split("")
    num2 = num2.toString().split("")
    if(num1.length != num2.length){
        return false;
    }
    let dic = {};
    for(var i = 0; i < num1.length; i++){

        if(dic[num1[i]]){
            dic[num1[i]] += 1
        }else{
            dic[num1[i]] = 1

        }
    }
    for(var i = 0; i < num2.length; i++){
        if(dic[num2[i]]){
            dic[num2[i]] -= 1
        }else{
            return false;
        }
    }
    Object.values(dic).forEach(function(item){
        if(item !== 0){
            return false;
        }
    })
    console.log(dic);
    return true;
}

console.log(sameFrequency(34,14));

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
