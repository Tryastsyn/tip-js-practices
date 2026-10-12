export function searchTasks(tasks, query) {
  const cleanQuery = query.trim().toLowerCase();
  return tasks.filter((task) => task.title.toLowerCase().includes(cleanQuery));
}