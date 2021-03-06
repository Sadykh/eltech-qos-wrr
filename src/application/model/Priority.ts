import * as $ from "jquery";
import {ProgramPacket} from "./ProgramPacket";

/**
 * Класс приоритетов (A, B, C, D)
 */
export class Priority {
    name: string;               // название приоритета (A, B, C, D)
    weight: number = 1;         // Вес приоритета
    rank: number;               // порядковый номер
    color: string;              // цвет приоритета
    packets: ProgramPacket[];   // привязка пакетов
    lastIndexPacker: number = 0;// последний index массива пакетов

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
                color: item.color,
            });
            model.setWeight(5 - Number(index));
            priorityItems.push(model);
            $('.priorityItems').append(model.getElementLi());
            $('.programItems').append('<li><ul></ul></li>');
        }
        return priorityItems;
    }

    /**
     * Соединить пакеты с приоритетом
     * @param {Priority[]} priorityItems
     * @param {ProgramPacket[]} packetList
     * @return {Priority[]}
     */
    static attachPackets(priorityItems: Priority[], packetList: ProgramPacket[]) {
        const tempPriorityList = {
            0: [],
            1: [],
            2: [],
            3: [],
        };
        for (const packet of packetList) {
            tempPriorityList[packet.program.priority.rank].push(packet);
        }
        for (const index in tempPriorityList) {
            priorityItems[index].packets = tempPriorityList[index];
        }
        return priorityItems;
    }

    /**
     * Установить вес приоритету
     * @param {number} value
     */
    setWeight(value: number) {
        this.weight = value;
    }

    /**
     * Получить html элемент для вывода
     * @return {string}
     */
    getElementLi(): string {
        return '<li style="background: ' + this.color + '">' +
            '<div class="form-group">\n' +
            '    <label for="priority-' + this.rank + '">' + this.name + '</label>\n' +
            '    <input type="number" class="form-control priority-input-event" value="' + this.weight + '" id="priority-' + this.rank + '" data-id="' + this.rank + '" placeholder="Укажите вес">\n' +
            '</div>' +
            '</li>';
    }

    /**
     * Получить пакет из приоритета
     * @return {ProgramPacket | null}
     */
    getPacket(): ProgramPacket | null {
        const items = this.packets;
        const item = items[this.lastIndexPacker];
        delete items[this.lastIndexPacker++];
        return item;
    }
}
