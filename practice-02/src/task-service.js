// Заготовка модуля. throw ниже отмечает отсутствие реализации,
// а не способ обработки некорректных данных в готовом решении.
// Для предусмотренных ошибок необходимо возвращать { ok: false, error: "..." }.
// console.log(), prompt(), document и чтение внешнего состояния здесь не нужны.

export function createTask(id, title, priority = "medium") {
  if (!Number.isSafeInteger(id) || id <= 0) {
    return { ok: false, error: "id должен быть положительным целым числом" };
  }

  // 1. Если title не строка, верни { ok: false, error: "..." }.
  // 2. const cleanTitle = title.trim();
  // 3. Если длина cleanTitle меньше 1 или больше 100, верни ошибку.
  // 4. Если priority не "low", "medium" и не "high", верни ошибку.

  return {
    ok: true,
    task: { id, title: cleanTitle, completed: false, priority },
  };
}

export function findTaskById(tasks, id) {
  // TODO: найти задачу с помощью find(); отсутствие результата — undefined.
  throw new Error("Не реализовано: findTaskById");
}

export function getPendingTasks(tasks) {
  // TODO: вернуть новый массив невыполненных задач с помощью filter().
  throw new Error("Не реализовано: getPendingTasks");
}

export function getTaskTitles(tasks) {
  // TODO: вернуть массив названий с помощью map().
  throw new Error("Не реализовано: getTaskTitles");
}

export function getTaskStats(tasks) {
  // TODO: вернуть { total, completed, pending, progress }.
  throw new Error("Не реализовано: getTaskStats");
}

export function addTask(tasks, id, title, priority = "medium") {
  // TODO: проверить данные через createTask(), исключить дублирование id,
  // вернуть { ok: true, tasks: новыйМассив } без изменения исходного массива.
  throw new Error("Не реализовано: addTask");
}

export function setTaskCompleted(tasks, id, completed) {
  // TODO: проверить id и completed, найти задачу, создать обновлённые данные.
  throw new Error("Не реализовано: setTaskCompleted");
}

export function renameTask(tasks, id, title) {
  // TODO: проверить id и title, изменить только название выбранной задачи.
  throw new Error("Не реализовано: renameTask");
}

export function removeTask(tasks, id) {
  // TODO: проверить id, обработать отсутствие задачи, вернуть новый массив.
  throw new Error("Не реализовано: removeTask");
}
