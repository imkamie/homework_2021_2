'use strict';

/**
 * Функция проверяет переданный аргумент на то, является ли он целым числом
 * 
 * @param {Number} element - проверяемое число
 * @returns {Boolean} - возвращает true, если аргумент является целым числом
 */

const isElementInteger = (element) => {
    if (!Number.isInteger(element)) {
        throw new TypeError('Invalid input');
    }

    return true;
};


/**
 * Функция форматирует переданный массив из целых чисел в несколько колонок
 * 
 * @param {Array} input - исходный массив чисел
 * @param {Number} columns - количество колонок
 * @returns {String} - отформатированная строка
 */

const format = (input, columns) => {
    if (columns <= 0 || input.length === 0 || !Array.isArray(input) || !input) {
        throw new TypeError('Invalid input');
    }

    const inputWithStrings = input.map((item) => {
        if (isElementInteger(item)) {
            return item.toString();
        }
    });

    const columnWidth = [];

    inputWithStrings.forEach((element, index) => {
        const column = index % columns;
        columnWidth[column] = Math.max(element.length, columnWidth[column] || 0);
    });

    const indexOfLastColumn = columns - 1;
    const indexOfLastElement = inputWithStrings.length - 1;

    return inputWithStrings.reduce((result, element, index) => {
        const column = index % columns;
        const numberOfSpaces = columnWidth[column] - element.length;

        result += ' '.repeat(numberOfSpaces) + element + ((column === indexOfLastColumn) ? '\n' : ' ');

        if (index === indexOfLastElement) {
            result = result.slice(0, -1);
        }

        return result;
	}, '');
};
