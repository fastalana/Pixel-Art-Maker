// Select color input
let colorPicker = document.getElementById('colorPicker');

// Select size input
let sizePicker = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let table = document.getElementById('pixelCanvas');

makeGrid(height, width); //sets a default grid of 1x1


//creates the grid when the user clicks on submit
document.querySelector('form').addEventListener('submit', function(event){ 
	event.preventDefault();
	table.firstChild.remove(); //removes the initial default grid
	makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	for(let x = 0; x < height.value; x++){
		let row = table.insertRow(x);
		for(let y = 0; y < width.value; y++){
			let cell = row.insertCell(y);
			cell.addEventListener('click', function(event){
				cell.style.backgroundColor = colorPicker.value;
			});
		}
	}
}

