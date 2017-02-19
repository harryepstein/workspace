console.log("a test")
let putItHere = document.getElementById('output-target')





console.log(putItHere);




let STUFF = "STUFF"






document.body.addEventListener('mouseover', function(event){
   if (event.srcElement.firstChild.data === "h1") {
    putItHere.innerHTML += `Your mouse is over the header`
  }
  else putItHere.innerHTML += `You are in ${event.srcElement.firstChild.data}`;
})
