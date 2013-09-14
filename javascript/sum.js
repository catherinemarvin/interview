// Write a function sum() that accepts any number of arguments and returns their sum.

function sum() {
  var i, l, result = 0;
  for (i = 0, l = arguments.length; i < l; i++) {
    result += arguments[i];
  }
  return result;
}
sum(1,2,3); // 6