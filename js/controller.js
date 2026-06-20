import { state } from "./state.js";
import { fetchNews } from "./api.js";

import {
    renderNews,
    showLoader,
    hideLoader,
    showError
}
from "./render.js";

export async function loadNews(){

    try{

        showLoader();

        const articles =
        await fetchNews(
            state.searchTerm,
            state.category
        );

        state.articles =
        articles;

        renderNews(
            state.articles
        );
    }
    catch(error){

        showError(
            error.message
        );
    }
    finally{

        hideLoader();
    }
}