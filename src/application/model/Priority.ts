import * as $ from "jquery";

export class Priority {
    name: string;
    weight: number = 1;
    rank: number;
    color: string;

    constructor(opts: {
        name: string,
        rank: number,
        color: string
    }) {
        this.name = opts.name;
        this.rank = opts.rank;
        this.color = opts.color;
    }

    static init(): Array<Priority> {
        const priorityItemsPlaceHolder = [
            {name: 'A', color: '#ff6624'},
            {name: 'B', color: '#72bb53'},
            {name: 'C', color: '#4dd7fa'},
            {name: 'D', color: '#7e2199'}
        ];
        const priorityItems = [];
        for (const index in priorityItemsPlaceHolder) {
            const item = priorityItemsPlaceHolder[index];
            const model = new Priority({
                name: item.name,
                rank: Number(index),
                color: item.color
            });
            $('.priorityItems').append(model.getElementLi());
            priorityItems.push(model);
        }
        return priorityItems;
    }

    setWeight(value: number) {
        this.weight = value;
    }

    getElementLi() {
        return '<li style="background: ' + this.color + '">' +
            '<div class="form-group">\n' +
            '    <label for="priority-' + this.rank + '">' + this.name + '</label>\n' +
            '    <input type="number" class="form-control" id="priority-' + this.rank + '" placeholder="Укажите вес">\n' +
            '  </div>' +
            '</li>';
    }
}
