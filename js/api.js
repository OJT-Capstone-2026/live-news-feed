// NewsData.io - works directly in browsers including GitHub Pages
// Free tier: 200 requests/day — https://newsdata.io/register
// Replace with your own key from https://newsdata.io/api-key
const API_KEY = "pub_a20b7b78d9e64cfabac2d7f7ff5a340a";

const BASE_URL = "https://newsdata.io/api/1";

// Map category names to NewsData.io category values
const CATEGORY_MAP = {
    general: "top",
    business: "business",
    technology: "technology",
    sports: "sports",
    health: "health",
};

export async function fetchNews(searchTerm, category) {
    try {
        let url;

        if (searchTerm) {
            url = `${BASE_URL}/news?apikey=${API_KEY}&q=${encodeURIComponent(searchTerm)}&language=en`;
        } else {
            const cat = CATEGORY_MAP[category] || "top";
            url = `${BASE_URL}/news?apikey=${API_KEY}&category=${cat}&language=en`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch news (${response.status})`);
        }

        const data = await response.json();

        if (data.status !== "success") {
            throw new Error(data.message || "Failed to fetch news");
        }

        // Normalize fields to match what render.js expects
        return data.results.map(article => ({
            title: article.title,
            description: article.description,
            url: article.link,
            urlToImage: article.image_url,
        }));

    } catch (error) {
        throw error;
    }
}
