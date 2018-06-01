"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Priority_1 = require("./model/Priority");
var Program_1 = require("./model/Program");
var ProgramPacket_1 = require("./model/ProgramPacket");
var Queue_1 = require("./model/Queue");
var $ = require("jquery");
/**
 * Инциализация данных
 */
function init() {
    var programList = Program_1.Program.init(priorityItems);
    var packetList = ProgramPacket_1.ProgramPacket.init(programList);
    priorityItems = Priority_1.Priority.attachPackets(priorityItems, packetList);
}
var priorityItems = Priority_1.Priority.init();
init();
$(document).on("change", ".priority-input-event", function (e) {
    var id = $(this).attr('data-id');
    var value = $(this).val();
    priorityItems[id].setWeight(Number(value));
});
var inProcess = 0;
$(document).on("click", ".send-packets", function (e) {
    e.preventDefault();
    if (inProcess) {
        return false;
    }
    inProcess = 1;
    var initRepeat = 0;
    for (var i = 1; i < 5; i++) {
        if ($('#priorityPacketsQueue-column-' + i + 'ul li').length) {
            initRepeat = 0;
        }
    }
    if (initRepeat) {
        init();
    }
    var queue = Queue_1.Queue.init(priorityItems);
    var _loop_1 = function (i) {
        setTimeout(function () {
            var element = queue.get();
            var packet = element.getPacket();
            if (packet) {
                packet.sendElement();
            }
            if (i == 100) {
                inProcess = 0;
            }
        }, 1000 * i);
    };
    for (var i = 0; i < 100; i++) {
        _loop_1(i);
    }
});
//# sourceMappingURL=app.js.map