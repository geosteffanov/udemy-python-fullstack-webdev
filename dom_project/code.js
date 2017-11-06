console.log("I am connected.")


var states = ["", "X", "O"];

function toggleState(currentState){
	return states[(states.indexOf(currentState) + 1) % 3];
}

ids = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];


// function changeCell(event) {

// }

for(var i = 0; i < ids.length; i++){
	element = document.getElementById(ids[i]);
	element.addEventListener("click", function(event) {
		target = document.getElementById(event.target.id);
		target.innerHTML = toggleState(target.innerHTML);
	});
}

button = document.getElementById("reset_button");
button.addEventListener("click", function(){
	for(var i = 0; i < ids.length; i++){
		element = document.getElementById(ids[i]).innerHTML = "";
	}	
});
