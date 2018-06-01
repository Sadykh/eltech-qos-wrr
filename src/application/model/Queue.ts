import {Priority} from "./Priority";

export class Queue {
    lastId: number = 0;             // последний ID номер очереди (чтобы генерировать следующие)
    elementMap: object = {};        // хэшмэп для хранения элементов приоритета
    length: number = 0;             // количество приоритетов (размер)
    lastNumberQueue: number = -1;   // указывает элемент, который был выбран в последний раз
    currentWeight: number = 0;      // текущий вес в очереди
    maxWeight: number = 0;          // максимальный вес


    /**
     * Инициализация протокола
     * @param {Priority[]} list
     * @return {Queue}
     */
    static init(list: Priority[]) {
        const model = new Queue();
        for (const index in list) {
            const item = list[index];
            model.add(item);
        }
        return model;
    }

    /**
     * Получить уникальный порядковый номер
     * @return {number}
     */
    generateUniqueId(): number {
        return this.lastId++;
    }

    /**
     * Получить максимальный вес из всех приоритетов
     * @return {number}
     */
    calculateMaxWeight(): number {
        let maxWeight: number = 0;
        for (const elementKey in this.elementMap) {
            const element = this.elementMap[elementKey];
            if (maxWeight < element.weight) {
                maxWeight = element.weight;
            }
        }
        return maxWeight;
    }

    /**
     * Добавление элемента в очередь
     * @param {Priority} element
     * @return {number}
     */
    add(element: Priority): number {
        const key: number = this.generateUniqueId();
        this.length++;
        this.elementMap[key] = element;
        this.maxWeight = this.calculateMaxWeight();
        return key;
    }

    /**
     * Удалить элемент из списока
     * @param key
     */
    remove(key): void {
        if (key in this.elementMap) {
            delete this.elementMap[key];
            this.length--;
        }
        this.maxWeight = this.calculateMaxWeight();
    }

    /**
     * Получить вес элемента
     * @param id
     * @return {number}
     */
    getWeight(id): number {
        return this.elementMap[id].weight;
    }


    /**
     * Получить общий делитель
     * @return {number}
     */
    getGcd(): number {
        return 1;
    }


    /**
     * Получить приоритет
     * @return {Priority | null}
     */
    get(): Priority | null {
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
    }
}

