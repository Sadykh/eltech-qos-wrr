import * as $ from "jquery";

import {Priority} from "./Priority";

export class Program {
    name: string;
    priority: Priority;

    constructor(opts: {
        name: string,
        priority: Priority
    }) {
        this.name = opts.name;
        this.priority = opts.priority;
    }

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

        const programList = [];
        for (const item of programInitData) {
            const model = new Program({
                name: item.name,
                priority: priorityItems[item.priorityId - 1]
            });
            programList.push(model);
            $('.programItems > li:nth-child(' + item.priorityId + ') > ul').append(model.getElementLi());
        }
        return programList;
    }

    getElementLi() {
        return '<li>' + this.name + '</li>';
    }
}