document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.getElementById('search-icon');
  const searchBarContainer = document.getElementById('search-bar-container');

  searchIcon.addEventListener('click', () => {
      searchBarContainer.classList.toggle('active');
  });
});
