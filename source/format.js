'use strict';

/**
 * Функция форматирует переданные массив из целых чисел в несколько колонок
 * 
 * @param {Array} input - исходный массив чисел
 * @param {Number} columns - количество колонок
 * @returns {String} - отформатированная строка
 */

const format = (input, columns) => {
    if (columns <= 0 || input.length === 0 || !Array.isArray(input) || input.some(element => typeof element !== "number")) {
        throw new TypeError('Invalid input');
    }

    input = input.map(item => item.toString());

    let columnWidth = [];

    input.forEach((element, index) => {
        const column = index % columns;
        columnWidth[column] = Math.max(element.length, columnWidth[column] || 0);
    });

    return input.reduce((result, element, index) => {
		const column = index % columns;
		const numberOfSpaces = columnWidth[column] - element.length;

        result += ' '.repeat(numberOfSpaces) + element + ((column === columns - 1) ? '\n' : ' ');

        if (index === input.length - 1) {
            result = result.slice(0, -1);
        }

		return result;
	}, '');
};
