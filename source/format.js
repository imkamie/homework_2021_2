'use strict';

const format = (input, columns) => {
    if (columns <= 0 || !Array.isArray(input)) {
        throw new TypeError('Incorrect input');
    }

    input = input.map(item => item.toString());

    let columnsSize = [];

    // определение ширины колонки
    input.forEach(function callback(element, index) {
        let column = index % columns;
        columnsSize[column] = Math.max(element.length, columnsSize[column] || 0);
    });

}
