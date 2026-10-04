"use strict";

const totalInput = undefined;
const completedInput = "5";

if (typeof totalInput !== "string" || typeof completedInput !== "string") {
    console.log("Ошибка: значения должны быть переданы строками.");
} else {
    const totalText = totalInput.trim();
    const completedText = completedInput.trim();

    if (totalText === "" || completedText === "") {
        console.log("Ошибка: пустой ввод.");
    } else {
        const totalTasks = Number(totalText);
        const completedTasks = Number(completedText);

        if (!Number.isFinite(totalTasks) || !Number.isFinite(completedTasks)) {
            console.log("Ошибка: недопустимое числовое значение.");
        } else if (!Number.isInteger(totalTasks) || !Number.isInteger(completedTasks)) {
            console.log("Ошибка: дробное количество.");
        } else if (totalTasks < 0 || completedTasks < 0) {
            console.log("Ошибка: отрицательное количество.");
        } else if (totalTasks > 1000) {
            console.log("Ошибка: превышена верхняя граница.");
        } else if (completedTasks > totalTasks) {
            console.log("Ошибка: выполнено больше, чем существует.");
        } else if (totalTasks === 0) {
            console.log("Задач пока нет");
        } else {
            let status;
            if (completedTasks === 0) {
                status = "Не начато";
            } else if (completedTasks === totalTasks) {
                status = "Завершено";
            } else {
                status = "В работе";
            }
            const progress = (completedTasks / totalTasks) * 100;
            console.log("Всего задач: " + totalTasks);
            console.log("Выполнено: " + completedTasks);
            console.log("Осталось: " + (totalTasks - completedTasks));
            console.log("Прогресс: " + progress.toFixed(1) + "%");
            console.log("Статус: " + status);
        }
    }
}