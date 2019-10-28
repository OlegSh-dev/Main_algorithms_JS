/**
 * Реализация бинарного поиска, сложность алгоритма O(log n).
 * Суть: каждый ход делим массив пополам и проверяем, больше или меньше среднее значение искомого, если меньше,
 * то сдвигаем нижнюю границу на середину, если больше - верхнюю, затем повторяем действие.
 * @param {Array} arr - обязательно ОТСОРТИРОВАННЫЙ массив по возрастанию;
 * @param {number} item - искомое число;
 * @returns возвращает индекс искомого числа в переданном массиве с количеством проходов или null при отсутствии;
 */
const binarySearch = (arr, item) => {
	let counter = 0;
	let low = 0;
	let high = arr.length - 1;

	if (arr[low] === item) {
		return `Индекс искомого числа: ${low}. Количество операций: ${counter}`;
	}

	if (arr[high] === item) {
		return `Индекс искомого числа: ${high}. Количество операций: ${counter}`;
	}

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = arr[mid];

		if (guess === item) {
			return `Индекс искомого числа: ${mid}. Количество операций: ${counter === 0 ? counter + 1 : counter}`;
		}

		if (guess > item) {
			high = mid - 1;
			counter += 1;
		}

		if (guess < item) {
			low = mid + 1;
			counter += 1;
		}
	}

	return null;
};

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4));