const addition = (num1, num2) => {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
		throw new TypeError("Invalid data type. All input values must be integers.");
	}
	return num1 + num2;
};

module.exports = addition;
