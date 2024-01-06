var isPalindrome = function (x) {
	const tempString = x.toString();
	if (tempString === tempString.split("").reverse().join("")) {
		return true;
	}
	return false;
};

console.log("palindrome", isPalindrome(121));
