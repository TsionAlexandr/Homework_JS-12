class NewsUI {
    constructor() {
        this.newsContainer = document.querySelector('.news-wrap .row');
    }

    /**
     * 
     * @param {Object} article 
     */
    addArticle(article) {
        // console.time();
        const template = NewsUI.generateArticleTemplate(article);
        // console.timeEnd();
        this.newsContainer.insertAdjacentHTML("afterbegin", template);
    }


    clearContainer() {
        let first = this.newsContainer.firstElementChild;
        while (first) {
            this.newsContainer.removeChild(first);
            first = this.newsContainer.firstElementChild;
        }
    }

    /**
     * 
     * @param {Object} article 
     */
    static generateArticleTemplate(article) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${article.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${article.title || ''}</span>

                    <p>${article.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${article.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;

    }

    static generateArticleTemplate(article) {
    
        const col = document.createElement("div");
        const card = document.createElement("div");
        const cardImage = document.createElement("div");
        const img = document.createElement("img");
        const cardContent = document.createElement("div");
        const cardTitle = document.createElement("span");
        const p = document.createElement("p");
        const cardAction = document.createElement("div");
        const a = document.createElement("a");
        
        
        col.classList.add("col", "s12", "m6");
        card.classList.add("card");
        cardImage.classList.add("card-image");
        cardContent.classList.add("card-content");
        cardAction.classList.add("card-action");
        img.src = article.urlToImage;
        cardTitle.classList.add("card-title");
        p.innerText = article.description ;
        a.innerText = "Read more";
        a.target = "_blank";
        a.href = article.url;
    
        cardImage.appendChild(img);
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(p);
        cardAction.appendChild(a);
        card.appendChild(cardImage);
        card.appendChild(cardContent);
        card.appendChild(cardAction);
        col.appendChild(card);        
    }
}
