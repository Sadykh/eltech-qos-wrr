import {Program} from "./Program";
import * as $ from "jquery";

/**
 * Класс для пакетов программ
 */
export class ProgramPacket {
    size: number;       // размер пакета в кб
    program: Program;   // к какой программе привязана

    /**
     * Конструктор с аргументами для заполнения свойств
     */
    constructor(opts: {
        size: number,
        program: Program
    }) {
        this.size = opts.size;
        this.program = opts.program;
    }

    /**
     * Получить рандомное число
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    static getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    /**
     * Инициализация данных (создание каждого пакета рандомным размером по 2 штуки)
     * @param {Array<Program>} programList
     * @return {Array<ProgramPacket>}
     */
    static init(programList: Array<Program>): Array<ProgramPacket> {
        const result: Array<ProgramPacket> = [];
        for (const program of programList) {
            for (let i = 0; i < 2; i++) {
                const model: ProgramPacket = new ProgramPacket({
                    size: this.getRandomInt(20, 200),
                    program: program
                });
                result.push(model);
                $('.priorityPacket-' + (model.program.priority.rank + 1)).append(model.getElementLi());
            }
        }
        return result;
    }

    getElementLi(): string {
        return '<li>' +
            this.program.name + '(' + this.size + 'кб)' +
            '</li>';
    }
}