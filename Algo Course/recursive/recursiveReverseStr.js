function reverse(str){
  var rev = ''
  if(str.length === 0) return str;
  rev += str[str.length-1]
  console.log(rev)
  return  rev += reverse(str.slice(0,str.length-1))
}

var word = "this string";
console.log(reverse(word))

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
