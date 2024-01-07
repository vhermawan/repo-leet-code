var longestCommonPrefix = function (strs) {
	if (strs.length < 2) return strs[0];

	const temp = strs[0].split("");
	strs = strs.splice(1, strs.length);

	let arrayTemp = [];
	for (let i = 0; i < strs.length; i++) {
		let j = 0;
		while (j < temp.length) {
			if (strs[i].includes(temp[j], j)) {
				arrayTemp.push(temp[j]);
				j += 1;
			}

			console.log("tes", strs[i].length);

			if (strs[i][j] !== temp[j]) break;
		}
	}

	if (arrayTemp.length === 1) return arrayTemp[0];

	if (arrayTemp.length > 1) {
		let counts = {};
		let duplicates = "";

		for (let i = 0; i < arrayTemp.length; i++) {
			let num = arrayTemp[i];
			counts[num] = counts[num] ? counts[num] + 1 : 1;
		}

		if (Object.keys(counts).length) return arrayTemp.join("");

		for (let num in counts) {
			if (counts[num] > 1) {
				duplicates += num;
			}
		}

		return duplicates;
	}

	return "";
};

const strs = ["a", "a", "b"];

console.log(longestCommonPrefix(strs));
