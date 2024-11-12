const initialLoadCount = 9; // Load 9 articles initially
const loadMoreCount = 6; // Load 6 more articles on scroll
const loadedArticles = {
  "masonry-blog": 0,
  "masonry-news": 0,
};
const loadedArticleIndices = {
  // Track the loaded article indices for each section
  "masonry-blog": [],
  "masonry-news": [],
};

const loadingSpinner = document.getElementById("loading-spinner");

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
  return count; // Return the total number of available articles
}

async function loadArticles(count, containerId, pathPrefix, layout) {
  const container = document.getElementById(containerId);
  const startCount = loadedArticles[containerId];

  // Dynamically check the total number of articles
  const totalArticles = await checkAvailableArticles(pathPrefix);

  // Prevent loading if all articles are already loaded
  if (startCount >= totalArticles) {
    console.log("No more articles to load");
    return; // No more articles, stop loading
  }

  loadingSpinner.style.display = "block"; // Show loading spinner

  // Create an array of article indices
  const articleIndices = Array.from({ length: totalArticles }, (_, i) => i + 1);

  // Filter out already loaded articles
  const unloadedIndices = articleIndices.filter(
    (index) => !loadedArticleIndices[containerId].includes(index)
  );

  // Shuffle the remaining indices for blogs, sort for news
  if (layout === "news") {
    unloadedIndices.sort((a, b) => b - a); // Latest news first
  } else {
    shuffleArray(unloadedIndices); // Randomize blog articles
  }

  // Slice the array for the number of articles to load
  const selectedIndices = unloadedIndices.slice(startCount, startCount + count);

  // Load articles based on the selected indices
  for (let i = 0; i < selectedIndices.length; i++) {
    try {
      const articleNumber = selectedIndices[i];
      const article = await import(
        `../pages/news-blogs/articles/${pathPrefix}/article${articleNumber}.js`
      ).then((module) => module.default);

      const { image, title, summary, id, username, avatar, date } = article;
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
          <img src="${image}" alt="${title}" class="pb-4 object-cover object-center w-full rounded-t">
          <div class="flex flex-col gap-4 p-4 justify-between">
            <div  class="flex flex-col gap-4">
             <a href="article.html?id=${id}"><h5 class="font-medium text-secondary-yellow-600 dark:text-secondary-yellow-600 hover:text-secondary-yellow-500 hover:dark:text-secondary-yellow-500 cursor-pointer">${title}</h5></a>
            <p class="p-small text-base line-clamp-8">${summary}</p>
            </div>

            <div class="flex justify-between pt-6 pb-2 borders border-t items-center">
              <div class="flex gap-2 max-w-max items-center">
                <img src="${avatar}" alt="author" class="h-8 rounded-full" />
                <p class="text-sm uppercase">${username}</p>
              </div>
              <div class="p-smaller">${date}</div>
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
          <img src="${image}" alt="${title}" class="pb-4 bg-no-repeat bg-cover bg-center h-48 md:h-m-52 xl:h-56 w-full rounded-t">
          <div class="flex flex-col gap-4 p-4 h-20 md:h-m-24 xl:h-28 justify-between">
            <div  class="flex flex-col gap-4">
             <a href="article.html?id=${id}"><h5 class="font-medium text-secondary-yellow-600 dark:text-secondary-yellow-600 hover:text-secondary-yellow-500 hover:dark:text-secondary-yellow-500 cursor-pointer line-clamp-2">${title}</h5></a>
            </div>

            <div class="flex justify-between items-center">
              <div class="flex gap-2 max-w-max items-center">
                <img src="${avatar}" alt="author" class="h-8 rounded-full" />
                <p class=" text-sm uppercase">${username}</p>
              </div>
              <div class="p-smaller">${date}</div>
            </div>
          </div>
        `;
      }

      container.appendChild(articleElement);
      loadedArticleIndices[containerId].push(articleNumber); // Mark this article as loaded
    } catch (error) {
      console.error(
        `Error loading article ${articleNumber} in ${layout} section:`,
        error
      );
    }
  }

  loadedArticles[containerId] += count; // Update the count of loaded articles
  loadingSpinner.style.display = "none"; // Hide loading spinner
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
