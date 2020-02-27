// Select color input
let colorPicker = document.getElementById('colorPicker');

// Select size input
let sizePicker = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');

sizePicker.addEventListener('click', function(event){
	event.preventDefault();
	console.log(event + sizePicker.value);
	// console.log(e + "test");
	console.log(height.value, width.value);
	console.log(colorPicker.value);
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {

// Your code goes here!

}
