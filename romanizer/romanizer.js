var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500];
var roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D"];
function romanizer(num){
	var result = "";	
	var remaining = num;	

	for(var idx=arabic.length - 1; idx >= 0; idx--){
		while (remaining >= arabic[idx]){
			result += roman[idx];
			remaining -= arabic[idx];
		}
	}	
	return result;
}

module.exports = romanizer;
