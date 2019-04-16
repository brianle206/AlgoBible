/*
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

let scheduler = setTimeout(function(){
  console.log("hello world");
}, 5000);

scheduler;
