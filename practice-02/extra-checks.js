
import { demoTasks } from "./src/data.js";
import { searchTasks } from "./src/task-extra.js";

const snapshot = JSON.stringify(demoTasks);
const ids = (tasks) => tasks.map((task) => task.id);

console.log("1. Обычный запрос 'модель':", ids(searchTasks(demoTasks, "модель")));
console.log("2. Разный регистр 'README' / 'readme':", ids(searchTasks(demoTasks, "README")), ids(searchTasks(demoTasks, "readme")));
console.log("3. Краевые пробелы ' ФУНК ':", ids(searchTasks(demoTasks, " ФУНК ")));
console.log("4. Нет совпадений:", ids(searchTasks(demoTasks, "несуществующий фрагмент")));
const all = searchTasks(demoTasks, "   ");
console.log("5. Пустой запрос:", ids(all), "новый массив:", all !== demoTasks);
console.log("6. Пустой список:", ids(searchTasks([], "задача")));
console.log("7. demoTasks не изменился:", JSON.stringify(demoTasks) === snapshot);
