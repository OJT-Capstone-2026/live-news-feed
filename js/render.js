export function renderNews(articles) {

    const container = document.getElementById("newsContainer");

    container.innerHTML = "";

    articles.forEach(article => {

        container.innerHTML += `
        <div class="card">
            <img src="${article.urlToImage || 'https://via.placeholder.com/400x200'}" alt="${article.title}">
            <div class="card-body">
                <h3>${article.title}</h3>
                <p>${article.description || ""}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            </div>
        </div>
        `;
    });
}

export function showLoader() {
    document.getElementById("loader").classList.remove("hidden");
}

export function hideLoader() {
    document.getElementById("loader").classList.add("hidden");
}

export function showError(message) {
    document.getElementById("errorBox").innerHTML = `<p class="error">${message}</p>`;
}
