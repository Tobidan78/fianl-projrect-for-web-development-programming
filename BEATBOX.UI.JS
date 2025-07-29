// script.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const searchInput = document.getElementById("search");
  const resultsContainer = document.getElementById("results");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Toggle Theme
  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });

  // Fade-in animation trigger
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
  });

  // Mock Search Functionality
  searchInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        resultsContainer.innerHTML = `<p>Searching for "${query}"...</p>`;
        // Simulate async search result
        setTimeout(() => {
          resultsContainer.innerHTML = `
            <div class="card fade-in">
              <img src="search1.jpeg" alt="Search Result" />
              <p><strong>Artist:</strong> Search Artist</p>
              <p><strong>Track:</strong> ${query} Track</p>
            </div>
          `;
        }, 1000);
      }
    }
  });
});