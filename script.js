// Динамічне додавання новин
const news = [
    { title: "Перше вересня!", content: "Вітаємо учнів з початком навчального року!" },
    { title: "Олімпіади", content: "Участь у районних змаганнях з математики." },
    { title: "День відкритих дверей", content: "Запрошуємо батьків на ознайомчу зустріч." }
];

const newsContainer = document.getElementById("news-container");

news.forEach(item => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
    newsContainer.appendChild(newsItem);
});
