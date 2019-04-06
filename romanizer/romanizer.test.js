var test = require("tape")
var romanizer = require("./romanizer.js");

test("Tape is working", function(t){
	t.equal(1, 1, "Sample test to test setup");
	t.end();
});

test("WhenGiven_1_Returns_I", function(t){
	var num = 1;
	var actual = romanizer(num);
	t.equal(actual, "I", "1->I");
	t.end();
});

test("WhenGiven_2_Returns_II", function(t){
	var num = 2;
	var actual = romanizer(num);
	t.equal(actual, "II", "2->II");
	t.end();
});

test("WhenGiven_3_Returns_III", function(t){
	var num = 3;
	var actual = romanizer(num);
	t.equal(actual, "III", "3->III");
	t.end();
});

test("WhenGiven_4_Returns_IV", function(t){
	var num = 4;
	var actual = romanizer(num);
	t.equal(actual, "IV", "4->IV");
	t.end();
});

test("WhenGiven_5_Returns_V", function(t){
	var num = 5;
	var actual = romanizer(num);
	t.equal(actual, "V", "5->V");
	t.end();
});

test("WhenGiven_6_Returns_VI", function(t){
	var num = 6;
	var actual = romanizer(num);
	t.equal(actual, "VI", "6->VI");
	t.end();
});

test("WhenGiven_7_Returns_VII", function(t){
	var num = 7;
	var actual = romanizer(num);
	t.equal(actual, "VII", "7->VII");
	t.end();
});

test("WhenGiven_9_Returns_IX", function(t){
	var num = 9;
	var actual = romanizer(num);
	t.equal(actual, "IX", "9->IX");
	t.end();
});

test("WhenGiven_10_Returns_X", function(t){
	var num = 10;
	var actual = romanizer(num);
	t.equal(actual, "X", "10->X");
	t.end();
});

test("WhenGiven_11_Returns_XI", function(t){
	var num = 11;
	var actual = romanizer(num);
	t.equal(actual, "XI", "11->XI");
	t.end();
});

test("WhenGiven_12_Returns_XII", function(t){
	var num = 12;
	var actual = romanizer(num);
	t.equal(actual, "XII", "12->XII");
	t.end();
});

test("WhenGiven_13_Returns_XIII", function(t){
	var num = 13;
	var actual = romanizer(num);
	t.equal(actual, "XIII", "13->XIII");
	t.end();
});

test("WhenGiven_14_Returns_XIV", function(t){
	var num = 14;
	var actual = romanizer(num);
	t.equal(actual, "XIV", "14->XIV");
	t.end();
});

test("WhenGiven_15_Returns_XV", function(t){
	var num = 15;
	var actual = romanizer(num);
	t.equal(actual, "XV", "15->XV");
	t.end();
});

test("WhenGiven_18_Returns_XVIII", function(t){
	var num = 18;
	var actual = romanizer(num);
	t.equal(actual, "XVIII", "18->XVIII");
	t.end();
});

test("WhenGiven_19_Returns_XIX", function(t){
	var num = 19;
	var actual = romanizer(num);
	t.equal(actual, "XIX", "19->XIX");
	t.end();
});

test("WhenGiven_20_Returns_XX", function(t){
	var num = 20;
	var actual = romanizer(num);
	t.equal(actual, "XX", "20->XX");
	t.end();
});

test("WhenGiven_21_Returns_XXI", function(t){
	var num = 21;
	var actual = romanizer(num);
	t.equal(actual, "XXI", "21->XXI");
	t.end();
});

test("WhenGiven_27_Returns_XXVII", function(t){
	var num = 27;
	var actual = romanizer(num);
	t.equal(actual, "XXVII", "27->XXVII");
	t.end();
});

test("WhenGiven_30_Returns_XXX", function(t){
	var num = 30;
	var actual = romanizer(num);
	t.equal(actual, "XXX", "30->XXX");
	t.end();
});

test("WhenGiven_31_Returns_XXXI", function(t){
	var num = 31;
	var actual = romanizer(num);
	t.equal(actual, "XXXI", "31->XXXI");
	t.end();
});

test("WhenGiven_37_Returns_XXXVII", function(t){
	var num = 37;
	var actual = romanizer(num);
	t.equal(actual, "XXXVII", "37->XXXVII");
	t.end();
});