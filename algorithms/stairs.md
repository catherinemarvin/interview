A child is running up a staircase with n steps and can hop either 1, 2, or 3 steps at a time.
Implement a method to count how many possible ways the child can run up the stairs.

var countWays = function (n) {
	if (n < 0) {
		return 0;
	} 
	else if (n === 0) {
		return 1;
	}
	else {
		return countWays(n - 1) + countWays(n - 2)	+ countWays(n - 3);
	}
};

var map = [];
var countWays = function(n, map) {
	if (n < 0) {
		return 0;
	}
	else if (n === 0) {
		return 1;
	}
	else if (map[n]) {
		return map[n];
	}
	else {
		map[n] = countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
		return map[n];
	}
}
