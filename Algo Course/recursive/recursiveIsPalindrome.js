// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  if(str.length === 0) return true;
  var boolean = false;
  if(str[0] == str[str.length-1]){
    boolean = true
  }else{
    return false;
  }
  return isPalindrome(str.slice(1,str.length-1))
}
var word = 'amanaplanacanalpanama'
console.log(isPalindrome(word))
