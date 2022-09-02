window.addEventListener('load', function () {

var maxLength = document.getElementById("message").maxLength;
  
var myText = document.getElementById("message");
var wordCount = document.getElementById("count");

wordCount.innerText = 0 + "/"+maxLength;


myText.addEventListener("keyup",function(){
	var characters = myText.value.split('');
  wordCount.innerText = characters.length + "/"+maxLength;
});


})