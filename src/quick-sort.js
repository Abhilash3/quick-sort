'use strict';

function quickSort(input) {
	
	if (Object.prototype.toString.call(input) != '[object Array]') {
		throw new Error('Not an array');
	}
	
	let length = input.length;
	if (length < 2) {
		return input;
	}
	
	let pivot = input[(length / 2).toFixed(0)];
	
	let i = 0;
	let j = length - 1;
	while(i <= j) {
		while(input[i] < pivot) {
			i++;
		}
		while(pivot < input[j]) {
			j--;
		}
		
		if (i <= j) {
			let temp = input[i];
			input[i++] = input[j];
			input[j--] = temp;
		}
	}

	if (0 < j) {
		let arr = quickSort(Array.prototype.slice.call(input, 0, j + 1));
		for (let a = 0; a < arr.length; a++) {
			input[a] = arr[a];
		}
	}
	if (i < length - 1) {
		let arr = quickSort(Array.prototype.slice.call(input, i - 1, length));
		for (let a = 0; a < arr.length; a++) {
			input[a + i - 1] = arr[a];
		}
	}
	return input;
};
module.exports = quickSort;