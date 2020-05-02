/* 
Elementary School if age is below 13
Secondary School if age is between 13 and 18 (both inclusive)
Lighthouse Labs in all other cases.
*/

function whichSchool (age) {// 22
  if (age < 13) { 
    return("You should go to Elementary School");
  }
  else if (age >= 13 && age <= 18) {
    return("You should go to Secondary School");
  }
  else {
    return("You should go to Lighthouse Labs");
  }  
}

// How you call a function ->  function name (data)
// whichSchool(11)

// console.log("I am 35. Which school should I go to?");
// console.log(whichSchool(35));
// console.log("I am 8. Which school should I go to?");
// console.log(whichSchool(8));
// console.log("I am 14. Which school should I go to?");
// console.log(whichSchool(14));


function add (num1, num2) {
  return num1 + num2
}

function substract (num1) { 
  return add(4, 9) - num1
}

console.log('subtract function call', substract(4))



var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}