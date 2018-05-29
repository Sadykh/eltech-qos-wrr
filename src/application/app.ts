import {Priority} from "./model/Priority";
import {Program} from "./model/Program";

const priorityItems: Array<Priority> = Priority.init();
const programList: Array<Program> = Program.init(priorityItems);
console.log(programList);