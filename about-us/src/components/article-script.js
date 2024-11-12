(async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");
  console.log("Article ID:", articleId);
  if (!articleId) return;

  let article;
  try {
    article = await import(
      `../pages/news-blogs/articles/blog/article${articleId}.js`
    )
      .catch(() =>
        import(`../pages/news-blogs/articles/news/article${articleId}.js`)
      )
      .then((module) => module.default);
  } catch (error) {
    console.error("Error loading article:", error);
  }

  if (article) {
    const articleContainer = document.getElementById("article-content");
    articleContainer.innerHTML = `
      <div
      class="bg-no-repeat bg-cover bg-top w-screen bg-fixed h-min"
      style="
        background-image: url('${article.image}');
        background-size: cover;
        background-position: top;
        height: 75vh;
      "
    ></div>
    <div class="flex w-screen min-w-screen justify-center">
      <div class="flex w-full max-w-7xl -mt-40">
        <div class="surface flex flex-col gap-8 md:gap-10 xl:gap-12 p-8 md:p-8 xl:p-24">
          <div>${article.tags}</div>
          <div>
            <h3 class="xl:text-6xl">${article.title}</h3>
            <p class="text-base mt-4">${article.summary}</p>
          </div>
          
          <div class="flex justify-between items-center">
              <div class="flex gap-2 max-w-max items-center">
                <img src="${article.avatar}" alt="author" class="h-12 rounded-full" />
                <p class=" text-sm font-semibold uppercase">${article.username}</p>
                <div class="p-smaller">${article.date}</div>
              </div>
              <p class="p-smaller">${article.duration}</p>
            </div>
          <div class="mt-4">${article.content}</div>
        </div>
        <div class="hidden [flex] gap-4 -ml-6">
        <p>soci</p>
        </div>
      </div>
    </div>
    `;
  }
})();
