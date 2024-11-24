// Секретный код доступа
const SECRET_CODE = "BotsFarmCode=148878";

window.onload = function () {
    const hash = window.location.hash.substring(1); // Убираем символ #
    
    if (hash === SECRET_CODE) {
        // Открываем доступ
        document.getElementById("content").classList.remove("hidden");
    } else {
        // Перенаправляем на Google
        window.location.href = "https://google.com";
    }
};

function openSection(sectionId) {
    // Скрываем главный экран
    document.getElementById("main-screen").classList.add("hidden");

    // Показываем выбранный раздел
    document.getElementById(`${sectionId}-screen`).classList.remove("hidden");
}

function goBack() {
    // Скрываем все разделы
    document.getElementById("farm-screen").classList.add("hidden");
    document.getElementById("just-screen").classList.add("hidden");

    // Возвращаемся на главный экран
    document.getElementById("main-screen").classList.remove("hidden");
}
