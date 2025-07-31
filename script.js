function filterMenu(category) {
  const cards = document.querySelectorAll('.menu-card');
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      card.style.display = card.classList.contains(category) ? 'block' : 'none';
    }
  });
}
