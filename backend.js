var visited = []
//var request = require("request");
var baseUrl_1 = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=";
var baseUrl_2 = "&destinations=";
var baseUrl_3 = "&key=";
/* Function to return a adjacency matrix */
/* Create n x n matrix where n = startingArray.length */
/* call create_n-d_array(n, n) to get n by n */
function create_nd_array(n) {
	var arr = new Array(n || 0), i = n;

	if (arguments.n > 1) {
		var args = Array.prototype.slice.call(arguments, 1);
		while(i--) {
			arr[length - 1 - i] = create_nd_array.apply(this, args);
		}
	}
	return arr;
}

function adjacency(startingArray) {
	var ajacencyTable = create_nd_array(startingArray.length, startingArray.length);
	for (var i = 0; i < startingArray.length; ++i) {
		for (var j = 0; j < startingArray.length; ++i) {
			if (i == j) {
				continue;
			}
			else {
				var url = baseUrl_1 + startingArray[i].formatted_address + baseUrl_2 + startingArray[j].formatted_address + baseUrl_3;
				request(url, function(err, res, body) {
					if (!err) {
						console.log(res.statusCode);
						var json = JSON.parse(body);
						var distance = json.rows[0].elements[0].distance.text;
						adjacencyTable[i][j] = distance;
					}
				});
			
			}
		}
	}
	return adjacencyTable;
}




/* Member checks if int "intHere" is in array "arrayHere" */
function member(arrayHere, intHere) {
	if (arrayHere.indexOf(intHere) == -1) {
		return false;
	}
	else { 
		return true;
	}
}
/* shortestPath takes in 2dArray and returns visited */
function shortestPath(twoDArray) {
	var i = 0;
	while (true) {
		if (visited.length == twoDArray.length) {
			break;
		}
		var min_dist = Number.MAX_VALUE;
		var min_index = -1;
		for (j = 0; j < twoDArray.length; ++j) {
			if (i == j || member(visited, j)) {
				continue;
			}
			if (twoDArray[i][j] < min_dist) {
				min_dist = A[i][j];
				min_index = j;
			}
		}
		visited.push(i);
		i = min_index;
	}
	return visited;
}
