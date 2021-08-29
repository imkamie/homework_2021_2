'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	// Собственные тесты
	QUnit.test('format работает правильно c несколькими колонками, самое длинное число в середине', function (assert) {
		const input = [ 1, 100, -100, 10000, 10, -10, 0 ];

		const expected2 =
		'   1   100\n' +
		'-100 10000\n' +
		'  10   -10\n' +
		'   0';

		const expected3 =
		'    1 100 -100\n' +
		'10000  10  -10\n' +
		'    0';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно c числом колонок, равным числу чисел', function (assert) {
		const input = [ 1, 100, -100, 10000, 10, -10, 0 ];

		const expected = '1 100 -100 10000 10 -10 0';

		assert.strictEqual(format(input, input.length), expected);
	});

	QUnit.test('format работает правильно c одним числом', function (assert) {
		const input = [ 0 ];

		const expected = '0';

		assert.strictEqual(format(input, 1), expected);
		assert.strictEqual(format(input, 2), expected);
		assert.strictEqual(format(input, 5), expected);
	});

	QUnit.test('format работает правильно c невалидными данными', function (assert) {
		assert.throws(() => format([1, 2], 0));
		assert.throws(() => format([1, 2], -2));
		assert.throws(() => format([0.1, 10.3, 5.7], 3));
		assert.throws(() => format([0, 1, 2.1, 10], 2));
		assert.throws(() => format([0, null, 4, 10], 4));
		assert.throws(() => format([undefined, undefined, undefined], 4));
		assert.throws(() => format(['1', '2', '3'], 3));
		assert.throws(() => format([], 1));
		assert.throws(() => format(0, 1));
		assert.throws(() => format('hello', 2));
		assert.throws(() => format({}, 1));
		assert.throws(() => format(null, 1));
		assert.throws(() => format(undefined, 1));
	});
});
