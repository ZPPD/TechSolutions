// page elements
const engadget = document.getElementById("engadget");
const recode = document.getElementById("recode");
const nextWeb = document.getElementById("nextWeb");
const newsBox = document.getElementById("newsBox");

// News API Data
//get the urls from the newsapi.org news sources
const apiKey = "2860a50f97ec48408dfdd55d159a9e2c";
const engadgetUrl =
  "https://newsapi.org/v2/top-headlines?sources=engadget&apiKey=2860a50f97ec48408dfdd55d159a9e2c";
const recodeUrl =
  "https://newsapi.org/v2/top-headlines?sources=recode&apiKey=2860a50f97ec48408dfdd55d159a9e2c";
const nextWebUrl =
  "https://newsapi.org/v2/top-headlines?sources=the-next-web&apiKey=2860a50f97ec48408dfdd55d159a9e2c";

// Button Event Listeners
engadget.addEventListener(
  "click",
  function() {
    newsBox.innerHTML = " ";
    // Call getNews() here
    getNews(engadgetUrl).then(articleArray => renderNews(articleArray));
  },
  false
);

recode.addEventListener(
  "click",
  function() {
    newsBox.innerHTML = " ";
    getNews(recodeUrl).then(articleArray => renderNews(articleArray));
  },
  false
);

nextWeb.addEventListener(
  "click",
  function() {
    newsBox.innerHTML = " ";
    getNews(nextWebUrl).then(articleArray => renderNews(articleArray));
  },
  false
);

// Request News Function
async function getNews(url) {
  let response = await fetch(url);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  //saving the first 5 articles from the array
  let articlesArray = jsonResponse.articles.slice(0, 5);
  console.log(articlesArray);
  return articlesArray;
}

// render function
function renderNews(articles) {
  articles.map(article => {
    let articleRow = `
      <div class="articlerow">
        <div class="article">
          <h2 class="title">${article.title}</h2>
          <h3>${article.publishedAt.replace(/[A-Z]/g, "/ ")} By ${
      article.author
    }</h3>
          <p class='paragraph'>${article.content}</p>
          <a href="${
            article.url
          }" target="_blank" class="readmore"><p>Read More</p></a>
          <img class="story-image" src="${article.urlToImage}" alt="${
      article.description
    }">
        </div>
      </div>
    `;
    newsBox.innerHTML += articleRow;
  });
  return articles;
}
