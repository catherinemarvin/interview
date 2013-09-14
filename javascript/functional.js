/*
Write map

map([1,2,3], function (x) {
	return x * x;
});

should return a new array: [1,4,9]
*/

var myMap = function (arr, func) {
	var toReturn = [];
	for (var i = 0; i < arr.length; i++) {
		toReturn.push(func(arr[i]));
	}
	return toReturn;
};

/*
Write map using map's real prototype

[1,2,3].map(function (x) { 
	return x * x;
});

should return a new array: [1,4,9]
*/

Array.prototype.myMap = function (func) {
	var toReturn = [];
	for (var i = 0; i < this.length; i++) {
		toReturn.push(func(this[i]));	
	}
	return toReturn;
};

/* Write filter using the prototype system */

/* Write reduce.

[1,2,3].reduce(function (prev, curr) {
	return prev + curr;	
}, 0);

should return: 6.

*/

Array.prototype.myReduce = function (func, base) {
	var toReturn = base;
	for (var i = 0; i < this.length; i++) {
		toReturn = func(toReturn, this[i])	;
	}	
	return toReturn;
}