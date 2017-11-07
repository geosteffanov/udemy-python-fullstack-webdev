console.log("Code connected.");

//  create  html table
function createTable() {
	console.log("Creating table");
	$('#all').append(table_html);
	for (var row = 0; row < table_rows; row++){
		var row_id  = "row_" + row;
		$('#table').append('<tr id="' + row_id + '"></tr>');
		for (var col=0; col < table_cols; col++){
			element_id = ("cell_" + row) + col;
			$('#'+ row_id).append('<td id="' + element_id + '"></td>');
			$('#' + element_id).css("background-color", "lightblue");
		}
	}
}

function changeColor(id, color) {
	$('#' + id).css("background-color", color);
}

var currentColor = "blue";


function cellClick(event) {
	var cell_id = event.target.id;
	var cell_row = cell_id[5];
	var cell_col = cell_id[6];

	var last_coloured = 5;
	var cell_in_column = $(('#cell_' +  last_coloured) + cell_col);
	while(last_coloured > -1) {
		var color = cell_in_column.css("background-color");
		if ((color != 'rgb(0, 0, 255)') && (color !== 'rgb(255, 0, 0)'))
			break;
			
		
		last_coloured = last_coloured - 1;
		cell_in_column = $(('#cell_' +  last_coloured) + cell_col);
	}

	// console.log(last_coloured);

	if (last_coloured == -1) {
		console.log("FULL");
		return false;
	}

	$(('#cell_' + last_coloured) + cell_col).css("background-color", currentColor);

	endGame = checkEndgame(last_coloured, cell_col);


	if(currentColor == "red"){
		currentColor = "blue";
	}
	else {
		currentColor = "red";
	}

	

	if (endGame){
		// alert("Game ended!");
		$('#prompt_player').html("Player " + currentPlayer + ", contratulations! You won!");
		// alert("Start a new game?");
		// startGame();
	}

	if (currentColor == "red") {
		currentPlayer = player_two_id;
	} else {
		currentPlayer = player_one_id;
	}
	$('#prompt_player').html("Player " + currentPlayer + ", it's your turn!");
}


function addEventListenersToCells() {
	for (var row = 0; row < table_rows; row++) {
		for (var col = 0; col < table_cols; col++) {
			cell = $('#cell_' + ('' + row) + col);
			cell.bind("click", cellClick);
		}
	}
}

function checkEndgame(last_coloured, cell_col){
	var endGame = false;
	// check downwards
	if (last_coloured < 3) {
			id_1 = ('#cell_' + (last_coloured)) + cell_col;
			id_2 = ('#cell_' + (last_coloured + 1)) + cell_col;
			id_3 = ('#cell_' + (last_coloured + 2)) + cell_col;
			id_4 = ('#cell_' + (last_coloured + 3)) + cell_col;

			cell_1 = $(id_1).css("background-color");
			cell_2 = $(id_2).css("background-color");
			cell_3 = $(id_3).css("background-color");
			cell_4 = $(id_4).css("background-color");



			if ((cell_1 == cell_2) && (cell_2 == cell_3) && (cell_3 == cell_4)){
				endGame =  true;
			}
	}

	// check sidewards
	for (var offset = -3; offset <= 0; offset ++) {
		start = parseInt(cell_col) + offset;
		if ((start >= 0) && ((start + 3) < table_cols)){
			id_1 = ('#cell_' + last_coloured) + (start)
			id_2 = ('#cell_' + last_coloured) + (start + 1);
			id_3 = ('#cell_' + last_coloured) + (start + 2);
			id_4 = ('#cell_' + last_coloured) + (start + 3);

			cell_1 = $(id_1).css("background-color");
			cell_2 = $(id_2).css("background-color");
			cell_3 = $(id_3).css("background-color");
			cell_4 = $(id_4).css("background-color");

			if ((cell_1 == cell_2) && (cell_2 == cell_3) && (cell_3 == cell_4)){
				endGame = true;	
			}
				
		}
	}

	return endGame;
}

function startGame() {
	for (var row = 0; row < table_rows; row ++){
		for (var col = 0; col < table_cols; col ++){
			var id = (('#cell_' + row) + col);
			$(id).css("background-color", "lightblue");
		}
	}

}