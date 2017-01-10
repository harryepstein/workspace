console.log("test");
/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/


function coinCounter (input) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;


//need to loop through the input until it equals zero
debugger
while ((input % .25) > 0){
  if (input > .25) {
  input -= .25;
  coinPurse.quarters += 1;
  }
  else
    break
}
//count some dimes
while (input % .10 > 0 ){
  if (input > .10) {
  input -= .10;
  coinPurse.dimes += 1;
  }
  else
    break
}
//count some nickles
while (input % .05 > 0){
  if (input > .05) {
  input -= .05;
  coinPurse.nickels += 1;
  }
  else
    break
}
//count some pennies
while (input % .01 > 0){
  if (input > .01) {
  input -= .01;
  coinPurse.pennies += 1;
  }
  else
    break
}
//display it all
console.log(coinPurse)
}
