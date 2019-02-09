const newsService = new NewsService();
const uiService = new NewsUI();


// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const queryInput = form['search'];

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;

    if (!country || !category) return console.error('Введите страну и категорию для поиска');

    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}

function onInputChange(event) {
    const query = queryInput.value;

    if (!query || query.length < 3) {
        uiService.clearContainer();       
    }

    newsService.getNewsByPhrase(query, (response) => {
        const { totalResults, articles } = response;

        // console.time();
        uiService.clearContainer();
        // console.timeEnd();

        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();

        
    });
}




countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
queryInput.addEventListener('keyup', onInputChange);

