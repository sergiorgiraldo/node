var test = require("tape")
var romanizer = require("./romanizer.js");

test("Tape is working", function(t){
	t.equal(1, 1, "Sample test to test setup");
	t.end();
});

test("WhenGiven_1_Returns_I", function(t){
	var num = "1";
	var actual = romanizer(1);
	t.equal(actual, "I", "1->I");
	t.end();
});
