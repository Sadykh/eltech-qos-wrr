"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
/**
 * Класс для пакетов программ
 */
var ProgramPacket = /** @class */ (function () {
    /**
     * Конструктор с аргументами для заполнения свойств
     */
    function ProgramPacket(opts) {
        this.size = opts.size;
        this.program = opts.program;
    }
    /**
     * Получить рандомное число
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    ProgramPacket.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    /**
     * Инициализация данных (создание каждого пакета рандомным размером по 2 штуки)
     * @param {Array<Program>} programList
     * @return {Array<ProgramPacket>}
     */
    ProgramPacket.init = function (programList) {
        var result = [];
        for (var _i = 0, programList_1 = programList; _i < programList_1.length; _i++) {
            var program = programList_1[_i];
            for (var i = 0; i < 2; i++) {
                var model = new ProgramPacket({
                    size: this.getRandomInt(20, 200),
                    program: program
                });
                result.push(model);
                $('.priorityPacket-' + (model.program.priority.rank + 1)).append(model.getElementLi());
                $('#priorityPacketsQueue-column-' + (model.program.priority.rank + 1) + ' ul').append(model.getElementLiVisual());
            }
        }
        return result;
    };
    /**
     * Получить элемент для вывода
     * @return {string}
     */
    ProgramPacket.prototype.getElementLi = function () {
        return '<li data-uuid="' + this.program.name + '-' + this.size + '">' +
            this.program.name + '(' + this.size + 'кб)' +
            '</li>';
    };
    /**
     * Получить html элемент для вывода в таблице выполненных
     * @return {string}
     */
    ProgramPacket.prototype.getElementLiVisual = function () {
        return '<li style="background-color: ' + this.program.priority.color + '" data-uuid="' + this.program.name + '-' + this.size + '">' +
            this.program.name + '(' + this.size + 'кб)' +
            '</li>';
    };
    /**
     * Отправка пакета
     */
    ProgramPacket.prototype.sendElement = function () {
        var uuid = this.program.name + '-' + this.size;
        $('#priorityPacketsQueue-column-' + (this.program.priority.rank + 1) + ' ul').find("[data-uuid='" + uuid + "']").slideUp();
        var element = this.getElementLiVisual();
        $('.priorityPacketsQueueDone-column ul').append(element);
    };
    return ProgramPacket;
}());
exports.ProgramPacket = ProgramPacket;
//# sourceMappingURL=ProgramPacket.js.map