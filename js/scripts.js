// scripts.js

var n = prompt('Wysokość choinki = ');
var star;

function drawTree(n) {
	for (var i = 0 ; i < n ; i++) {
		var star = "";
		for (var j = 0 ; j <= i ; j++) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(n);

