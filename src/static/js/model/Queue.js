"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.lastId = 0; // последний ID номер очереди (чтобы генерировать следующие)
        this.elementMap = {}; // хэшмэп для хранения элементов приоритета
        this.length = 0; // количество приоритетов (размер)
        this.lastNumberQueue = -1; // указывает элемент, который был выбран в последний раз
        this.currentWeight = 0; // текущий вес в очереди
        this.maxWeight = 0; // максимальный вес
    }
    /**
     * Инициализация протокола
     * @param {Priority[]} list
     * @return {Queue}
     */
    Queue.init = function (list) {
        var model = new Queue();
        for (var index in list) {
            var item = list[index];
            model.add(item);
        }
        return model;
    };
    /**
     * Получить уникальный порядковый номер
     * @return {number}
     */
    Queue.prototype.generateUniqueId = function () {
        return this.lastId++;
    };
    /**
     * Получить максимальный вес из всех приоритетов
     * @return {number}
     */
    Queue.prototype.calculateMaxWeight = function () {
        var maxWeight = 0;
        for (var elementKey in this.elementMap) {
            var element = this.elementMap[elementKey];
            if (maxWeight < element.weight) {
                maxWeight = element.weight;
            }
        }
        return maxWeight;
    };
    /**
     * Добавление элемента в очередь
     * @param {Priority} element
     * @return {number}
     */
    Queue.prototype.add = function (element) {
        var key = this.generateUniqueId();
        this.length++;
        this.elementMap[key] = element;
        this.maxWeight = this.calculateMaxWeight();
        return key;
    };
    /**
     * Удалить элемент из списока
     * @param key
     */
    Queue.prototype.remove = function (key) {
        if (key in this.elementMap) {
            delete this.elementMap[key];
            this.length--;
        }
        this.maxWeight = this.calculateMaxWeight();
    };
    /**
     * Получить вес элемента
     * @param id
     * @return {number}
     */
    Queue.prototype.getWeight = function (id) {
        return this.elementMap[id].weight;
    };
    /**
     * Получить общий делитель
     * @return {number}
     */
    Queue.prototype.getGcd = function () {
        return 1;
    };
    /**
     * Получить приоритет
     * @return {Priority | null}
     */
    Queue.prototype.get = function () {
        while (true) {
            this.lastNumberQueue = (this.lastNumberQueue + 1) % this.length;
            if (this.lastNumberQueue == 0) {
                this.currentWeight = this.currentWeight - this.getGcd();
                if (this.currentWeight <= 0) {
                    this.currentWeight = this.maxWeight;
                    if (this.currentWeight == 0)
                        return null;
                }
            }
            if (this.getWeight(this.lastNumberQueue) >= this.currentWeight)
                return this.elementMap[this.lastNumberQueue];
        }
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=Queue.js.map