// Create a function to determine if a number is odd or not

function isOdd(num) {
  if (!(num % 2 === 0))
    return true
 else 
    return false
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));

// More examples of the same solution

// function isOdd(num) {
//   if (num % 2 === 0)
//     return false
//  else 
//     return true
// }

// function isOdd(num) {
//   if (num % 2 === 0) return false
//   else return true
// }

  // function isOdd(num) {
//   return num % 2 === 0 ? false : true
// }