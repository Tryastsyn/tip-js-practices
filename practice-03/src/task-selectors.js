// Новый модуль ПР3. Вход: корректный массив задач и фильтр all/pending/completed.
// Результат: новый массив, исходный порядок и объекты сохраняются.
export function getVisibleTasks(tasks, filter = "all") {
  if (filter === "pending") {
    return tasks.filter((task) => task.completed === false);
  }
  if (filter === "completed") {
    return tasks.filter((task) => task.completed === true);
  }
  return [...tasks];
}

// Расширение ПР3 (вариант А): отбор по приоритету.
// "all" — все приоритеты; иначе только задачи с указанным приоритетом.
export function filterByPriority(tasks, priority = "all") {
  if (priority === "all") {
    return [...tasks];
  }
  return tasks.filter((task) => task.priority === priority);
}