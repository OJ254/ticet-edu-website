const initialLoadCount = 8; // Load 8 articles initially
const loadMoreCount = 4; // Load 4 more articles on scroll
const loadedArticles = {
  "masonry-blog": 0,
  "masonry-news": 0,
};

const loadingSpinner = document.getElementById("loading-spinner");

async function checkAvailableArticles(pathPrefix) {
  let count = 0;
  while (true) {
    try {
      // Attempt to load the article file
      await import(
        `../pages/news-blogs/articles/${pathPrefix}/article${count + 1}.js`
      );
      count++;
    } catch (error) {
      // Stop if the file doesn't exist
      break;
    }
  }
  return count;
}

async function loadArticles(count, containerId, pathPrefix, layout) {
  const container = document.getElementById(containerId);
  const startCount = loadedArticles[containerId];

  // Dynamically check the total number of articles
  const totalArticles = await checkAvailableArticles(pathPrefix);

  // Prevent loading if all articles are already loaded
  if (startCount >= totalArticles) {
    return;
  }

  loadingSpinner.style.display = "block"; // Show loading spinner

  const loadCount = Math.min(count, totalArticles - startCount); // Determine how many articles to load
  let articles = [];

  for (let i = 0; i < loadCount; i++) {
    try {
      const articleNumber = startCount + i + 1; // +1 because we're using a 1-based index
      const article = await import(
        `../pages/news-blogs/articles/${pathPrefix}/article${articleNumber}.js`
      ).then((module) => module.default);

      const { image, title, summary, id, username, avatar, date } = article;
      articles.push({ image, title, summary, id, username, avatar, date });
    } catch (error) {
      console.error(
        `Error loading article ${startCount + i + 1} in ${layout} section:`,
        error
      );
    }
  }

  // Randomize articles if it's the blog section
  if (layout === "blog") {
    articles = shuffleArray(articles);
  }
  // Sort articles in descending order if it's the news section
  else if (layout === "news") {
    articles.sort((a, b) => b.id - a.id); // Sort by ID in descending order
  }

  // Create and append article elements
  for (const article of articles) {
    const articleElement = document.createElement("div");
    articleElement.classList.add(
      layout === "blog" ? "masonry-item" : "news-item"
    );

    if (layout === "blog") {
      articleElement.classList.add(
        "surface",
        "masonry-item",
        "surface-hover",
        "rounded"
      );
      articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="pb-4 bg-no-repeat object-cover object-top h-48 md:h-m-52 xl:h-56 w-full rounded-t" loading="eager">
        <div class="flex flex-col gap-4 p-4 h-full justify-between">
          <a href="article.html?id=${article.id}"><h5 class="font-medium text-secondary-yellow-600 dark:text-secondary-yellow-600 hover:text-secondary-yellow-500 hover:dark:text-secondary-yellow-500 cursor-pointer line-clamp-2">${article.title}</h5></a>
           
          <div class="flex flex-col gap-4">
            <p class="p-small text-base line-clamp-5">${article.summary}</p>
            
            <div class="flex justify-between pt-6 pb-2 borders border-t items-center">
              <div class="flex gap-2 max-w-max items-center">
                <img src="${article.avatar}" alt="author" class="h-8 rounded-full" />
                <p class="text-sm uppercase">${article.username}</p>
              </div>
              <div class="p-smaller">${article.date}</div>
            </div>
          </div>
        </div>
      `;
    } else if (layout === "news") {
      articleElement.classList.add(
        "surface",
        "masonry-item",
        "surface-hover",
        "rounded"
      );
      articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.title}" class="pb-4 bg-no-repeat bg-cover bg-center h-48 md:h-m-52 xl:h-56 w-full rounded-t">
        <div class="flex flex-col gap-4 p-4 content-between">

           <a href="article.html?id=${article.id}"><h5 class="font-medium text-secondary-yellow-600 dark:text-secondary-yellow-600 hover:text-secondary-yellow-500 hover:dark:text-secondary-yellow-500 cursor-pointer line-clamp-2">${article.title}</h5></a>

          <div class="flex justify-between items-center">
            <div class="flex gap-2 max-w-max items-center">
              <img src="${article.avatar}" alt="author" class="h-8 rounded-full" />
              <p class=" text-sm uppercase">${article.username}</p>
            </div>
            <div class="p-smaller">${article.date}</div>
          </div>
        </div>
      `;
    }

    container.appendChild(articleElement);
  }

  loadedArticles[containerId] += loadCount; // Update the count of loaded articles
  loadingSpinner.style.display = "none"; // Hide loading spinner
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function switchTab(tab) {
  const blogSection = document.getElementById("blog-section");
  const newsSection = document.getElementById("news-section");
  document
    .getElementById("tab-blog")
    .classList.toggle("active", tab === "blog");
  document
    .getElementById("tab-news")
    .classList.toggle("active", tab === "news");

  if (tab === "blog") {
    blogSection.style.display = "block";
    newsSection.style.display = "none";

    // Check if articles are loaded for the blog section
    if (loadedArticles["masonry-blog"] === 0) {
      loadArticles(initialLoadCount, "masonry-blog", "blog", "blog");
    }
  } else {
    blogSection.style.display = "none";
    newsSection.style.display = "block";

    // Check if articles are loaded for the news section
    if (loadedArticles["masonry-news"] === 0) {
      loadArticles(initialLoadCount, "masonry-news", "news", "news");
    }
  }
}

function redirectToArticle(id) {
  window.location.href = `article.html?id=${id}`;
}

// Check if more articles need to be loaded on scroll
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    // 50px threshold for triggering load
    loadArticles(loadMoreCount, "masonry-blog", "blog", "blog");
    loadArticles(loadMoreCount, "masonry-news", "news", "news");
  }
});

// Initial load for both sections
loadArticles(initialLoadCount, "masonry-blog", "blog", "blog");
loadArticles(initialLoadCount, "masonry-news", "news", "news");
