import { searchTasks } from "./task-extra.js";
import { demoTasks, variantNumber, variantTasks } from "./data.js";
import {
  addTask,
  setTaskCompleted,
  renameTask,
  removeTask,
  getPendingTasks,
  getTaskTitles,
  getTaskStats,
} from "./task-service.js";

function printSummary(label, tasks) {
  const { total, completed, pending, progress } = getTaskStats(tasks);
  console.log(`${label}: всего ${total}; выполнено ${completed}; осталось ${pending}`);
  if (total === 0) {
    console.log("Задач пока нет");
  } else {
    console.log(`Прогресс: ${progress.toFixed(1)}%`);
  }
}

const demoSnapshot = JSON.stringify(demoTasks);
let currentTasks = demoTasks;

console.log("Названия:", getTaskTitles(currentTasks));
console.log("Невыполненные:", getPendingTasks(currentTasks).map((task) => task.id));
printSummary("Исходный набор", currentTasks);

let result = addTask(currentTasks, 20, "Добавить проверку", "high");
if (result.ok) {
  currentTasks = result.tasks;
} else {
  console.error(`Ошибка: ${result.error}`);
}
printSummary("После добавления id 20", currentTasks);

result = setTaskCompleted(currentTasks, 4, true);
if (result.ok) {
  currentTasks = result.tasks;
} else {
  console.error(`Ошибка: ${result.error}`);
}
printSummary("После выполнения id 4", currentTasks);

result = renameTask(currentTasks, 10, "Подготовить инструкцию запуска");
if (result.ok) {
  currentTasks = result.tasks;
} else {
  console.error(`Ошибка: ${result.error}`);
}
printSummary("После переименования id 10", currentTasks);

result = removeTask(currentTasks, 7);
if (result.ok) {
  currentTasks = result.tasks;
} else {
  console.error(`Ошибка: ${result.error}`);
}
printSummary("После удаления id 7", currentTasks);

console.log("Идентификаторы итогового списка:", currentTasks.map((task) => task.id));

const failed = addTask(currentTasks, 4, "Повторный id");
if (!failed.ok) {
  console.log(`Показанная ошибка: ${failed.error}`);
}
console.log("Состояние после ошибки:", currentTasks.map((task) => task.id));

console.log("demoTasks не изменился:", JSON.stringify(demoTasks) === demoSnapshot);
// ===== Индивидуальный вариант =====
console.log("");
console.log(`===== Вариант ${variantNumber} =====`);

const variantSnapshot = JSON.stringify(variantTasks);
let variantCurrent = variantTasks;

console.log("Исходные задачи:", getTaskTitles(variantCurrent));
printSummary("Шесть исходных задач", variantCurrent);

let variantResult = addTask(variantCurrent, 80, "Сдать проект преподавателю", "high");
if (variantResult.ok) {
  variantCurrent = variantResult.tasks;
} else {
  console.error(`Ошибка: ${variantResult.error}`);
}
printSummary("После добавления id 80", variantCurrent);

variantResult = setTaskCompleted(variantCurrent, 11, true);
if (variantResult.ok) {
  variantCurrent = variantResult.tasks;
} else {
  console.error(`Ошибка: ${variantResult.error}`);
}
printSummary("После выполнения id 11", variantCurrent);

variantResult = renameTask(variantCurrent, 23, "Утвердить план работ");
if (variantResult.ok) {
  variantCurrent = variantResult.tasks;
} else {
  console.error(`Ошибка: ${variantResult.error}`);
}
printSummary("После переименования id 23", variantCurrent);

variantResult = removeTask(variantCurrent, 37);
if (variantResult.ok) {
  variantCurrent = variantResult.tasks;
} else {
  console.error(`Ошибка: ${variantResult.error}`);
}
printSummary("После удаления id 37", variantCurrent);

variantResult = addTask(variantCurrent, 80, "Повторная задача", "high");
if (!variantResult.ok) {
  console.log(`Показанная ошибка: ${variantResult.error}`);
}
printSummary("После повторного добавления id 80", variantCurrent);

console.log("Итоговые задачи:", variantCurrent.map((task) => `${task.id}: ${task.title}`));
console.log("variantTasks не изменился:", JSON.stringify(variantTasks) === variantSnapshot);
console.log("");
console.log("===== Расширение: поиск =====");
console.log("Поиск ' ФУНК ':", searchTasks(demoTasks, " ФУНК ").map((task) => task.id));
console.log("Поиск 'несуществующий фрагмент':", searchTasks(demoTasks, "несуществующий фрагмент").map((task) => task.id));