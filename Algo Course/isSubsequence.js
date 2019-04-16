/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a
subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.

*/

// Example:
// isSubsequence('hello', 'hello world'); true
// isSubsequence('sing', 'sting'); true
// isSubsequence('abc', 'abracadabra'); true
// isSubsequence('abc', 'acb'); false


function isSubsequence(str1, str2){
  var dic = {};
  var str1Pointer = 0;
  for(var i = 0; i < str2.length; i++){
    if(str1[str1Pointer] == str2[i]){
      str1Pointer++
    }
    if(str1Pointer == str1.length){
      return true;
    }
  }
  return false;
}
console.log(isSubsequence('abc', 'abracadabra'));
