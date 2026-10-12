import { demoTasks } from "./src/data.js";
import {
  addTask,
  removeTask,
  renameTask,
  setTaskCompleted,
  getTaskStats,
  getPendingTasks,
} from "./src/task-service.js";

const snapshot = JSON.stringify(demoTasks);

// Проверка 1: удалить id 7, затем снова добавить id 7
const afterRemove = removeTask(demoTasks, 7);
const check1 = addTask(afterRemove.tasks, 7, "Вернуть задачу 7", "low");
console.log("Проверка 1:", check1.ok, check1.tasks.map((t) => t.id));

// Проверка 2: переименовать первую запись (id 1), снять выполнение у последней (id 10)
const renamed = renameTask(demoTasks, 1, "  Первая задача  ");
const check2 = setTaskCompleted(renamed.tasks, 10, false);
const first = check2.tasks[0];
const last = check2.tasks[check2.tasks.length - 1];
console.log("Проверка 2:", first.title, last.completed, getTaskStats(check2.tasks));

// Проверка 3: последовательно выполнить id 4 и id 7
const step1 = setTaskCompleted(demoTasks, 4, true);
const check3 = setTaskCompleted(step1.tasks, 7, true);
console.log(
  "Проверка 3:",
  getPendingTasks(check3.tasks).length,
  getTaskStats(check3.tasks).progress
);

console.log("demoTasks не изменился:", JSON.stringify(demoTasks) === snapshot);