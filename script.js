const SECRET_CODE = "BotsFarmCode=148878";
let screenHistory = [];

window.onload = function () {
    const hash = window.location.hash.substring(1);

    if (hash !== SECRET_CODE) {
        window.location.href = "https://google.com";
    }
};

function openSection(sectionId) {
    navigateTo(`${sectionId}-screen`);
}

function openSubsection(subsectionId) {
    navigateTo(`${subsectionId}-screen`);
}

function goBack() {
    if (screenHistory.length > 1) {
        // Удаляем текущий экран из истории
        screenHistory.pop();
        const previousScreen = screenHistory[screenHistory.length - 1];
        showScreen(previousScreen);
    }
}

function navigateTo(screenId) {
    // Сохраняем текущий экран в историю
    if (screenHistory[screenHistory.length - 1] !== screenId) {
        screenHistory.push(screenId);
    }
    showScreen(screenId);
}

function showScreen(screenId) {
    // Скрываем все экраны
    const screens = document.querySelectorAll(".container");
    screens.forEach(screen => screen.classList.add("hidden"));

    // Показываем выбранный экран
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.remove("hidden");
    }
}
