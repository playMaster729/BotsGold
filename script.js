const SECRET_CODE = "BotsFarmCode=148878";

window.onload = function () {
    const hash = window.location.hash.substring(1); // Убираем символ #
    const content = document.getElementById("content");

    if (hash === SECRET_CODE) {
        setTimeout(() => {
            content.classList.remove("hidden");
        }, 1000); // Задержка для загрузки интерфейса
    } else {
        setTimeout(() => {
            window.location.href = "https://google.com";
        }, 1000); // Задержка перед редиректом
    }
};

function openSection(sectionId) {
    hideAllScreens();
    document.getElementById(`${sectionId}-screen`).classList.remove("hidden");
}

function openSubsection(subsectionId) {
    hideAllScreens();
    document.getElementById(`${subsectionId}-screen`).classList.remove("hidden");
}

function goBack() {
    hideAllScreens();
    document.getElementById("main-screen").classList.remove("hidden");
}

function hideAllScreens() {
    const screens = document.querySelectorAll(".container");
    screens.forEach(screen => screen.classList.add("hidden"));
}
