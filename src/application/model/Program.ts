import * as $ from "jquery";

import {Priority} from "./Priority";

/**
 * Класс для программ
 */
export class Program {
    id: number;             // ID программы
    name: string;           // Название программы
    priority: Priority;     // Приоритет, к которому принадлежит

    /**
     * Конструктор класса для заполнения свойств
     */
    constructor(opts: {
        id: number,
        name: string,
        priority: Priority
    }) {
        this.name = opts.name;
        this.priority = opts.priority;
    }

    /**
     * Инициализация данных
     * @param {Array<Priority>} priorityItems
     * @return {Array<Program>}
     */
    static init(priorityItems: Array<Priority>): Array<Program> {
        const programInitData = [
            {name: 'World of Thunder', priorityId: 1},
            {name: 'Skype', priorityId: 1},
            {name: 'Telegram', priorityId: 1},
            {name: 'iTunes', priorityId: 1},
            {name: 'Discord', priorityId: 1},

            {name: 'World of Tanks', priorityId: 2},
            {name: 'Mail.ru', priorityId: 2},
            {name: 'Whatsapp', priorityId: 2},
            {name: 'Windows Media', priorityId: 2},
            {name: 'TeamViewer', priorityId: 2},

            {name: 'World of Ships', priorityId: 3},
            {name: 'MSN', priorityId: 3},
            {name: 'Viber', priorityId: 3},
            {name: 'Winamp', priorityId: 3},
            {name: 'Windows Remote', priorityId: 3},

            {name: 'Sims', priorityId: 4},
            {name: 'Jabber', priorityId: 4},
            {name: 'ICQ', priorityId: 4},
            {name: 'VLC', priorityId: 4},
            {name: 'Linux Remote', priorityId: 4},
        ];

        const programList: Array<Program> = [];
        let i: number = 0;
        for (const item of programInitData) {
            const model: Program = new Program({
                id: i++,
                name: item.name,
                priority: priorityItems[item.priorityId - 1]
            });
            programList.push(model);
            $('.programItems > li:nth-child(' + item.priorityId + ') > ul').append(model.getElementLi());
        }
        return programList;
    }

    getElementLi(): string {
        return '<li>' + this.name + '</li>';
    }
}