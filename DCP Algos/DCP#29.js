/*


This problem was asked by Google.

The edit distance between two strings refers to the minimum number of character insertions, deletions, and substitutions required to change one string to the other. For example, the edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them.

*/
function difference(str1, str2){
  var counter = 0;
  for(var i = 0; i < str2.length; i++){
    if(str1[i] != str2[i]){
      counter ++
    }
  }
  // if(str2.length > str1.length){
  //   counter += str2.length - str1.length;
  // }
  // if(str1.length > str2.length){
  //   counter += str1.length - str2.length;
  // }
  return counter;
}

console.log(difference('kitten', 'sitting'))
