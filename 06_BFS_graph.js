const graph = {};

// наполняем граф данными с информацией о связях между узлами
graph.you = ["alice", "bob", "claire"];
graph.bob = ["anuj", "peggy"];
graph.alice = ["peggy"];
graph.claire = ["thod", "jonny"];
graph.anuj = ["alex"];
graph.peggy = [];
graph.thod = ["felix", "bloom"];
graph.jonny = [];

// очередь (FIFO) для поиска совпадений, сюда будут помещаться все связи узла сначала 1 уровня, потом 2 и т.д.
const searchQueue = [];

/**
 * Вспомогательная функция для наполнения очереди поиска
 * @param {Array} list - массив со связями текущего узла
 */
const addToQueue = (list) => {
	if (!list) {
		return;
	}
    for (let item of list) {
        searchQueue.push(item);
    }
};

/**
 * Вспомогательная функция для определения, что мы нашли нужный элемент (просто имя, которое заканчиватся на "М")
 * @param {string} name 
 */
const check = (name) =>  name.endsWith('m');

/**
 * Реализация алгоритма поиска в ширину по графу. Время выполнения считается как O(V + E), где V - количенство узлов,
 * а E - количество рёбер.
 * Суть: начинаем поиск с первого узла, добавляя все его связи в очередь. Извлекаем первый элемент из очереди,
 * проверяем на условие, если условие не выполняется, то проверяем следующего. Одновременно с этим в очередь помещаются
 * все связи проверяемого узла. Проверка идет до полной очистки очереди или срабатывания условия. Кроме этого 
 * существует массив проверенных значений, чтобы не было бесконечного цикла проверки связей. Если извлеченное
 * из очереди значение уже есть в массиве проверенных, то оно игнорируется.
 * @param {Array} searchQueue - очередь для проверки узлов по связям;
 * @param {Object} graph - объект графа;
 * @param {string} startPoint - узел, с которого начинаем поиск.
 */
const startSearch = (searchQueue, graph, startPoint) => {
    const searched = [];

	addToQueue(graph[startPoint]);

    while(searchQueue.length !== 0) {
		let person = searchQueue.shift();
		
        if (!searched.includes(person)) {
            if (check(person)) {
                return person + ' - имя, которое заканчивается на "М"!';
            } else {
                addToQueue(graph[person]);
                searched.push(person);
            }
        }
    }

    return 'В графе нет имён, которые бы заканчивались на "М"';
};
