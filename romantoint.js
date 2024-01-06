var romanToInt = function (str) {
	const mappingData = {
		I: 1,
		IV: 4,
		V: 5,
		IX: 9,
		X: 10,
		C: 100,
		L: 50,
		XL: 40,
		XC: 90,
		CD: 400,
		D: 500,
		CM: 900,
		M: 1000,
	};
	let total = 0;

	let romanNumerals = ["CM", "CD", "XC", "XL", "IX", "IV"];
	let result = [];

	let i = 0;
	while (i < str.length) {
		let twoChar = str.substring(i, i + 2);

		if (romanNumerals.includes(twoChar)) {
			result.push(twoChar);
			i += 2;
		} else {
			result.push(str.charAt(i));
			i += 1;
		}
	}

	for (let i = 0; i < result.length; i++) {
		total += mappingData[result[i]];
	}
	return total;
};

console.log(romanToInt("XI"));
