import {Priority} from "./model/Priority";
import {Program} from "./model/Program";
import {ProgramPacket} from "./model/ProgramPacket";
import {Queue} from "./model/Queue";
import * as $ from "jquery";

/**
 * Инциализация данных
 */
function init() {
    const programList: Array<Program> = Program.init(priorityItems);
    const packetList: Array<ProgramPacket> = ProgramPacket.init(programList);
    priorityItems = Priority.attachPackets(priorityItems, packetList);
}

let priorityItems: Array<Priority> = Priority.init();
init();

$(document).on("change", ".priority-input-event", function (e) {
    let id = $(this).attr('data-id');
    let value = $(this).val();
    priorityItems[id].setWeight(Number(value));
});

let inProcess = 0;
$(document).on("click", ".send-packets", function (e) {
    e.preventDefault();
    if (inProcess) {
        return false;
    }
    inProcess = 1;
    let initRepeat = 0;
    for (let i = 1; i < 5; i++) {
        if ($('#priorityPacketsQueue-column-' + i + 'ul li').length) {
            initRepeat = 0;
        }
    }
    if (initRepeat) {
        init();
    }
    let queue = Queue.init(priorityItems);
    for (let i = 0; i < 100; i++) {
        setTimeout(function () {
            const element = queue.get();
            const packet = element.getPacket();
            if (packet) {
                packet.sendElement();
            }
            if (i == 100) {
                inProcess = 0;
            }
        }, 1000 * i);

    }
});
