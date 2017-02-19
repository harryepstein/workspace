console.log("whatever");//That's just the test
let xhr = new XMLHttpRequest();//Create an instance of the getter thing to go get the JSON data later
let url = "./products.json"

xhr.open("GET", "products.json");
xhr.send();
console.log(xhr);
xhr.addEventListener("progress", someFunction);
 function someFunction(event){

  var data = JSON.parse(event.target.responseText);
  console.log(data);
 };
/***************************************
THIS IS WHERE THE NEWLY OBTAINED DATA IS PLACED
***************************************/
for (var i = data.length - 1; i >= 0; i--) {
 console.log( data[i]);
}
