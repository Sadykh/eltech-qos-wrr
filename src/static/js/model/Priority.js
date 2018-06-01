"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
/**
 * Класс приоритетов (A, B, C, D)
 */
var Priority = /** @class */ (function () {
    /**
     * Конструктор класса с аргументами для заполнения
     */
    function Priority(opts) {
        this.weight = 1; // Вес приоритета
        this.lastIndexPacker = 0; // последний index массива пакетов
        this.name = opts.name;
        this.rank = opts.rank;
        this.color = opts.color;
    }
    /**
     * Статический метод для инициализации данных
     * @return {Array<Priority>}
     */
    Priority.init = function () {
        var priorityItemsPlaceHolder = [
            { name: 'A', color: '#ff6624' },
            { name: 'B', color: '#72bb53' },
            { name: 'C', color: '#4dd7fa' },
            { name: 'D', color: '#7e2199' }
        ];
        var priorityItems = [];
        for (var index in priorityItemsPlaceHolder) {
            var item = priorityItemsPlaceHolder[index];
            var model = new Priority({
                name: item.name,
                rank: Number(index),
                color: item.color,
            });
            model.setWeight(5 - Number(index));
            priorityItems.push(model);
            $('.priorityItems').append(model.getElementLi());
            $('.programItems').append('<li><ul></ul></li>');
        }
        return priorityItems;
    };
    /**
     * Соединить пакеты с приоритетом
     * @param {Priority[]} priorityItems
     * @param {ProgramPacket[]} packetList
     * @return {Priority[]}
     */
    Priority.attachPackets = function (priorityItems, packetList) {
        var tempPriorityList = {
            0: [],
            1: [],
            2: [],
            3: [],
        };
        for (var _i = 0, packetList_1 = packetList; _i < packetList_1.length; _i++) {
            var packet = packetList_1[_i];
            tempPriorityList[packet.program.priority.rank].push(packet);
        }
        for (var index in tempPriorityList) {
            priorityItems[index].packets = tempPriorityList[index];
        }
        return priorityItems;
    };
    /**
     * Установить вес приоритету
     * @param {number} value
     */
    Priority.prototype.setWeight = function (value) {
        this.weight = value;
    };
    /**
     * Получить html элемент для вывода
     * @return {string}
     */
    Priority.prototype.getElementLi = function () {
        return '<li style="background: ' + this.color + '">' +
            '<div class="form-group">\n' +
            '    <label for="priority-' + this.rank + '">' + this.name + '</label>\n' +
            '    <input type="number" class="form-control priority-input-event" value="' + this.weight + '" id="priority-' + this.rank + '" data-id="' + this.rank + '" placeholder="Укажите вес">\n' +
            '</div>' +
            '</li>';
    };
    /**
     * Получить пакет из приоритета
     * @return {ProgramPacket | null}
     */
    Priority.prototype.getPacket = function () {
        var items = this.packets;
        var item = items[this.lastIndexPacker];
        delete items[this.lastIndexPacker++];
        return item;
    };
    return Priority;
}());
exports.Priority = Priority;
//# sourceMappingURL=Priority.js.map