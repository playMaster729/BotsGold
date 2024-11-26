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

// Массивы с текстами и ссылками
const tinyVerseLinks = [
    { text: "◡̈⃝", url: "https://example1.com" },
    { text: "Gawr Gura", url: "https://example2.com" },
    { text: "Алина", url: "https://example3.com" },
    { text: "Андрей", url: "https://example4.com" },
    { text: "Игорь", url: "https://example5.com" },
    { text: "Владимир", url: "https://example6.com" },
    { text: "Михаил", url: "https://example7.com" },
    // Добавьте остальные элементы...
];

const majorLinks = [
    { text: "◡̈⃝", url: "https://example1.com" },
    { text: "Gawr Gura", url: "https://example2.com" },
    { text: "Алина", url: "https://example3.com" },
    { text: "Андрей", url: "https://example4.com" },
    { text: "Игорь", url: "https://example5.com" },
    { text: "Владимир", url: "https://example6.com" },
    { text: "Михаил", url: "https://example7.com" },
    // Добавьте остальные элементы...
];

// Индексы для отслеживания текущего состояния кнопок
let tinyVerseIndex = 0;
let majorIndex = 0;

// Функция для изменения текста и перехода по ссылке
function changeLink(buttonId, section) {
    let button = document.getElementById(buttonId);
    let newLink, newText;

    if (section === "tinyVerse") {
        // Устанавливаем новый текст и ссылку
        newLink = tinyVerseLinks[tinyVerseIndex].url;
        newText = tinyVerseLinks[tinyVerseIndex].text;

        // Обновляем индекс на следующий элемент
        tinyVerseIndex = (tinyVerseIndex + 1) % tinyVerseLinks.length;
    } else if (section === "major") {
        // Устанавливаем новый текст и ссылку
        newLink = majorLinks[majorIndex].url;
        newText = majorLinks[majorIndex].text;

        // Обновляем индекс на следующий элемент
        majorIndex = (majorIndex + 1) % majorLinks.length;
    }

    // Сразу меняем текст кнопки
    button.innerText = newText;

    // Открываем ссылку в новой вкладке
    window.open(newLink, "_blank");
}
