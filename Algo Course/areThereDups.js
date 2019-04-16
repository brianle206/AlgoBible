/*
Implement a function called "areThereDuplicates" which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern or the multiple pointer patterns.
*/

// Frequency counter
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
// My Solution
function areThereDuplicates() {
    let dup = false;
    let start = 0;
    let pointer = 1
    console.log(arguments.length)
    while(pointer != arguments.length){

        if(arguments[start] != arguments[pointer]){
          pointer++
        }
        if(arguments[start] == arguments[pointer]){
          return true;
        }
        if(pointer == arguments.length-1){
          start++;
          pointer = start +1
        }
    }
    return dup;
}

//Multiple Counter Solution
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
//Single line Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates('a','b','c','a'));
