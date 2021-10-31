console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function mouseOver() {
	document.getElementById("catPic")
	alert("You're doing great!")
  }