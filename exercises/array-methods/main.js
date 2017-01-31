console.log("test")
let colors = [
"red",
"blue",
"green",
"yellow",
"teal",
"purple"
]
let integers = [11, 12, 13, 15, 18, 19, 199, 393, 94];
colors.forEach(function(item, index){
  var newColorString = "I like this color" + item;
  console.log("newColorString", newColorString, index);
})
let reverse = colors.map(function(color){
  return color.split("").reverse().join()};
})
let chainResult = integers.sort{function(a, b){return a -b}}
