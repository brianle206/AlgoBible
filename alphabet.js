/* This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.*/


function StrDecode(string){
  if(string.length <= 1){ return console.log(splitStr(string))}
  var nums = string.split("")
  var words = [];
  var long = ""
  let keep = false
  while(keep){
    nums.forEach((item) => long = long.concat(splitStr(item)))

  }

  console.log(long)

  console.log(makeAlpha())



  // nums.forEach((item)=> words.push(splitStr(item)));
  // // console.log(strings)
  // strings.forEach((item)=>words.push(getKeyByValue(charArray, parseInt(item))));
  // console.log(charArray)
  console.log(nums)
  return console.log(words);


}
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function makeAlpha(){
  var a = 97;
  var charArray = {};
  for (var i = 0; i<26; i++)
    charArray[String.fromCharCode(a + i)] = i + 1;
    return charArray;
}
function splitStr(string){
  var alpha = makeAlpha();
  const reg = /[1-9]/;
  const reg1 = /1[0-9]/;
  const reg2 = /2[0-6]/;
  var count = 0
  if(string.match(reg)){
    return getKeyByValue(alpha, parseInt(string));
  }else if (string.match(reg1)) {
    return getKeyByValue(alpha, parseInt(string));
  }else if(string.match(reg2)){
    return getKeyByValue(alpha, parseInt(string));
  }



}
StrDecode("1111");
