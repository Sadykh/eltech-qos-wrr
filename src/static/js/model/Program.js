"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
/**
 * Класс для программ
 */
var Program = /** @class */ (function () {
    /**
     * Конструктор класса для заполнения свойств
     */
    function Program(opts) {
        this.name = opts.name;
        this.priority = opts.priority;
    }
    /**
     * Инициализация данных
     * @param {Array<Priority>} priorityItems
     * @return {Array<Program>}
     */
    Program.init = function (priorityItems) {
        var programInitData = [
            { name: 'World of Thunder', priorityId: 1 },
            { name: 'Skype', priorityId: 1 },
            { name: 'Telegram', priorityId: 1 },
            { name: 'iTunes', priorityId: 1 },
            { name: 'Discord', priorityId: 1 },
            { name: 'World of Tanks', priorityId: 2 },
            { name: 'Mail.ru', priorityId: 2 },
            { name: 'Whatsapp', priorityId: 2 },
            { name: 'Windows Media', priorityId: 2 },
            { name: 'TeamViewer', priorityId: 2 },
            { name: 'World of Ships', priorityId: 3 },
            { name: 'MSN', priorityId: 3 },
            { name: 'Viber', priorityId: 3 },
            { name: 'Winamp', priorityId: 3 },
            { name: 'Windows Remote', priorityId: 3 },
            { name: 'Sims', priorityId: 4 },
            { name: 'Jabber', priorityId: 4 },
            { name: 'ICQ', priorityId: 4 },
            { name: 'VLC', priorityId: 4 },
            { name: 'Linux Remote', priorityId: 4 },
        ];
        var programList = [];
        var i = 0;
        for (var _i = 0, programInitData_1 = programInitData; _i < programInitData_1.length; _i++) {
            var item = programInitData_1[_i];
            var model = new Program({
                id: i++,
                name: item.name,
                priority: priorityItems[item.priorityId - 1]
            });
            programList.push(model);
            $('.programItems > li:nth-child(' + item.priorityId + ') > ul').append(model.getElementLi());
        }
        return programList;
    };
    /**
     * Получить html элемент для вывода
     * @return {string}
     */
    Program.prototype.getElementLi = function () {
        return '<li>' + this.name + '</li>';
    };
    return Program;
}());
exports.Program = Program;
//# sourceMappingURL=Program.js.map