const searchInput = document.getElementById("search-input");

const newsItems = document.querySelectorAll("main figure, main article");

searchInput.addEventListener("input", (event) => {
  const term = event.target.value.toLowerCase();

  newsItems.forEach((item) => {
    const title = item.querySelector("h2, h3, p");

    if (title) {
      const text = title.textContent.toLowerCase();

      if (text.includes(term)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
});
