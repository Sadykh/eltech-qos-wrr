import * as $ from "jquery";

/**
 * Класс приоритетов (A, B, C, D)
 */
export class Priority {
    name: string;           // название приоритета (A, B, C, D)
    weight: number = 1;     // Вес приоритета
    rank: number;           // порядковый номер
    color: string;          // цвет приоритета

    /**
     * Конструктор класса с аргументами для заполнения
     */
    constructor(opts: {
        name: string,
        rank: number,
        color: string
    }) {
        this.name = opts.name;
        this.rank = opts.rank;
        this.color = opts.color;
    }

    /**
     * Статический метод для инициализации данных
     * @return {Array<Priority>}
     */
    static init(): Array<Priority> {
        const priorityItemsPlaceHolder: Array<any> = [
            {name: 'A', color: '#ff6624'},
            {name: 'B', color: '#72bb53'},
            {name: 'C', color: '#4dd7fa'},
            {name: 'D', color: '#7e2199'}
        ];
        const priorityItems: Array<Priority> = [];
        for (const index in priorityItemsPlaceHolder) {
            const item: any = priorityItemsPlaceHolder[index];
            const model: Priority = new Priority({
                name: item.name,
                rank: Number(index),
                color: item.color
            });
            priorityItems.push(model);
            $('.priorityItems').append(model.getElementLi());
            $('.programItems').append('<li><ul></ul></li>');
        }
        return priorityItems;
    }

    setWeight(value: number) {
        this.weight = value;
    }

    getElementLi(): string {
        return '<li style="background: ' + this.color + '">' +
            '<div class="form-group">\n' +
            '    <label for="priority-' + this.rank + '">' + this.name + '</label>\n' +
            '    <input type="number" class="form-control" id="priority-' + this.rank + '" placeholder="Укажите вес">\n' +
            '</div>' +
            '</li>';
    }
}
