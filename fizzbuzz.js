var fizzBuzz = function (n) {
	const tempArray = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			tempArray.push("FizzBuzz");
		} else if (i % 3 === 0) {
			tempArray.push("Fizz");
		} else if (i % 5 === 0) {
			tempArray.push("Buzz");
		} else {
			tempArray.push(i.toString());
		}
	}
	return tempArray;
};

console.log(fizzBuzz(3));
