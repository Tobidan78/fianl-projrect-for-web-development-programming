// === BeatBox UI Script ===

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Change button text/icon if you want
  toggleBtn.textContent = body.classList.contains('dark')
    ? '☀️ Light Mode'
    : '🍗 Toggle Theme';
});

// Simulated Search (for demonstration)
const searchInput = document.getElementById('search');
const resultsSection = document.getElementById('results');
const trendingSection = document.getElementById('trending');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();

  // Dummy search: Hide trending if there's a search
  if (query.length > 0) {
    trendingSection.style.display = 'none';
    showSearchResults(query);
  } else {
    trendingSection.style.display = 'block';
    resultsSection.innerHTML = '';
  }
});

function showSearchResults(query) {
  // In real app: fetch results from Deezer API
  // Here we simulate one match for demo
  resultsSection.innerHTML = `
    <div class="card bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition fade-in">
      <img src="Drake.jpeg" alt="Drake" class="w-full h-auto rounded mb-3">
      <p><strong>Artist:</strong> Drake</p>
      <p><strong>Track:</strong> Search Match for "${query}"</p>
    </div>
  `;
}

// Optional: animate cards on scroll (fade-in effect)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});