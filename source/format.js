'use strict';

const format = (input, columns) => {
    if (columns <= 0 || !Array.isArray(input)) {
        throw new TypeError('Incorrect input');
    }

    input = input.map(item => item.toString());

    let columnWidth = [];

    input.forEach(function callback(element, index) {
        let column = index % columns;
        columnWidth[column] = Math.max(element.length, columnWidth[column] || 0);
    });

    return input.reduce(function(result, element, index) {
		let column = index % columns;
		let numberOfSpaces = columnWidth[column] - element.length;

		let indexOfLastColumn = columns - 1;
        let indexOfLastElement = input.length - 1;

		result += ' '.repeat(numberOfSpaces) + element + ((column === indexOfLastColumn) ? '\n' : ' ');

        if (index === indexOfLastElement) {
            result = result.slice(0, -1);
        }

		return result;
	}, '');
}
