console.log("I am connected.")
// create backend table
function createBackendTable(){
	var rows = 6;
	var cols = 7;
	var table = [];
	for (var row = 0; row < rows; row++){
		table[row] = [];
		for (var col = 0; col < cols; col++){
			table[row][col] = (("" + row) + col);
		}
	}
	return table;
}

var backend_table = createBackendTable();


//  create  html table
function createTable() {
	var rows = 6;
	var cols = 7;
	$('#all').append(table_html);
	for (var row=0; row < table_rows; row++){
		var row_id  = "row_" + row;
		$('#table').append('<tr id="' + row_id + '"></tr>');
		for (var col=0; col < table_cols; col++){
			element_id = ("cell_" + row) + col;
			$('#'+ row_id).append('<td id="' + element_id + '"></td>');
		}
	}
}
createTable();

function adjacentChips(last_y, last_x) {
	var cols = 7;
	var rows = 6;
	// downwards checking
		for (var i = -3; i < 1; i++) {
			if ((last_y + i >= 0) && (last_y + i + 3 < rows)) {
				cell_1 = backend_table[last_y + i][last_x];
				cell_2 = backend_table[last_y + i + 1][last_x];
				cell_3 = backend_table[last_y + i + 2][last_x];
				cell_4 = backend_table[last_y + i + 3][last_x];

				if (cell_1 == cell_2 && cell_2 == cell_3 && cell_3 == cell_4)
					return true;
			}
		}
	// rightwards checking
		for (var i = -3; i < 1; i++) {
			if ((last_y + i >= 0) && (last_x + i + 3 < cols)) {
				cell_1 = backend_table[last_y][last_x + i];
				cell_2 = backend_table[last_y][last_x + i + 1];
				cell_3 = backend_table[last_y][last_x + i + 2];
				cell_4 = backend_table[last_y][last_x + i + 3];

				if (cell_1 == cell_2 && cell_2 == cell_3 && cell_3 == cell_4)
					return true;
			}
		}

		return false;
}


//  gather player info

// var player_one_id = prompt("Player one, what is your id?");
// var player_two_id = prompt("Player two, what is your id?");


// check if four adjacent chips in 6 x 7 array 

// add chip to the table

// add event listeners to each table column

// keep track of chips on rows

// prompt player

// main loop
