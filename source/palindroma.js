export const palindroma = {
	check: (input) => {
		const reverse = String(input).split('').reverse().join('');
		if (reverse == String(input)) {
			return true
		}
		return false
	},
	nearest: (input) => {
		if (!Number.isInteger(input)) return undefined
		input = parseFloat(input);
		if (palindroma.check(input)) {
			return input
		}
		let low = input - 1;
		while (!palindroma.check(low)) {
			low -= 1
		}
		let high = input + 1;
		while (!palindroma.check(high)) {
			high += 1
		}
		if (input - low < high - input) {
			return low
		} else {
			return high
		}
	}
}

export default palindroma;