
function tictactoe() {

	var cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9;
	cell1 = document.getElementById("cell1").value;
	cell2 = document.getElementById("cell2").value;
	cell3 = document.getElementById("cell3").value;
	cell4 = document.getElementById("cell4").value;
	cell5 = document.getElementById("cell5").value;
	cell6 = document.getElementById("cell6").value;
	cell7 = document.getElementById("cell7").value;
	cell8 = document.getElementById("cell8").value;
	cell9 = document.getElementById("cell9").value;

	if ((cell1 == 'x' || cell1 == 'X') && (cell2 == 'x' ||
		cell2 == 'X') && (cell3 == 'x' || cell3 == 'X')) {
		document.getElementById('print')
        .innerHTML = "Player X won";
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player X won');
	}
	else if ((cell1 == 'x' || cell1 == 'X') && (cell4 == 'x' ||
		cell4 == 'X') && (cell7 == 'x' || cell7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;

		window.alert('Player X won');
	}
	else if ((cell7 == 'x' || cell7 == 'X') && (cell8 == 'x' ||
		cell8 == 'X') && (cell9 == 'x' || cell9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		window.alert('Player X won');
	}
	else if ((cell3 == 'x' || cell3 == 'X') && (cell6 == 'x' ||
		cell6 == 'X') && (cell9 == 'x' || cell9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		window.alert('Player X won');
	}
	else if ((cell1 == 'x' || cell1 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell9 == 'x' || cell9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		window.alert('Player X won');
	}
	else if ((cell3 == 'x' || cell3 == 'X') && (cell5 == 'x' ||
		bcell == 'X') && (cell7 == 'x' || cell7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
    	document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player X won');
	}
	else if ((cell2 == 'x' || cell2 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell8 == 'x' || cell8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player X won');
	}
	else if ((cell4 == 'x' || cell4 == 'X') && (cell5 == 'x' ||
		cell5 == 'X') && (cell6 == 'x' || cell6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player X won');
	}

	else if ((cell1 == '0' || cell1 == '0') && (cell2 == '0' ||
		cell2 == '0') && (cell3 == '0' || cell3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell1 == '0' || cell1 == '0') && (cell4 == '0' ||
		cell4 == '0') && (cell7 == '0' || cell7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell7 == '0' || cell7 == '0') && (cell8 == '0' ||
		cell8 == '0') && (cell9 == '0' || cell9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell3 == '0' || cell3 == '0') && (cell6 == '0' ||
		cell6 == '0') && (cell9 == '0' || cell9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell5").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell1 == '0' || cell1 == '0') && (cell5 == '0' ||
		cell5 == '0') && (cell9 == '0' || cell9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell3 == '0' || cell3 == '0') && (cell5 == '0' ||
		cell5 == '0') && (cell7 == '0' || cell7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell4").disabled = truecell
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell2 == '0' || cell2 == '0') && (cell5 == '0' ||
		cell5 == '0') && (cell8 == '0' || cell8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell4").disabled = true;
		document.getElementById("cell6").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell4 == '0' || cell4 == '0') && (cell5 == '0' ||
		cell5 == '0') && (cell6 == '0' || cell6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("cell1").disabled = true;
		document.getElementById("cell2").disabled = true;
		document.getElementById("cell3").disabled = true;
		document.getElementById("cell7").disabled = true;
		document.getElementById("cell8").disabled = true;
		document.getElementById("cell9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((cell1 == 'X' || cell1 == '0') && (cell2 == 'X'
		|| cell2 == '0') && (cell3 == 'X' || cell3 == '0') &&
		(cell4 == 'X' || cell4 == '0') && (cell5 == 'X' ||
		cell5 == '0') && (cell6 == 'X' || cell6 == '0') &&
		(cell7 == 'X' || cell7 == '0') && (cell8 == 'X' ||
		cell8 == '0') && (cell9 == 'X' || cell9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

function tictactoe_2() {
	location.reload();
	document.getElementById('cell1').value = '';
	document.getElementById("cell2").value = '';
	document.getElementById("cell3").value = '';
	document.getElementById("cell4").value = '';
	document.getElementById("cell5").value = '';
	document.getElementById("cell6").value = '';
	document.getElementById("cell7").value = '';
	document.getElementById("cell8").value = '';
	document.getElementById("cell9").value = '';

}

flag = 1;
function tictactoe_3() {
	if (flag == 1) {
		document.getElementById("cell1").value = "X";
		document.getElementById("cell1").disabled = true;
	    flag=0;
	}
	else {
		document.getElementById("cell1").value = "0";
		document.getElementById("cell1").disabled = true;
		flag = 1;
	}
}

function tictactoe_4() {
	if (flag == 1) {
		document.getElementById("cell2").value = "X";
		document.getElementById("cell2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell2").value = "0";
		document.getElementById("cell2").disabled = true;
		flag = 1;
	}
}

function tictactoe_5() {
	if (flag == 1) {
		document.getElementById("cell3").value = "X";
		document.getElementById("cell3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell3").value = "0";
		document.getElementById("cell3").disabled = true;
		flag = 1;
	}
}

function tictactoe_6() {
	if (flag == 1) {
		document.getElementById("cell4").value = "X";
		document.getElementById("cell4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell4").value = "0";
		document.getElementById("cell4").disabled = true;
		flag = 1;
	}
}

function tictactoe_7(){
	if (flag == 1) {
		document.getElementById("cell5").value = "X";
		document.getElementById("cell5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell5").value = "0";
		document.getElementById("cell5").disabled = true;
		flag = 1;
	}
}

function tictactoe_8() {
	if (flag == 1) {
		document.getElementById("cell6").value = "X";
		document.getElementById("cell6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell6").value = "0";
		document.getElementById("cell6").disabled = true;
		flag = 1;
	}
}

function tictactoe_9() {
	if (flag == 1) {
		document.getElementById("cell7").value = "X";
		document.getElementById("cell7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell7").value = "0";
		document.getElementById("cell7").disabled = true;
		flag = 1;
	}
}

function tictactoe_10() {
	if (flag == 1) {
		document.getElementById("cell8").value = "X";
		document.getElementById("cell8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell8").value = "0";
		document.getElementById("cell8").disabled = true;
		flag = 1;
	}
}

function tictactoe_11() {
	if (flag == 1) {
		document.getElementById("cell9").value = "X";
		document.getElementById("cell9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("cell9").value = "0";
		document.getElementById("cell9").disabled = true;
		flag = 1;
	}
}
