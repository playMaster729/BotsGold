const SECRET_CODE = "BotsFarmCode=148878";
let screenHistory = []; // Стек для отслеживания экранов
let currentSection = ''; // Текущий раздел (Фарм или Просто)

window.onload = function () {
    const hash = window.location.hash.substring(1); // Убираем символ #
    const content = document.getElementById("content");

    if (hash === SECRET_CODE) {
        setTimeout(() => {
            content.classList.remove("hidden");
        }, 1000); // Задержка для отображения интерфейса
    } else {
        setTimeout(() => {
            window.location.href = "https://google.com";
        }, 1000); // Задержка перед редиректом
    }
};

function openSection(sectionId) {
    // Если мы переходим в новый раздел, очищаем историю экранов
    if (currentSection !== sectionId) {
        screenHistory = []; // Очищаем историю при смене раздела
        currentSection = sectionId; // Обновляем текущий раздел
    }

    updateHistory(sectionId + "-screen"); // Добавляем текущий экран в историю
    hideAllScreens();
    document.getElementById(`${sectionId}-screen`).classList.remove("hidden");
}

function openSubsection(subsectionId) {
    updateHistory(subsectionId + "-screen"); // Добавляем текущий экран в историю
    hideAllScreens();
    document.getElementById(`${subsectionId}-screen`).classList.remove("hidden");
}

function goBack() {
    if (screenHistory.length > 1) {
        screenHistory.pop(); // Удаляем текущий экран из истории
        const previousScreen = screenHistory[screenHistory.length - 1];
        hideAllScreens();
        document.getElementById(previousScreen).classList.remove("hidden");
    } else {
        // Если история пуста, возвращаемся на главный экран
        hideAllScreens();
        document.getElementById("main-screen").classList.remove("hidden");
    }
}

function updateHistory(currentScreen) {
    if (screenHistory[screenHistory.length - 1] !== currentScreen) {
        screenHistory.push(currentScreen); // Добавляем новый экран в историю
    }
}

function hideAllScreens() {
    const screens = document.querySelectorAll(".container");
    screens.forEach(screen => screen.classList.add("hidden"));
}
