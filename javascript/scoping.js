// Setup
var x = {
	foo: function () {
		return this.bar;	
	},
	bar: 5
};

// What is the result of this?
x.foo(); // returns 5

// What about now?
var y = x.foo;
y(); // returns undefined

/* Why? SCOPING!
What is the value of "this" in Javascript?

"this" is set to the function's caller, aka the left of the dot.

How can we fix this? With bind!
*/

var z = x.foo.bind(x);
z(); // returns 5

// Now, time to write bind!
