// NewsData.io — free tier, works in browsers on GitHub Pages
const API_KEY = "pub_a20b7b78d9e64cfabac2d7f7ff5a340a";
const BASE_URL = "https://newsdata.io/api/1";

const CATEGORY_MAP = {
    general: "top",
    business: "business",
    technology: "technology",
    sports: "sports",
    health: "health",
};

// Fetch with a timeout so we don't hang forever
async function fetchWithTimeout(url, ms = 10000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    try {
        const response = await fetch(url, { signal: controller.signal });
        return response;
    } finally {
        clearTimeout(timer);
    }
}

export async function fetchNews(searchTerm, category) {
    try {
        let url;

        if (searchTerm) {
            url = `${BASE_URL}/news?apikey=${API_KEY}&q=${encodeURIComponent(searchTerm)}&language=en`;
        } else {
            const cat = CATEGORY_MAP[category] || "top";
            url = `${BASE_URL}/latest?apikey=${API_KEY}&category=${cat}&language=en&removeduplicate=1`;
        }

        const response = await fetchWithTimeout(url, 10000);

        if (!response.ok) {
            throw new Error(`Failed to fetch news (${response.status})`);
        }

        const data = await response.json();

        if (data.status !== "success") {
            throw new Error(data.message || "Failed to fetch news");
        }

        // Normalize to the shape render.js expects
        return data.results.map(article => ({
            title: article.title,
            description: article.description,
            url: article.link,
            urlToImage: article.image_url,
        }));

    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Request timed out. Please try again.");
        }
        throw error;
    }
}
