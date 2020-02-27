// Select color input
let colorPicker = document.getElementById('colorPicker');

// Select size input
let sizePicker = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');

makeGrid(height, width); //sets a default grid of 1x1

sizePicker.addEventListener('click', function(event){
	event.preventDefault();
	table.firstChild.remove(); //removes the initial grid?
	makeGrid(height, width);
	// console.log(event + sizePicker.value);
	// console.log(e + "test");
	// console.log(height.value, width.value);
	// console.log(colorPicker.value);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	// console.log(height.value, width.value);
	// let row = table.insertRow(0);
	// let cell = row.insertCell(0);
	for(let x = 0; x < height.value; x++){
		let row = table.insertRow(x);
		for(let y = 0; y < width.value; y++){
			let cell = row.insertCell(y);
		}
	}


// Your code goes here!

}
