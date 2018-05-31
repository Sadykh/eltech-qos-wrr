import {Priority} from "./model/Priority";
import {Program} from "./model/Program";
import {ProgramPacket} from "./model/ProgramPacket";
import {Queue} from "./model/Queue";

let priorityItems: Array<Priority> = Priority.init();
const programList: Array<Program> = Program.init(priorityItems);
const packetList: Array<ProgramPacket> = ProgramPacket.init(programList);
priorityItems = Priority.attachPackets(priorityItems, packetList);

let queue = new Queue();

for (let i = 0; i < 20; i++) {
    console.info(queue.get());
}