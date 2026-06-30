const API_KEY = "cbf5c3ee5e8a4c19bf3e8026d5dc2f26";

const BASE_URL = "https://newsapi.org/v2";

// allorigins proxies the request server-side, bypassing NewsAPI's browser block
const PROXY = "https://api.allorigins.win/get?url=";

export async function fetchNews(searchTerm, category) {
    try {
        let newsUrl;

        if (searchTerm) {
            newsUrl = `${BASE_URL}/everything?q=${encodeURIComponent(searchTerm)}&apiKey=${API_KEY}`;
        } else {
            newsUrl = `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        }

        const proxiedUrl = `${PROXY}${encodeURIComponent(newsUrl)}`;

        const response = await fetch(proxiedUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch news (${response.status})`);
        }

        const outer = await response.json();

        // allorigins wraps the actual response inside { contents: "..." }
        const data = JSON.parse(outer.contents);

        if (data.status !== "ok") {
            throw new Error(data.message || "NewsAPI error");
        }

        return data.articles;

    } catch (error) {
        throw error;
    }
}
