const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

/* console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
} */
packingList.push("garbage bags");
packingList.pop();
packingList.splice(-1, 0, "garbage bags", "garbage bins");
console.log("Kitchen stuff to pack:");
let i = 1;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;  
}


// function counter(num){
//   while(num > 0){
//     console.log('nuuua', num)
//     return counter(num-1)
//   }
// }

// counter(10)