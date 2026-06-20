import { state } from "./state.js";

import { loadNews }
from "./controller.js";

document
.getElementById("searchBtn")
.addEventListener("click",()=>{

    state.searchTerm =
    document
    .getElementById(
        "searchInput"
    )
    .value;

    state.category =
    document
    .getElementById(
        "categorySelect"
    )
    .value;

    loadNews();
});

loadNews();