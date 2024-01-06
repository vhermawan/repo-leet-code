var twoSum = function (nums, target) {
	let lengthnums = nums.length;
	for (let i = 0; i < lengthnums; i++) {
		for (let j = i; j <= lengthnums - 1; j++) {
			const tempNumb = nums[i] + nums[j];
			if (tempNumb === target && i !== j) {
				return [i, j];
			}
		}
	}
};

const nums = [3, 2, 3];
const target = 6;

console.log(twoSum(nums, target));
